import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import About from "./component/About";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
// import Test from "./component/Test";

// import "./assets/js/script";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <article className="container">
          <Hero />
          <About />
          <Skills />
          {/* <Test /> */}
          <Contact />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
