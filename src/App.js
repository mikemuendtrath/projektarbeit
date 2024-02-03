import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage"
import ProjektPage from "./pages/projektPage"
import TaskPage from "./pages/taskPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="projekte" element={<ProjektPage />} />
        <Route path="aufgaben" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}


