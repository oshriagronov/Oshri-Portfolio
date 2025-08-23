import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <main className="background">
      <section>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </section>
    </main>
  );
};

export default App;
