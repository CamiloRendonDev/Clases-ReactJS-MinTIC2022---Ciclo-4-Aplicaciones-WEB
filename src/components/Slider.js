import React, {Component} from 'react';
//Defenimos una clase
class Slider extends Component {
    // Metodo render (Se encargara de mostrar la vista al usuario)
    render() {
        return (
            <div>
                <div id="slider" className="slider-big">
                    <h1>Bienvenido al Curso de ReactJS NRC 53848 - 53849</h1>
                    <h2>Universidad Pontificia Bolivariana - Desarrollo de Aplicaciones WEB</h2>
                    <a href="index.html" className="btn-white">Ir al Blog</a>
                </div> 
                
                {/*LIMPIAR FLOTADOS*/}
                <div class="clearfix">
                            
                </div>
            </div>
            )    
    }
}
// Lo exportamos 
export default Slider;