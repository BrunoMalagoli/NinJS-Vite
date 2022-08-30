import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/auth/login/LoginPage";
import { RegisterPage } from "../../pages/auth/register/RegisterPage";
import { Hero } from "../../pages/home";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
