import React from "react";
import { Outlet } from "react-router-dom";
import ExpBar from "../components/ExpBar";

export default function AppLayout() {
  return (
    <div className="page d-flex">
      {/* Vertical sidebar */}
      <AppSidebar />

      {/* Main content area next to the sidebar */}
      <main className="main-with-sidebar flex-grow-1 d-flex flex-column">
        {/* Your routed page renders here */}
        <Outlet />
      </main>

      {/* Full-width EXP bar along the bottom (from sidebar to right edge) */}
      <ExpBar />
    </div>
  );
}