import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const skills = ["HTML","CSS","JS"];
  return (
    <>

      <div className='headerArea'>

        <h1 className="Title">Welcome to My first React Webpage</h1>
        <ul>
        {skills.map((e) =>(
           
            <li key={e}>{e}</li>  
          ))
          }
          
        </ul>

      </div>

    </>
  )
}

export default App
