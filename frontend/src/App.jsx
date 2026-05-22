import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdmissionsPage from "./pages/AdmissionsPage";

function App() {
  return (
    <Router basename="/aradhana_new"> {/* 👈 ADD THIS PROP */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
    </Routes>
    </Router>
  );
}

export default App;
