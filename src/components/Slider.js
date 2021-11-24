import React, {Component} from 'react';
//Defenimos una clase
class Slider extends Component {
    // Metodo render (Se encargara de mostrar la vista al usuario)
    render() {
        return (
            <div id="slider" className="slider-big">
                <h1>Bienvenido al Curso de React NRC 53848 - 53849</h1>
                <a href="#" className="btn-white">Ir al Blog</a>
            </div>           
            )    
    }
}
// Lo exportamos 
export default Slider;