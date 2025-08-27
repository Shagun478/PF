// App.jsx
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 selection:bg-fuchsia-400/30">
      <Navbar />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
