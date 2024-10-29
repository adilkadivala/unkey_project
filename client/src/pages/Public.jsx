import "../assets/styles/public.css";
import { Link } from "react-router-dom";


const Public = () => {
  const products = [
    {
      name: "Laptop",
      price: 999.99,
      purchaseDate: "2024-10-01",
      paymentMethod: "Credit Card",
    },
    {
      name: "Smartphone",
      price: 799.99,
      purchaseDate: "2024-10-05",
      paymentMethod: "PayPal",
    },
    {
      name: "Wireless Mouse",
      price: 49.99,
      purchaseDate: "2024-10-10",
      paymentMethod: "Debit Card",
    },
    {
      name: "Headphones",
      price: 149.99,
      purchaseDate: "2024-10-15",
      paymentMethod: "Credit Card",
    },
    {
      name: "Monitor",
      price: 299.99,
      purchaseDate: "2024-10-20",
      paymentMethod: "Bank Transfer",
    },
    {
      name: "Keyboard",
      price: 69.99,
      purchaseDate: "2024-10-25",
      paymentMethod: "Apple Pay",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5rem",
        }}
      >
        <h2>Public Data</h2>
        <Link to="/">Home</Link>
        <Link to="/admin">admin page</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price (USD)</th>
            <th>Purchase Date</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.purchaseDate}</td>
              <td>{product.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Public;
