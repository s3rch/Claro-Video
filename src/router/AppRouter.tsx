// @packages
import { Navigate, Route, Routes } from "react-router-dom";
import CVPage from "../pages/CVPage";

// @app

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CVPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
