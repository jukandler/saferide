import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import Home from './pages/Home';

import './variables.css';
import './App.css';
import Imprint from "./pages/Imprint";
import ScrollToTop from "./helpers/scrollToTopl";
import Portfolio from "./pages/Portfolio";
import Navigation from "./components/navigation/Navigation";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Vouchers from "./pages/Vouchers";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/impressum" element={<Imprint/>} />
          <Route path="/leistungen" element={<Portfolio/>} />
          <Route path="/trainer" element={<About/>} />
          <Route path="/preise" element={<Pricing/>} />
          <Route path="/gutscheine" element={<Vouchers/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
