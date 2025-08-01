import { BrowserRouter } from "react-router-dom";

import { About, Contact, Resume, Certifications, Hero, Navbar, Tech, Works, StarsCanvas, } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Certifications />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <Resume/>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;