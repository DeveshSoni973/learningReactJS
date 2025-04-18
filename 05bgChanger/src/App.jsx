import { useState } from 'react';
import './App.css';

function App() {
  const [myColor, colorSetter] = useState('grey');

  const colorButton = (newColor) => {
    colorSetter(newColor);
  };

  return (
    <>
      <div className="w-screen h-screen m-0 p-0" style={{ backgroundColor: myColor }}>
        <div className="colorButtons flex justify-center items-end w-full h-full pb-8">
          <button 
            className="bg-blue-500  w-16 h-16 m-2 rounded" 
            id="blue" 
            onClick={() => colorButton('blue')}
          >Blue</button>
          <button 
            style={{ backgroundColor: 'green' }}
            className="w-16 h-16 m-2 rounded" 
            id="green" 
            onClick={() => colorButton('green')}
          ></button>
          <button 
            style={{ backgroundColor: 'red' }}
            className="w-16 h-16 m-2 rounded" 
            id="red" 
            onClick={() => colorButton('red')}
          ></button>
          <button 
            style={{ backgroundColor: 'black' }}
            className="w-16 h-16 m-2 rounded" 
            id="black" 
            onClick={() => colorButton('black')}
          ></button>
        </div>
      </div>
    </>
  );
}

export default App;