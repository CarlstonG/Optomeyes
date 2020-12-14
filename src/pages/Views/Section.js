import React, { Component } from 'react'
import About from './Pages/About'
import Booking from './Pages/Booking'
import Contact from './Pages/Contact'
import Orthokeratology from './Pages/Orthokeratology'
import Technology from './Pages/Technology'
import Home from '../Landing'

import {Route} from 'react-router-dom'

export default class Section extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} /> 
                <Route path="/about" component={About} />
                <Route path="/booking" component={Booking} />
                <Route path="/contact" component={Contact} />
                <Route path="/orthokeratology" component={Orthokeratology} />
                <Route path="/technology" component={Technology} />
            </div>
        )
    }
}
