import About from "./Components/About/About";
import Intro from "./Components/Intro/Intro";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
     <NavBar/>
     <Intro/>
     <Skills/>
     <Projects/>
     <About/>
    </div>
  );
}

export default App;
