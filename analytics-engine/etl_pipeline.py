import requests
import pandas as pd
import os

# Configuration: Replace with your actual deployment URL
BASE_URL = "http://localhost:5000" 
TOKEN = "YOUR_JWT_TOKEN_HERE" 

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json"
}

def fetch_data(endpoint):
    """Extracts data from the backend APIs"""
    url = f"{BASE_URL}{endpoint}"
    try:
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        data = response.json()
        
        # Adjusting for payload structure: 
        # If the API returns { "success": true, "data": [...] }
        if isinstance(data, dict) and "data" in data:
            return pd.DataFrame(data["data"])
        return pd.DataFrame(data)
    except Exception as e:
        print(f"❌ Error fetching from {endpoint}: {e}")
        return pd.DataFrame()

print("🚀 Starting ETL Pipeline...")

# ==========================================
# 1. EXTRACT
# ==========================================
print("📥 Extracting data from APIs...")
orders_df = fetch_data("/api/export/orders")
products_df = fetch_data("/api/export/products")
customers_df = fetch_data("/api/export/customers")

# ==========================================
# 2. TRANSFORM
# ==========================================
print("Columns in products_df:", products_df.columns.tolist())
print("⚙️ Transforming data...")

# A. Clean Orders (Flattening logic)
# Your Order schema has a nested 'products' array. We must explode it.
if not orders_df.empty:
    sales_clean = orders_df.explode('products')
    # Normalize the dictionary columns from the exploded array
    products_norm = pd.json_normalize(sales_clean['products'])
    sales_clean = pd.concat([sales_clean.drop('products', axis=1), products_norm], axis=1)
    
    # Filter out cancelled orders and drop empty rows
    sales_clean = sales_clean[sales_clean['status'] != 'Cancelled']
    sales_clean = sales_clean.dropna(subset=['product', 'quantity', 'price'])

# B. Clean Products
products_clean = products_df.copy()
products_clean['stockQuantity'] = products_clean['stockQuantity'].apply(lambda x: max(0, x))

# C. Clean Customers
customers_clean = customers_df.dropna(subset=['email'])

# ==========================================
# 3. LOAD
# ==========================================
print("📤 Loading data into final reports...")
os.makedirs('reports/final_dashboard', exist_ok=True)

# Generate KPI Summary
total_revenue = sales_clean['price'].sum() # price * quantity needs to be calculated if not exists
sales_clean['line_total'] = sales_clean['price'] * sales_clean['quantity']
total_revenue = sales_clean['line_total'].sum()

kpi_summary = pd.DataFrame({
    'Metric': ['Total Revenue', 'Total Orders'],
    'Value': [total_revenue, sales_clean['order_id'].nunique()]
})

# Final Exports
kpi_summary.to_csv('reports/final_dashboard/kpi_summary.csv', index=False)
sales_clean.to_csv('reports/final_dashboard/clean_sales.csv', index=False)
products_clean.to_csv('reports/final_dashboard/clean_products.csv', index=False)

print("✅ ETL Pipeline Complete! Assets ready for Admin Dashboard.")