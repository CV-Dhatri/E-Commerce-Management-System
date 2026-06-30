import pandas as pd
import os

# 1. Load the Datasets
print("Loading datasets...")
sales_df = pd.read_csv('datasets/sales_mock_data.csv')
customers_df = pd.read_csv('datasets/customer_mock_data.csv')
products_df = pd.read_csv('datasets/product_mock_data.csv')

# Create a reports directory if it doesn't exist
os.makedirs('reports', exist_ok=True)

# ---------------------------------------------------------
# 2. CORE REVENUE & ORDER METRICS
# ---------------------------------------------------------
print("Calculating Core KPIs...")

# Calculate Total Revenue (Sum of all line items where status is not Cancelled)
successful_sales = sales_df[sales_df['status'] != 'Cancelled']
total_revenue = successful_sales['line_total'].sum()

# Calculate Total Unique Orders
total_orders = successful_sales['order_id'].nunique()

# Calculate Average Order Value (AOV)
aov = total_revenue / total_orders if total_orders > 0 else 0

# Calculate Active Customers (Customers who have made at least one successful purchase)
active_customers = successful_sales['user_id'].nunique()

print(f"--- BUSINESS METRICS ---")
print(f"Total Revenue: ${total_revenue:,.2f}")
print(f"Total Orders: {total_orders}")
print(f"Average Order Value: ${aov:,.2f}")
print(f"Active Customers: {active_customers}")

# ---------------------------------------------------------
# 3. TOP SELLING PRODUCTS LOGIC
# ---------------------------------------------------------
print("\nCalculating Top Products...")

# Group by product_id and sum the quantities sold
top_products = successful_sales.groupby('product_id')['quantity'].sum().reset_index()

# Merge with the products dataframe to get the product names
top_products_detailed = pd.merge(top_products, products_df[['_id', 'name', 'category_name']], 
                                 left_on='product_id', right_on='_id', how='left')

# Sort by highest quantity and drop the redundant _id column
top_products_detailed = top_products_detailed.sort_values(by='quantity', ascending=False)
top_products_detailed = top_products_detailed[['product_id', 'name', 'category_name', 'quantity']]

# Save the report
top_products_detailed.to_csv('reports/top_products_report.csv', index=False)
print("✅ Top Products report saved to 'reports/top_products_report.csv'")
print(top_products_detailed.head(5))