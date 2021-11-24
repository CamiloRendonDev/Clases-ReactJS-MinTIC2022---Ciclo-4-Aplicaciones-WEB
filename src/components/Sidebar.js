import React, {Component} from 'react';
//Defenimos una clase
class Siderbar extends Component {
    // Metodo render (Se encargara de mostrar la vista al usuario)
    render(){
        return (
                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>
                            Puedes hacer esto
                        </h3>
                        <a href="#" className="btn btn-success">Crear articulos</a>
                    </div>

                    <div id="search" className="sidebar-item">
                        <h3>Buscador</h3>
                        <p>Encuentra el articulo que buscas</p>

                        <fieldset>
                            <form action="">
                                <input type="text" name="search" />
                                <input type="submit" name="submit" value="Buscar" className="btn"/>
                            </form>
                        </fieldset>
                    </div>
                </aside>       
               );    
    };
}
// Lo exportamos 
export default Siderbar;