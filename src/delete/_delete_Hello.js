import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1>Hello World</h1>
                <p1>{this.props.greeting}</p1>
            </div>
        )
    }
}

export default Hello;