import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  ScrollToTop,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1e]">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <div className="relative z-0">
          <Contact />
        </div> */}
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
