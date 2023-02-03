import { FirstApp } from "./FirstApp";

// Se puede colocar aqui si esta funcion no depende del comportamiento interno d
// del componente
const getResult = () => {
    return 4 + 4;
};

export const App = () => {
    const newMessage = {
        message: "Aprendiendo React",
        title: "Saludo Inicial"
    };
    // stringify serializa el objeto

    return (
        <>
            <h1>Hola Mundo</h1>
            <h2>{getResult()}</h2>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <FirstApp title="Soy Goku" subtitle="Dragon ball z" numero={ 1231354 } /* Esto mando a un numero */ />
        </>
    )
}
