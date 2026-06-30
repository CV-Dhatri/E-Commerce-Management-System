# E-Commerce Analytics & Data Structure Documentation

## 1. Core KPIs
* **Total Revenue:** Calculated by summing the `line_total` of all items in the `orders` collection where the order `status` is NOT 'Cancelled'.
* **Total Orders:** Count of unique `order_id`s with a successful status.
* **Average Order Value (AOV):** Total Revenue / Total Orders.
* **Active Customers:** Count of unique `user_id`s present in the successful sales dataset.

## 2. Top Products Logic
* Extract all successful order line items.
* Group by `product_id`.
* Aggregate by taking the `SUM()` of the `quantity` sold.
* Join with the `Products` dataset to map names and categories.
* Sort descending by quantity.

## 3. Category Performance Logic
* **Data Joins:** Join the filtered `orders` line-items with the `products` collection using `product_id` to retrieve the `category_name`.
* **Aggregation:** Group the resulting dataset by `category_name`.
* **Calculations:** * `total_revenue`: Sum of `line_total` per category.
    * `units_sold`: Sum of `quantity` per category.
    * `total_orders`: Count of unique `order_id`s containing products from that category.
* **Sorting:** Ordered descending by `total_revenue` to identify the most valuable product categories.

## 4. ETL Requirements: Order Data Extraction
To accurately process Order Data for business intelligence, the ETL pipeline must enforce the following rules:
* **Flattening:** The MongoDB `orders` collection contains a nested `products` array. The Extraction script must "flatten" this array so that each product in an order becomes its own row in the dataframe.
* **Status Filtering:** Any order with a `status` of "Cancelled" must be excluded from Revenue and Average Order Value (AOV) calculations.
* **Coupon Attribution (Pending):** Awaiting Backend confirmation on how coupon codes are stored to calculate discount usage rates.

## 5. Inventory & Operational Analytics
* **Total Inventory Value:** Calculated by multiplying `price` by `stockQuantity` for every active product in the catalog.
* **Low-Stock Threshold:** Any product with a `stockQuantity` strictly **less than 10** is flagged as low stock, matching the backend `inventoryController` parameters.
* **Reports Generated:** * `low_stock_report.csv`: A filtered, sorted list of at-risk products for the Admin Dashboard.
  * `full_inventory_valuation.csv`: A complete audit of all products and their gross capital value.