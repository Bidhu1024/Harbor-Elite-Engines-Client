import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBikes from "./components/AllBikes/AllBikes";

import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/allbikes" element={<AllBikes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
