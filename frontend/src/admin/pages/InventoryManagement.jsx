import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";
function InventoryManagement() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
const [newStock, setNewStock] = useState("");
  useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(response.data);
  } catch (error) {
    console.log(error);
  }
};
const handleStockUpdate = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:5000/api/products/${selectedProduct}`,
      {
        stockQuantity: Number(newStock),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Stock Updated");

    setSelectedProduct("");
    setNewStock("");

    fetchProducts();

  } catch (error) {
    console.log(error);
    alert("Failed to update stock");
  }
};
return ( <AdminLayout>
<h1
style={{
marginBottom: "20px",
color: "#1e293b",
}}
>
📊 Inventory Management </h1>

  {/* Inventory Dashboard Cards */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginBottom: "25px",
    }}
  >
    <div
      style={{
        background: "#2563eb",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h4>Total Products</h4>
      <h2>{products.length}</h2>
    </div>

    <div
      style={{
        background: "#16a34a",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h4>Total Stock</h4>
      <h2>
  {products.reduce(
    (total, product) =>
      total + product.stockQuantity,
    0
  )}
</h2>
    </div>

    <div
      style={{
        background: "#dc2626",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h4>Low Stock Items</h4>
      <h2>
  {
    products.filter(
      (product) =>
        product.stockQuantity < 10
    ).length
  }
</h2>
    </div>
  </div>

  {/* Inventory Table */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>Inventory Stock</h3>

    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Stock Quantity</th>
        </tr>
      </thead>

      <tbody>
  {products.map((product) => (
    <tr key={product._id}>
      <td>{product.name}</td>

      <td>
        {product.category?.name}
      </td>

      <td>
        {product.stockQuantity}
      </td>
    </tr>
  ))}
</tbody>
    </table>
  </div>

  {/* Low Stock Products */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>⚠️ Low Stock Products</h3>

    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Current Stock</th>
        </tr>
      </thead>

     <tbody>
  {products
    .filter(
      (product) =>
        product.stockQuantity < 10
    )
    .map((product) => (
      <tr key={product._id}>
        <td>{product.name}</td>

        <td>
          {product.stockQuantity}
        </td>
      </tr>
    ))}
</tbody>
    </table>
  </div>

  {/* Stock Update Form */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>Update Stock</h3>

    <form onSubmit={handleStockUpdate}>
      <select
  className="form-control mb-3"
  value={selectedProduct}
  onChange={(e) =>
    setSelectedProduct(e.target.value)
  }
>
  <option value="">
    Select Product
  </option>

  {products.map((product) => (
    <option
      key={product._id}
      value={product._id}
    >
      {product.name}
    </option>
  ))}
</select>

      <input
  type="number"
  placeholder="New Stock Quantity"
  className="form-control mb-3"
  value={newStock}
  onChange={(e) =>
    setNewStock(e.target.value)
  }
/>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Update Stock
      </button>
    </form>
  </div>
</AdminLayout>

);
}

export default InventoryManagement;
