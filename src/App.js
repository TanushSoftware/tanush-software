import "./App.css";
import PageLayout from "./layout/PageLayout";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PrivacyPolicyCheckBlindness from "./components/PrivacyPolicyCheckBlindness";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout></PageLayout>}></Route>
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="check-color-blindness-privacypolicy" element={<PrivacyPolicyCheckBlindness />} />
        <Route path="whats-today-privacypolicy" element={<PrivacyPolicyWhatsToday />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
