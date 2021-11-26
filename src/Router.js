import React, {Component} from 'react';
// Exportamos las dependencias necesarias
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// Exportamos Componentes para las rutas utiles
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// Exportamos Componentes para las rutas
import Peliculas from './components/Peliculas';
import MiComponente from './components/MiComponente';
import Receta from './components/Receta';
import Estado from './components/Estado';
import SliderProps from './components/SliderProps';
import Error from './components/Error';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>

                <Header/>

                <Slider/>

                <div className="center">
                    {/*Configuracion de rutas y Paginas*/}
                    <Switch>
                        <Route exact path="/home" component={Peliculas} />
                        <Route exact path="/" component={Peliculas} />
                        <Route exact path="/mi-componente" component={MiComponente} />
                        <Route exact path="/receta" component={Receta} />
                        <Route exact path="/estado" component={Estado} />
                        <Route exact path="/sliderprops" component={SliderProps} />
                        <Route exact path="/prueba/:id" render={(props) => {
                            var id = props.match.params.id;
                            return (
                                <div id="content">
                                    <h1 className="subheader">Pagina de pruebas</h1>
                                    <h2>
                                        {id}
                                    </h2>
                                </div>
                            );
                        }
                        } />
                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;
                            return (
                                <div id="content">
                                    <h1 className="subheader">Pagina de pruebas</h1>
                                    <h2>
                                        {nombre && !apellidos && 
                                            <React.Fragment>
                                                {nombre}
                                            </React.Fragment>
                                        }
                                        {nombre && apellidos && 
                                            <React.Fragment>
                                                {nombre}  {apellidos} 
                                            </React.Fragment>
                                        }
                                    </h2>
                                </div>
                            );
                        }
                        } />
                        <Route component={Error} /> 
                    </Switch>
          
                    <Sidebar/>
                    {/*LIMPIAR FLOTADOS*/}
                    <div class="clearfix">
                    </div>
                </div> {/* END DIV CENTER */}
                
                <Footer/>

            </BrowserRouter>
            )    
    }
}
// Lo exportamos 
export default Router;