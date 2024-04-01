import { Outlet } from 'react-router-dom';

import { useContext } from 'react';

import { CountdownContext } from './context/CountdownContext';

import newyear from './assets/newyear.jpg';



import './App.css'

function App() {

  const {event} = useContext(CountdownContext);

  let eventImage = null;
 
  if(event) eventImage = event.image;
 
  return (
    <div className='app' 
    style={
      eventImage
      ? {backgroundImage: `url(${eventImage})`}
      : {backgroundImage: `url(${newyear})`}
    }>
      <div className='container'>
      <Outlet/>
    </div>
   </div>
  )
}

export default App
