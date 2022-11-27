import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import Home from './pages/Home';

import './App.css';
import Imprint from "./pages/Imprint";
import ScrollToTop from "./helpers/scrollToTopl";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/impressum" element={<Imprint/>} />
          <Route exact path="/leistungen" element={<Portfolio/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
