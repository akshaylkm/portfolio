
import Intro from "./Components/Intro/Intro";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import ReactProjects from "./Components/Projects/ReactProjects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
     <NavBar/>
     <Intro/>
     <Skills/>
     <ReactProjects/>
     <Projects/>
    </div>
  );
}

export default App;
