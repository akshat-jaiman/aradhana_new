import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AdmissionsPage from "./pages/AdmissionsPage";


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
    </Routes>
    
  );
}

export default App;
