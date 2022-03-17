import React from 'react'

function Header(props) {
    
    return (
        <header>
            <nav>
                <ul>
                    {/* aca queremos iterar cierto array de accesos y retornar otro array en donde cada elemento sea un item de lista */}
                    {
                        props.accesos.map((acceso, idx) => <li key={acceso+idx}>{acceso}</li>)
                    }
                </ul>
            </nav>
        </header>
    )
}

export default  Header

