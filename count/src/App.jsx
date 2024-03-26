import Title from './components/Title'
import Counter from './components/Counter'

import newyear from './assets/newyear.jpg';

import './App.css'

function App() {

  return (
    <div className='app' style={{backgroundImage: `url(${newyear})`}}>
    <div className="container">
   <Title title= "Contagem regressiva 2025"/>
      <div className="countdown-container">
        <Counter title="Dias" number={2}/>
        <Counter title="Horas" number={2}/>
        <Counter title="Minutos" number={2}/>
        <Counter title="Segundos" number={2}/>
      </div>
    </div>
    </div>
  )
}

export default App
