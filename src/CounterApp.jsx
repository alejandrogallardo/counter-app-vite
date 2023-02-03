import PropTypes from "prop-types";
import { useState } from "react";
//https://es.reactjs.org/docs/events.html
//https://github.com/Klerith/react-vite-counter-app/blob/fin-seccion-4/src/CounterApp.jsx

export const CounterApp = ({increment}) => {

    const [ counter, setCounter ] = useState( increment );

    /*const handleAdd = (event) => {
        console.log(event);
    }*/
    const handleAdd = () => {
        // console.log(event)
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    }

  return (
    <>
        <h1>COUNTER APP: { counter }</h1>
        <button onClick={ handleAdd }>+</button>
    </>
  )
}

CounterApp.propTypes = {
    increment: PropTypes.number
}
