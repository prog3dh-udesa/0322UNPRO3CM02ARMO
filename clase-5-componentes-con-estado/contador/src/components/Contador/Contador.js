import React, { Component } from 'react'

class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor: this.props.valorInicial,
            color: 	this.props.colorInicial,
            botonIncremento: '+',
            botonDecremento: '-',
        }
    }

    incrementar() {
        this.setState({
            valor: this.state.valor + 1,
            color: '#FF00FF'
        })
    }

    decrementar() {
        this.setState({
            valor: this.state.valor - 1,
            color: '	#FF0000'
        })
    }

    overIncremento() {
        this.setState({
            botonIncremento: 'Incrementar'
        })
    }

    leaveIncremento() {
        this.setState({
            botonIncremento: '+'
        })
    }

    overDecremento() {
        this.setState({
            botonDecremento: 'Decrementar'
        })
    }
    
    leaveDecremento() {
        this.setState({
            botonDecremento: '-'
        })
    }

    render() {
        return (
            <>
                <button 
                    onClick={() => this.decrementar()} 
                    onMouseOver={() => this.overDecremento()}
                    onMouseLeave={() => this.leaveDecremento()}
                >
                    {this.state.botonDecremento}
                </button>

                <span style={{ backgroundColor: this.state.color }}>    {this.state.valor}    </span>

                <button 
                    onClick={() => this.incrementar()} 
                    onMouseOver={() => this.overIncremento()}
                    onMouseLeave={() => this.leaveIncremento()}
                >
                    {this.state.botonIncremento}
                </button>
            </>
        )
    }
}

export default Contador
