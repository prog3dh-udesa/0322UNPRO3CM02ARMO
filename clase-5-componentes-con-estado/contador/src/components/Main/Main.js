import React from 'react'
import Contador from '../Contador/Contador'

function Main(props) {
    return (
        <main>
            <h1>Alumnos</h1>
            {
                props.alumnos.map((alumno, idx) => <p key={alumno.apellido + idx}>{`Hola ${alumno.nombre} ${alumno.apellido}`}</p>)
            }

            <h2>Contador</h2>
            <Contador valorInicial={0} colorInicial={"#0000FF"} />
            <Contador valorInicial={20} colorInicial={"#808080"} />
        </main>
    )
}

export default Main
