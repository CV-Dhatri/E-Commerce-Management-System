import pandas as pd
import os

# 1. Load the Product Dataset
print("Loading inventory data...")
products_df = pd.read_csv('datasets/product_mock_data.csv')

# Ensure reports directory exists
os.makedirs('reports', exist_ok=True)

# ---------------------------------------------------------
# 2. CALCULATE INVENTORY KPIs
# ---------------------------------------------------------
print("Calculating Inventory Metrics...")

# Total Current Stock (Sum of all stock quantities)
total_stock_units = products_df['stockQuantity'].sum()

# Total Inventory Value (Price * Stock Quantity for all items)
products_df['total_value'] = products_df['price'] * products_df['stockQuantity']
total_inventory_value = products_df['total_value'].sum()

# ---------------------------------------------------------
# 3. LOW-STOCK ANALYTICS
# ---------------------------------------------------------
# Define threshold based on Backend sync (Assume < 20)
LOW_STOCK_THRESHOLD = 10

# Filter for low stock products
low_stock_df = products_df[products_df['stockQuantity'] < LOW_STOCK_THRESHOLD].copy()

# Sort by lowest stock first
low_stock_df = low_stock_df.sort_values(by='stockQuantity', ascending=True)

# Select only the relevant columns for the Admin Dashboard
low_stock_report = low_stock_df[['_id', 'name', 'category_name', 'price', 'stockQuantity']]

# Save the reports
low_stock_report.to_csv('reports/low_stock_report.csv', index=False)
products_df.to_csv('reports/full_inventory_valuation.csv', index=False)

print(f"\n--- DAILY INVENTORY KPIs ---")
print(f"Total Units in Stock: {total_stock_units}")
print(f"Total Inventory Value: ${total_inventory_value:,.2f}")
print(f"Items at Risk (Low Stock): {len(low_stock_report)}")
print(f"\n✅ Inventory reports saved to 'reports/'")