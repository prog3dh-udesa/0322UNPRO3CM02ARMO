/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './card.css';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            btnMessage: 'Ver más'
        }
    }

    showMore() {
        if(this.state.showMore) {
            this.setState({
                showMore: false,
                btnMessage: 'Ver más'
            })
        } else {
            this.setState({
                showMore: true,
                btnMessage: 'Ver menos'
            })
        }
    }

    render() {
        return (
            <div className="character-card">
                <img src={`${this.props.info.image}`} alt="" />
                <h4>{this.props.info.name}</h4>
                {
                    this.state.showMore ? 
                        <p>{this.props.info.description}</p>
                    :
                        ''
                }
                <p className='more' onClick={() => this.showMore()}>{this.state.btnMessage}</p>
            </div>
        );
    }
}

export default Card