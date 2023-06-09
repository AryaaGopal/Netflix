
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rowpost from './Components/RowPost/Rowpost';
import axios from 'axios';
import {action,originals} from'./urls';
import SignIn from './Components/SignIn';
import { Comonent } from 'react';



function App() {

  return (
    <div>
   
   <NavBar></NavBar>
    
   
    <Rowpost url={originals} title="Netflix Orginals"  />
    <Rowpost url={action}title="Action" isSmall/>
    {/*<button onClick={()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{console.log(response.data)})}}>click me</button>*/}
   
    
  
    </div>
    
  )
}

export default App;
