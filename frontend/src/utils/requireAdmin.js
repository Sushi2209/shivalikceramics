<<<<<<< HEAD
export default function requireAdmin() {
  const token = localStorage.getItem("admin_token");
  if (!token) {
    window.location.href = "/admin/login";
  }
}
=======
export default function requireAdmin() {
  const token = localStorage.getItem("admin_token");
  if (!token) {
    window.location.href = "/admin/login";
  }
}
>>>>>>> 1fcef1a213d1ccc9cdb3d83d609f27b065438bdd
