// ({title = "Titulo por defecto"})

import PropTypes from "prop-types";
import { CounterApp } from "./CounterApp";
// npm i prop-types

export const FirstApp = (props) => {
    console.log(props);
    const increment = (cantidad) => {
        console.log(cantidad++);
        return cantidad++;
    }

  return (
    <>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <h4>Number: {props.numero}</h4>
        <CounterApp increment={10}/>
       
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: "No ha titulo"
}
