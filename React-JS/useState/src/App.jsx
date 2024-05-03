import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './Components/BioData'


function App() {

  const [dynamicCounter, setDynamicCounter] = useState(0);


  const incrementCounter = () =>
    {
      setDynamicCounter(dynamicCounter+1);
    }

    const decreaseCounter = () =>
      {
        setDynamicCounter(dynamicCounter-1);
      }


  return (
    <>
     <div className="App">
      <nav>
    
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Services</li>
      <li>Portfolio</li>
      </nav>


      <p className="title">The value of Counter is {dynamicCounter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decreaseCounter}>Decrement</button>


     </div>
    </>
  );
}

export default App
