import './App.css';

// Views
//import About from './views/about/about';
//import Projects from './views/projects/projects';

// Components
//import NavBar from './components/navBar/navBar';
//import Footer from './components/footer/footer';

const retFunc = (x) => x; //Lo uso para retornar cadenas.

function App() {

  return (      
    <div>

      <div id={retFunc("home")}>

        <div class={retFunc("module-1 title")}>Titulo principal</div>
        
        <div class={retFunc("module-1 about")}>About</div>

        <div class={retFunc("module-1 contact")}>Contacto</div>

        <div class={retFunc("module-1 projects")}>Projectos</div>

        <div class={retFunc("module-1 widget-1")}>widget núm. 1</div>

        <div class={retFunc("module-1 widget-2")}>widget núm. 2</div>

      </div>
      
    </div>
  )
}


export default App
