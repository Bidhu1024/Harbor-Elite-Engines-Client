import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AllBikes from "./components/AllBikes/AllBikes";
import Contact from "./components/Contact";

import Dashboard from "./components/Dashboard/Dashboard";
import Yamaha from './components/BikesBrands/Yamaha';
import RE from './components/BikesBrands/RE';
import TVS from './components/BikesBrands/TVS';
import Suzuki from './components/BikesBrands/Suzuki';
import Honda from './components/BikesBrands/Honda';
import BMW from './components/BikesBrands/BMW';
import Bajaj from './components/BikesBrands/Bajaj';
import KTM from "./components/BikesBrands/KTM";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/allbikes" element={<AllBikes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path={`/allbikes/1`} element={<RE/>} />
        <Route path={`/allbikes/2`} element={<Yamaha />} />
        <Route path={`/allbikes/3`} element={<TVS />} />
        <Route path={`/allbikes/4`} element={<Suzuki />} />
        <Route path={`/allbikes/5`} element={<Honda />} />
        <Route path={`/allbikes/6`} element={<BMW />} />
        <Route path={`/allbikes/7`} element={<Bajaj />} />
        <Route path={`/allbikes/8`} element={<KTM />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
