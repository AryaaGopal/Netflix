import React from 'react'
import "./NavBar.css";
import{BrowserRouter,Link, Route,Routes} from 'react-router-dom'
import SignIn from '../SignIn';
import Banner from '../Banner/Banner';

import Rowpost from '../RowPost/Rowpost';
import axios from 'axios';



function NavBar() {
 
  return (
    <div>
     <BrowserRouter>
    <Link to='signin' className='signin_button'>Sign In</Link>
    <Routes>
    <Route path='signin' Component={SignIn}></Route>
    </Routes>
    </BrowserRouter>
    <Banner></Banner>
    
    
    <Banner></Banner>
    
    {/*<button onClick={()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{console.log(response.data)})}}>click me</button>*/}
   
    
  
    </div>
    
    
  )
}

export default NavBar