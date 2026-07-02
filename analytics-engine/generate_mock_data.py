import pandas as pd
import numpy as np
import random
import string
from datetime import datetime, timedelta
import os

# Create datasets directory if it doesn't exist
os.makedirs('datasets', exist_ok=True)

# Helper function to simulate MongoDB ObjectIds (24-char hex)
def generate_mongo_id():
    return ''.join(random.choices(string.hexdigits.lower(), k=24))

# ---------------------------------------------------------
# 1. GENERATE CUSTOMERS (Matches userSchema)
# ---------------------------------------------------------
print("Generating Customers...")
customer_ids = [generate_mongo_id() for _ in range(100)]
customers = []

for cid in customer_ids:
    customers.append({
        '_id': cid,
        'name': f"User_{random.randint(1000, 9999)}",
        'email': f"user{random.randint(1000, 9999)}@example.com",
        'role': 'user', # Default from schema
        'createdAt': (datetime.now() - timedelta(days=random.randint(1, 365))).isoformat()
    })

df_customers = pd.DataFrame(customers)
df_customers.to_csv('datasets/customer_mock_data.csv', index=False)

# ---------------------------------------------------------
# 2. GENERATE CATEGORIES & PRODUCTS (Aligned with seed.js)
# ---------------------------------------------------------
print("Generating Categories and Products...")
# Using "Electronics" from seed.js, plus a few others to make analytics interesting
category_names = ['Electronics', 'Mobile Devices', 'Laptops', 'Audio', 'Accessories']
categories = [{'categoryId': generate_mongo_id(), 'name': name} for name in category_names]

product_ids = [generate_mongo_id() for _ in range(50)]
products = []

tech_brands = ['Apple', 'Samsung', 'Sony', 'Dell', 'Logitech']
tech_items = ['Smartphone', 'Laptop', 'Headphones', 'Tablet', 'Monitor']

for pid in product_ids:
    cat = random.choice(categories)
    # Generate realistic tech prices (e.g., 1000 to 150000)
    price = round(random.uniform(1000.0, 150000.0), 2) 
    
    products.append({
        '_id': pid,
        'name': f"{random.choice(tech_brands)} {random.choice(tech_items)} {random.randint(1, 100)}",
        'price': price,
        'category': cat['categoryId'], 
        'category_name': cat['name'],  
        'stockQuantity': random.randint(10, 100),
        'status': True,
        'createdAt': (datetime.now() - timedelta(days=random.randint(1, 365))).isoformat()
    })

df_products = pd.DataFrame(products)
df_products.to_csv('datasets/product_mock_data.csv', index=False)

# ---------------------------------------------------------
# 3. GENERATE SALES / ORDERS (Matches orderSchema)
# ---------------------------------------------------------
# We flatten the 'products' array from the orderSchema into single rows 
# so Pandas can easily group by product for "Top Selling Products"
print("Generating Sales Data...")
order_statuses = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"]

sales = []
# Generate 500 unique orders
for _ in range(500):
    order_id = generate_mongo_id()
    user_id = random.choice(customer_ids)
    order_date = (datetime.now() - timedelta(days=random.randint(1, 90))).isoformat()
    status = np.random.choice(order_statuses, p=[0.05, 0.1, 0.15, 0.65, 0.05])
    
    # 1 to 4 different products per order
    num_items = random.randint(1, 4)
    order_products = random.sample(products, num_items)
    
    order_total = 0
    items_in_order = []
    
    for prod in order_products:
        quantity = random.randint(1, 3)
        line_total = prod['price'] * quantity
        order_total += line_total
        
        items_in_order.append({
            'order_id': order_id,
            'user_id': user_id,
            'product_id': prod['_id'],
            'quantity': quantity,
            'unit_price': prod['price'],
            'line_total': round(line_total, 2),
            'status': status,
            'createdAt': order_date
        })
    
    # Append the calculated order total back to the flattened items
    for item in items_in_order:
        item['order_totalAmount'] = round(order_total, 2)
        sales.append(item)

df_sales = pd.DataFrame(sales)
df_sales.to_csv('datasets/sales_mock_data.csv', index=False)

print("✅ Success! Mock datasets created in the 'datasets/' folder.")