import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Resume from "./Components/Resume/Resume.jsx";
// import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import ContactUS from "./Components/Contact US/ContactUS.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useState, useEffect, lazy } from "react";

const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio.jsx"));
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <div id="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <>
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <ContactUS />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
