import Title from '../components/Title'
import Counter from '../components/Counter'

import useCountDown from '../hooks/useCountDown';

const Countdown = () => {
    const [day, hour, minute, second] = useCountDown("jan 1, 2025 00:00")


  return (
    <>
    <Title title= "Contagem regressiva 2025"/>
    <div className='countdown-container'>
         <Counter title="Dias" number={day}/>
         <Counter title="Horas" number={hour}/>
         <Counter title="Minutos" number={minute}/>
         <Counter title="Segundos" number={second}/>
         </div>
       </>
  )
}

export default Countdown