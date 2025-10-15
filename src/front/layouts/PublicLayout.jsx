import React from "react";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="page d-flex">
      <main
        className="flex-grow-1 d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Outlet />
      </main>
    </div>
  );
}
