import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Expertise />
    </>
  );
}

export default App;
