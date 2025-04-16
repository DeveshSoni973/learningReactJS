import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function DevBhaiOP() {
  return (
    <div>

      <h1 className="devBhaiJi">Hello Cutie</h1>

    </div>

  )
};


// const ReactElement={ //making first letter captial thanks to the convention
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// } this will not work, fixing it below:

const ReactElement=React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  'click me to visit google'
);


const AnotherElement=(
  <a href="https://google.com" target="_blank">Visit Google </a>
);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  //   <DevBhaiOP />  {/* since it is a function, we can also do it like DevBhaiOP() function calling */}

    // ReactElement
    // AnotherElement
    ReactElement
  // </StrictMode>,
)
