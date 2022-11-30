import React from "react";
import Nav from "./sections/navbar/Nav";
import Content from "./sections/content/Content";
import Footer from "./sections/footer/Footer";
import Services from "./sections/services/Services";
import Features from "./sections/features/Features";
import Contact from "./sections/contact/Contact";

function Home() {
  return (
    <div>
      <Nav />
      <Content />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
