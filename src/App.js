import './App.css';
// import freeCodeCampLogo from './img/freecodecamp-logo.png';
//Importar Componentes
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
//Importar estado 
import { useState } from 'react';
//Importar Iconos
import GitHubIcon from '@mui/icons-material/GitHub';
import { green } from '@mui/material/colors';
function App() {

  //Declarando el esatdo del numero de clicks
  const [ numClicks, setNumClicks ] = useState(0);

  //Inician Funciones de los Evcentos para iniciar y reiniciar clicks

  const manejarClick = () => {
   setNumClicks( numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks( 0 );
  };
  //Terminan funciones de clicks

  return (
    <div className="App">

      <div className='freecodecamp-logo-contenedor'>
        
        {/* <img className="freecode-camp-logo"
          src={freeCodeCampLogo}
          alt="logo-Freecodecamp"
        /> */}

        <h1 className='contadorText'>Contador de Clicks</h1>

        <GitHubIcon
        sx={{ fontSize: 70, color: green[50] }}
        color="primary"

        />
      </div>

      <div className="contenedor-principal">

        <Contador
        numClicks={numClicks}
        />

        <Boton
          texto='Click'
          esBotonDeclick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeclick={false}
          manejarClick={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
