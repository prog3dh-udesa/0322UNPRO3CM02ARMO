import React from 'react'

function Provincia(props) {
    return (
        <li onClick={() => props.removerProvincias(props.info.id)}>{props.info.nombre}</li>
    )
}

export default Provincia
