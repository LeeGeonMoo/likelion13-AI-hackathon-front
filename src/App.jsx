import "./App.css";
import HomePage from "./routes/HomePage";
import CreateImage_1 from "./routes/CreateImage_1";
import CreateCode_1 from "./routes/CreateCode_1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="template-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-image/:id" element={<CreateImage_1 />} />
          <Route path="/create-code/:id" element={<CreateCode_1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
