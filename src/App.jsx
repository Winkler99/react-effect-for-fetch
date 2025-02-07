import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import { useEffect, useState } from "react";
import './App.css'



function App() {

  const [artData, setArtData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  
  
    useEffect(() => {
      fetch(`https://boolean-uk-api-server.fly.dev/art`)
       .then(res => res.json())
       .then(data => setUsersData(data))
   },[])

   console.log(usersData)

   useEffect(() => {
     fetch(`https://boolean-uk-api-server.fly.dev/Winkler99/contact`)
       .then(res => res.json())
       .then(data => setArtData(data))
   },[])
   console.log(artData)
  
  
  return (
    <div className="main-layout">
      <ArtsSection artData={artData} />
      <UsersSection usersData ={usersData}/>
      <AdviceSection />
    </div>
  )
}

export default App
