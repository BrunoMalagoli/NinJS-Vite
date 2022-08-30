import { Route, Routes } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainRoutes />} />
    </Routes>
  );
};
