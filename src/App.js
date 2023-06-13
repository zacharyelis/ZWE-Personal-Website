import Navbar from "./components/Navbar/navbar";
import AboutMe from "./components/AboutMe/aboutMe";
import Experience from "./components/Experience/experience";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Experience />
    </div>
  );
}