import './App.css'

// Views
import Landing from './views/landing/landing';
import About from './views/about/about';
import Projects from './views/projects/projects';

// Components
import NavBar from './components/navBar/navBar';

function App() {

  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <Projects />
    </div>
  )
}


export default App
