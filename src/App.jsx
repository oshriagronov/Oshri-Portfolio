import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
const App = () => {
  return (
    <main>
      <section>
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Projects />
      </section>
    </main>
  );
};

export default App;
