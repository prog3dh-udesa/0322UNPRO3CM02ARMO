import React, { Component } from 'react'
import Provincia from './Provincia'

class Provincias extends Component {
    constructor(props) {
        super(props)
        this.state = {
            provincias: [],
            error: ''
        }
    }

    componentDidMount() {
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
            .then((response) => response.json())
            .then((data) => this.setState({ provincias: data.provincias }))
            .catch((error) => this.setState({ error: 'Ups, ocurrió un error inesperado' }))
    }
    
    componentDidUpdate() {
        console.log('Me actualicé');
    }

    removerProvincias(provinciaId) {
        // Aca quiero filtrar el array de provincias y setear el estado nuevamente 
        let resultados = this.state.provincias.filter((provincia) => provincia.id !== provinciaId)
        this.setState({
            provincias: resultados
        })
    }
    
    render() {
        console.log('Me renderice');
        return (
            this.state.provincias.length > 0 ? 
                <ul>
                    {
                        this.state.provincias.map((provincia) => <Provincia key={provincia.id+provincia.nombre} info={provincia} removerProvincias={(provinciaId) => this.removerProvincias(provinciaId)}/>)
                    }
                </ul>
            :
                <p>Cargando...</p>
        )
    }
}

export default Provincias
