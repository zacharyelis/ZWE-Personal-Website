import Navbar from "./components/Navbar/navbar";
import AboutMe from "./components/AboutMe/aboutMe";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}