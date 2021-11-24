import './assets/css/App.css';
// Importamos el componente
import MiComponente from './components/MiComponente';
import Receta from './components/Receta';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

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
              {presentacion(grupos, 2021)}    
              <MiComponente/>
              <Receta/>
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
