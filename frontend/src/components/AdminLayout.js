
import React from "react";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      
      {/* Spacer to avoid overlap with main navbar */}
      <div className="h-24" />

      {/* Main Content */}
      <main className="mt-10 p-8 max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
        {children}
      </main>
    </div>
  );
}
