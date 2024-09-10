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
import Coaching from "./pages/Coaching";
import Navigation from "./components/navigation/Navigation";
import About from "./pages/About";
import Media from "./pages/Media";
import Pricing from "./pages/Pricing";
import Footer from "./components/footer/footer";
import Fitness from "./pages/Fitness";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="App">
      <HashRouter basename={import.meta.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/impressum" element={<Imprint/>} />
          <Route path="/coaching" element={<Coaching/>} />
          <Route path="/fahr-fitness-check" element={<Fitness/>} />
          <Route path="/kunden" element={<Testimonials/>} />
          <Route path="/trainer" element={<About/>} />
          <Route path="/preise" element={<Pricing/>} />
          <Route path="/presse" element={<Media/>} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
