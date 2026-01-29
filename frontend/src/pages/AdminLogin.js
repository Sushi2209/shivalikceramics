<<<<<<< HEAD
import { useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";

const API = process.env.REACT_APP_BACKEND_URL;

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(`${API}/api/admin/login`, {
        email,
        password
      });
      localStorage.setItem("admin_token", res.data.token);
      window.location.href = "/admin/contacts";
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <AdminLayout>
    <div className="max-w-md mx-auto bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
            className="w-full mb-4 p-3 border rounded"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
        />

        <input
            type="password"
            className="w-full mb-6 p-3 border rounded"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
        />

        <button
            onClick={login}
            className="w-full bg-slate-900 text-white py-3 rounded hover:bg-slate-800">
            Login
        </button>
    </div>

    </AdminLayout>
    
  );
}
=======
import { useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";

const API = process.env.REACT_APP_BACKEND_URL;

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(`${API}/api/admin/login`, {
        email,
        password
      });
      localStorage.setItem("admin_token", res.data.token);
      window.location.href = "/admin/contacts";
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <AdminLayout>
    <div className="max-w-md mx-auto bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
            className="w-full mb-4 p-3 border rounded"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
        />

        <input
            type="password"
            className="w-full mb-6 p-3 border rounded"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
        />

        <button
            onClick={login}
            className="w-full bg-slate-900 text-white py-3 rounded hover:bg-slate-800">
            Login
        </button>
    </div>

    </AdminLayout>
    
  );
}
>>>>>>> 1fcef1a213d1ccc9cdb3d83d609f27b065438bdd
