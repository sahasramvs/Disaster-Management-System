
import { useState } from "react";
import "./App.css";
import Login from "./login";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  function handleLogin(userRole) {
    console.log("Login callback received:", userRole);
    setRole(userRole);
    setLoggedIn(true);
  }

  if (loggedIn) {
  return role === "User"
    ? <UserDashboard />
    : <AdminDashboard />;
}

  return <Login onLogin={handleLogin} />;
}

export default App;
