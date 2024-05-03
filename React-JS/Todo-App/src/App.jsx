import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './Components/BioData'

const bioInfo = [
 {
    id: Date.now() + "",
    username: "Khan Atik Faisal",
    age : 24,
    email: "khanatik1176@gmail.com",
    skills: ["HTML", "CSS", "JS","React","NodeJS","NestJS","NextJS"],
    interests : ["Gaming","Driving","Coding","Watching Movies"],
    socialMedia : [
      {
        socialName : "Facebook",
        socialLink : "https://www.facebook.com/khanatik1176"
      },
      {
        socialName : "Instagram",
        socialLink : "https://www.instagram.com/khanatik1176"
      },
      {
        socialName : "X",
        socialLink : "https://www.X.com/khanatik1176"
      
      }
    ],
  },
  {
    id: Date.now()+"",
    username: "Arham Khan",
    age : 24,
    email: "Asda176@gmail.com",
    skills: ["HTML", "CSS", "JS","React","NodeJS","NestJS","NextJS"],
    interests : ["Gaming","Driving","Coding","Watching Movies"],
    socialMedia : [
      {
        socialName : "Facebook",
        socialLink : "https://www.facebook.com/khanatik1176"
      },
      {
        socialName : "Instagram",
        socialLink : "https://www.instagram.com/khanatik1176"
      },
      {
        socialName : "X",
        socialLink : "https://www.X.com/khanatik1176"
      
      }
    ],
  },
]


function App() {
  return (
    <>
     <div className="App">
      {
      bioInfo.map((bio) => (

        <BioData
        key={bio.id}
        username={bio.username}
        age={bio.age}
        email={bio.email}
        skills={bio.skills}
        interests={bio.interests}
        socialMedia={bio.socialMedia}
        />

      ))
    }
     </div>
    </>
  );
}

export default App
