import "./App.css";
import PageLayout from "./layout/PageLayout";
import PP from "./components/PP";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Data = {
  privacypolicy: "Test Eyes Color Blindness",
  "check-color-blindness-privacypolicy": "Check Color Blindness",
  "whats-today-privacypolicy": "Whats Today",
  "daily-deals-privacypolicy": "Daily Deals",
  "speed-test-privacypolicy": "Internet Speed Test",
  "transformer-test-privacypolicy": "Transformer Oil Testing",
  "ipl-live-privacypolicy": "LIVE IPL",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout></PageLayout>}></Route>
        {Object.keys(Data).map((key) => (
          <Route path={key} element={<PP name={Data[key]} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
