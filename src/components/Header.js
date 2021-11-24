// Importamos React
import React, {Component} from 'react';
import logo from '../assets/images/logo.svg'
//Defenimos una clase
class Header extends Component {
    // Metodo render (Se encargara de mostrar la vista al usuario)
    render() {
        return (
                <header id="header">
                    <div className="center">
                        {/* LOGO */}
                        <div id="logo">
                            <div>
                                <img src={logo} className="app-logo" alt="logotipo"/>
                            </div>
                            <div>
                                <span id="brand">
                                    <strong>Curso</strong>ReactJS
                                </span>
                            </div>
                        </div>
                        {/* MENU */}
                        <nav id="menu">
                            <ul>
                                <li>
                                    <a href="index.html">Inicio</a>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="formulario.html">Formulario</a>
                                </li>
                                <li>
                                    <a href="#">Pagina 1</a>
                                </li>
                                <li>
                                    <a href="#">Pagina 2</a>
                                </li>
                            </ul>
                        </nav>

                        {/* LIMPIAR FLOTADOS */}
                        <div className="clearfix">
                            
                        </div>

                    </div>
                </header>            
            )    
    }
}
// Lo exportamos 
export default Header;