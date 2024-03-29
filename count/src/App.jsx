import { Outlet } from 'react-router-dom';

import newyear from './assets/newyear.jpg';



import './App.css'

function App() {
 
  return (
    <div className='app' style={{backgroundImage: `url(${newyear})`}}>
      <div className='container'>
      <Outlet/>
    </div>
   </div>
  )
}

export default App
