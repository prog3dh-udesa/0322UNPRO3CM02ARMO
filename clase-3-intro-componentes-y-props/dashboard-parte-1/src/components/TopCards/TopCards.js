import React from 'react'
import TopCard from './TopCard/TopCard'

function TopCards(props) {
    return (
        <div className='row'>
            <TopCard quantity="135" title="Products in database" color="primary"/>
            <TopCard quantity="$500" title="Amount in products" color="success"/>
            <TopCard quantity="38" title="Users quantity" color="warning"/>
        </div>
    )
}

export default TopCards
