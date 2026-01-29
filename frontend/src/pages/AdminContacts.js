<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import requireAdmin from "../utils/requireAdmin";
import AdminLayout from "../components/AdminLayout";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const AdminContacts = () => {
  requireAdmin();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("admin_token");

      const res = await axios.get(`${API}/contact`, {
        headers: {
            Authorization: `Bearer ${token}`
        }});

      setContacts(res.data);
    } catch (err) {
        if (err.response?.status === 401) {
            localStorage.removeItem("admin_token");
            window.location.href = "/admin/login";
            }
        setError("Failed to load contact data");
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    const headers = ["Name", "Phone", "Email", "Message", "Date"];
    const rows = contacts.map(c => [
      c.name,
      c.phone,
      c.email || "",
      c.message,
      new Date(c.timestamp).toLocaleString()
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contact_requests.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <p className="p-6">Loading contact requests...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <AdminLayout>
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contact Requests</h1>
        <button
          onClick={downloadCSV}
          className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800"
        >
          Download CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-200">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-3 border">{c.name}</td>
                <td className="p-3 border">{c.phone}</td>
                <td className="p-3 border">{c.email || "-"}</td>
                <td className="p-3 border">{c.message}</td>
                <td className="p-3 border">
                  {new Date(c.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AdminLayout>
  );
};

export default AdminContacts;
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import requireAdmin from "../utils/requireAdmin";
import AdminLayout from "../components/AdminLayout";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const AdminContacts = () => {
  requireAdmin();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("admin_token");

      const res = await axios.get(`${API}/contact`, {
        headers: {
            Authorization: `Bearer ${token}`
        }});

      setContacts(res.data);
    } catch (err) {
        if (err.response?.status === 401) {
            localStorage.removeItem("admin_token");
            window.location.href = "/admin/login";
            }
        setError("Failed to load contact data");
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    const headers = ["Name", "Phone", "Email", "Message", "Date"];
    const rows = contacts.map(c => [
      c.name,
      c.phone,
      c.email || "",
      c.message,
      new Date(c.timestamp).toLocaleString()
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contact_requests.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <p className="p-6">Loading contact requests...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <AdminLayout>
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contact Requests</h1>
        <button
          onClick={downloadCSV}
          className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800"
        >
          Download CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-200">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-3 border">{c.name}</td>
                <td className="p-3 border">{c.phone}</td>
                <td className="p-3 border">{c.email || "-"}</td>
                <td className="p-3 border">{c.message}</td>
                <td className="p-3 border">
                  {new Date(c.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </AdminLayout>
  );
};

export default AdminContacts;
>>>>>>> 1fcef1a213d1ccc9cdb3d83d609f27b065438bdd
