import React from 'react'
import './card-style.css'


const Card = props => {
        return(
            <div className="card pt-5 mb-5 mt-5 text-center">
                <div className="overflow">
                    <h1 className="text-info">PRESBYOPIA</h1>
                    <br/>
                </div>
                <div className="card-body text-dark">
                    <p className="card-text text-secondary">
                    Multifocal lenses allow users to see clearly at near, intermediate and at far distances. Newer generation multifocal lenses allows user to have clear vision and a quicker adaption time resulting in a more comfortable wearing experience.
                    </p>
                </div>
            </div>
        )
}

export default Card;