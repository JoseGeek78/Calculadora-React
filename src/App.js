import './App.css';
import binarycode from './imagenes/binarycode-logo.jpg'

function App() {
  return (
    <div className="App">
      <div className='binarycode-logo-contedor'>
    <img 
      src={binarycode}
      className='binarycode-logo'
      alt='Logo Binario' />
      </div>
     <div className='contenedor-calculadora'>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
