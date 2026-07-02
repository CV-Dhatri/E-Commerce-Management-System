import pandas as pd
import os

# 1. Load the Datasets
print("Loading datasets for Category Analysis...")
sales_df = pd.read_csv('datasets/sales_mock_data.csv')
products_df = pd.read_csv('datasets/product_mock_data.csv')
categories_df = pd.read_csv('datasets/product_mock_data.csv')[['category', 'category_name']].drop_duplicates()

# 2. Filter for successful sales
successful_sales = sales_df[sales_df['status'] != 'Cancelled']

# 3. Join Sales with Products to get Category info on every line item
sales_with_products = pd.merge(successful_sales, products_df[['_id', 'category_name']], 
                               left_on='product_id', right_on='_id', how='left')

# ---------------------------------------------------------
# 4. CATEGORY PERFORMANCE METRICS
# ---------------------------------------------------------
print("Calculating Category Performance...")

# Group by Category Name to calculate Revenue and Units Sold per category
category_performance = sales_with_products.groupby('category_name').agg(
    total_revenue=pd.NamedAgg(column='line_total', aggfunc='sum'),
    units_sold=pd.NamedAgg(column='quantity', aggfunc='sum'),
    total_orders=pd.NamedAgg(column='order_id', aggfunc='nunique')
).reset_index()

# Sort by most profitable category
category_performance = category_performance.sort_values(by='total_revenue', ascending=False)

# Save the report
category_performance.to_csv('reports/category_performance_report.csv', index=False)
print("✅ Category Performance report saved to 'reports/category_performance_report.csv'")
print(category_performance.head())