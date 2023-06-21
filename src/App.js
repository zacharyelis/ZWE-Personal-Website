import Navbar from "./components/Navbar/navbar";
import AboutMe from "./components/AboutMe/aboutMe";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}