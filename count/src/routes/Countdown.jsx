import Title from '../components/Title'
import Counter from '../components/Counter'

import { useContext } from 'react';

import useCountDown from '../hooks/useCountDown';

import { CountdownContext } from '../context/CountdownContext';

import { Navigate } from 'react-router-dom';

const Countdown = () => {

  const {event} = useContext(CountdownContext);

  if(!event) return <Navigate to="/" />;

  console.log(event)

  const eventTitle = event.title;

  const eventColor = event.color;

    const [day, hour, minute, second] = useCountDown(event.date);


  return (
    <>
    <Title title= {eventTitle} eventColor={eventColor}/>
    <div className='countdown-container'>
         <Counter title="Dias" number={day} eventColor={eventColor}/>
         <Counter title="Horas" number={hour} eventColor={eventColor}/>
         <Counter title="Minutos" number={minute} eventColor={eventColor}/>
         <Counter title="Segundos" number={second} eventColor={eventColor}/>
         </div>
       </>
  )
}

export default Countdown