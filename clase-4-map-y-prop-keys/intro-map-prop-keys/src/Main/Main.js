import React from 'react'

function Main(props) {
    return (
        <main>
            <h1>Alumnos</h1>
            {
                props.alumnos.map((alumno, idx) => <p key={alumno.apellido + idx}>{`Hola ${alumno.nombre} ${alumno.apellido}`}</p>)
            }
        </main>
    )
}

export default Main
