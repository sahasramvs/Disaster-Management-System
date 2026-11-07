
import { useState } from "react";

function Login({ onLogin }) {
  const [role, setRole] = useState("User");
  const [isSignup, setIsSignup] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isSignup) {
      localStorage.setItem(
        email,
        JSON.stringify({ password, role })
      );

      alert("Signup successful! Please login.");
      setIsSignup(false);
      return;
    }

    const account = JSON.parse(
      localStorage.getItem(email) || "null"
    );

    if (
      account &&
      account.password === password &&
      account.role === role
    ) {
      alert("Login successful! Welcome " + role);
      onLogin(role);
    } else {
      alert("Invalid email, password or role.");
    }
  }

  return (
    <div className="login-container">
      <h2>{isSignup ? "Create Account" : "Login"}</h2>

      <form onSubmit={handleSubmit}>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            required
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p onClick={() => setIsSignup(!isSignup)}>
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
}

export default Login;
