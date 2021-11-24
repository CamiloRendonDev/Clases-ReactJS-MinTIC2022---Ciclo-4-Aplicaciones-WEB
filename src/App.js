import logo from './logo.svg';
import './App.css';
// Importamos el componente
import MiComponente from './components/MiComponente';
import Receta from './components/Receta';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {presentacion(grupos, 2021)}    
        <section>
          <MiComponente/>
          <Receta/>
        </section>   
      </header>
    </div>
  );
}
export default App;
