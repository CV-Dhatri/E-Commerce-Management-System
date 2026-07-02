import pandas as pd
import os

# 1. Load the Sales Dataset
print("Loading transaction data...")
sales_df = pd.read_csv('datasets/sales_mock_data.csv')

# Ensure reports directory exists
os.makedirs('reports', exist_ok=True)

# 2. Filter for valid transactions
# We only want to calculate revenue on completed or in-progress orders, not cancelled ones.
valid_orders = sales_df[sales_df['status'] != 'Cancelled']

# ---------------------------------------------------------
# 3. CALCULATE ORDER KPIs
# ---------------------------------------------------------
print("Calculating Order KPIs...")

# Total Revenue (Sum of line totals)
total_revenue = valid_orders['line_total'].sum()

# Total Unique Orders (Counting unique order IDs)
total_orders = valid_orders['order_id'].nunique()

# Average Order Value (AOV)
average_order_value = total_revenue / total_orders if total_orders > 0 else 0

# ---------------------------------------------------------
# 4. ORDER STATUS BREAKDOWN
# ---------------------------------------------------------
# Admin dashboard will need to know how many orders are pending vs shipped
status_breakdown = sales_df.groupby('status')['order_id'].nunique().reset_index()
status_breakdown.rename(columns={'order_id': 'order_count'}, inplace=True)

# Save the reports
status_breakdown.to_csv('reports/order_status_report.csv', index=False)

print(f"\n--- DAILY ORDER KPIs ---")
print(f"Total Orders: {total_orders}")
print(f"Total Revenue: ${total_revenue:,.2f}")
print(f"Average Order Value: ${average_order_value:,.2f}")
print(f"\n--- STATUS BREAKDOWN ---")
print(status_breakdown.to_string(index=False))
print("\n✅ Order reports saved to 'reports/'")