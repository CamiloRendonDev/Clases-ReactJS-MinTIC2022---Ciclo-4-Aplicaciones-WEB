import React, {Component} from 'react';
//Defenimos una clase
class Pelicula extends Component {
    // Metodo render (Se encargara de mostrar la vista al usuario)
    render() {
        const {titulo, image} = this.props.pelicula;
        return (
                <article className="article-item" id="article-template">
                    <div className="image-wrap">
                        <img src={image} alt={titulo} />
                    </div>
                    <h2>{titulo}</h2>
                    <span className="date">
                        Hace 5 munitos
                    </span>
                    <a href="#">Leer mas</a>
                    {/* LIMPIAR FLOTADOS */}
                    <div className="clearfix">
                    </div>
                </article>
            )  
    }
}
// Lo exportamos 
export default Pelicula;