import './App.css'

// Views
import Landing from './views/landing/landing';
import About from './views/about/about';

// Components
import NavBar from './components/navBar/navBar';

function App() {

  return (
    <div>
      <NavBar />
      <Landing />
      <About />
    </div>
  )
}

export default App
