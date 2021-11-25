import './assets/css/App.css';
// Importamos el componente
import MiComponente from './components/MiComponente';
import Receta from './components/Receta';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Estado from './components/Estado';
import SliderProps from './components/SliderProps';
import Peliculas from './components/Peliculas';

function presentacion(grupos, año){
  const presentacion = <div>
                            <h2>Desarrollo de aplicaciones WEB, {grupos} <br/></h2>
                            <h3>Formador: Ivan Castro Ruiz</h3>
                            <h4> {año} </h4>
                      </div>
  return presentacion;
};
// Componente principal que trae el FrameWorks
function App() {
  const grupos = 'NRC 53848 - 53849';
  return (
    <div className="App">
      <Header/>
      <Slider/>
      
     <div className="center">
          <section id="content">
            <section className="componentes">
              <h2>Funciones y JSX</h2>
              {presentacion(grupos, 2021)}    
              <h2>Componentes</h2>
              <MiComponente/>
              <Receta/>
              <h2>Estados (State)</h2>
              <Estado/>
              {/*<h2>Props </h2>
              {Props}
              <SliderProps
                    title = "Bienvenido al Curso de ReactJS NRC 53848 - 53849"
                    grupos= {grupos}
              />*/}

              <Peliculas/>

            </section>  
          </section>    
          <Sidebar/>
          
          {/*LIMPIAR FLOTADOS*/}
          <div class="clearfix">
          </div>
      </div> {/* END DIV CENTER */}
      <Footer/>
    </div>
  );
}
export default App;
