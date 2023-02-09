import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AllBikes from "./components/AllBikes/AllBikes";
import Contact from "./components/Contact";

import Dashboard from "./components/Dashboard/Dashboard";
import Yamaha from './components/BikesBrands/Yamaha';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/allbikes" element={<AllBikes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path={`/allbikes/2`} element={<Yamaha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
