import React , {useEffect , useState} from 'react'
import Navbar from './HomePageComponents/Navbar'
import CreatePost from './HomePageComponents/CreatePost'
import Feeds from './HomePageComponents/Feeds'
import { tryHome } from '../Entry/working/homeLogic'
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  function isValid(isit){
    if(!isit){
      navigate("/");
    }
  }
  useEffect(() => {
    tryHome(isValid);
  } , []);


  
  return (
    <div>
      <Navbar/>
      <CreatePost />
      <Feeds/>
    </div>
  )
}

export default HomePage
