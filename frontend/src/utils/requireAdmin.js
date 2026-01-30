
export default function requireAdmin() {
  const token = localStorage.getItem("admin_token");
  if (!token) {
    window.location.href = "/admin/login";
  }
}
