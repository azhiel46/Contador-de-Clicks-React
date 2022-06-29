import React from 'react';
import '../Styles/Boton.css';

function Boton({ texto, esBotonDeclick, manejarClick }) {
    
    return (
        <button className={esBotonDeclick ? 'boton-click' : 'boton-reiniciar'} 
            onClick={manejarClick}
            >
            {texto}
        </button>
    );
}

export default Boton;