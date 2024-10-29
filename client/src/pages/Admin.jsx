import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [adminData, setAdminData] = useState([]);
  console.log(adminData);
  const [error, setError] = useState(null);

  const fetchAdminData = async () => {
    try {
      const response = await axios.get("http://localhost:5555/protected", {
        headers: { Authorization: `Bearer 3ZKswYwZFB7qmB1VuCw49j56` },
      });
      setAdminData(response.data);
    } catch (err) {
      setError(`Error fetching admin data: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5rem",
        }}
      >
        <h2>Admin</h2>
        <Link to="/">Home</Link>
        <Link to="/public">public page</Link>
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}
      {adminData && (
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Account No</th>
            </tr>
          </thead>
          <tbody>
            {adminData.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.accountNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
