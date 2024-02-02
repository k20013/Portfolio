import './App.css'

// Views
import Landing from './views/landing/landing';
import About from './views/about/about';
import Projects from './views/projects/projects';

// Components
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';

function App() {

  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}


export default App
