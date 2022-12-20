import "./App.css";
import PageLayout from "./layout/PageLayout";
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

// function ProdApp() {
//   return (
//     <div>
//       <div style={{ textAlign: "center", fontSize: 25, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "green", padding: 100, }}>
//         <h1>🆆🅴🅻🅲🅾🅼🅴</h1>
//         <h2>🆃🅾 </h2>
//         <h1>🆃🅰🅽🆄🆂🅷 🆂🅾🅵🆃🆆🅰🆁🅴</h1>
//       </div>

//       <a href="mailto: tanushsoftware87@gmail.com" style={{ textAlign: "center", transform: "translateX(-50%)", fontSize: 22, color: "black", position: "absolute", bottom: 80, left: "50%", fontStyle:"italic", fontFamily: "monospace" }}>
//         Connect
//         </a>
//     </div>
//   )
// }

export default App;
