import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Order Groceries</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/saved">Saved</Link> |{" "}
        <Link to="/recipes">Recipes</Link>
      </nav>
      <Outlet />
    </div>
  );    
}
