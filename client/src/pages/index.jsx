import { Link } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <h2>This is home page</h2>
      <div style={{ display: "flex", gap: "5rem" }}>
        <Link to="/public">Show Public Data</Link>
        <Link to="/admin">Show Admin Data</Link>
      </div>
    </>
  );
};

export default Pages;
