// src/front/routes/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// PUBLIC layout only (no AppLayout, no ExpBar here)
import PublicLayout from "../layouts/PublicLayout";

// Pages you want in this PR
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export default function AppRouter() {
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Fallback to landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ScrollToTop>
  );
}
