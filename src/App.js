import "./App.css";
import PageLayout from "./layout/PageLayout";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout></PageLayout>}>
          <Route index element={<PageLayout></PageLayout>} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
