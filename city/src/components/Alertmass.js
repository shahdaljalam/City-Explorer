import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class Alertmass extends Component {
    render() {
        return (
            <div>
                {this.props.alert &&
                <Alert variant={'danger'}>
                Error: 'Wrong Input! Enter City Name'
                </Alert> }
            </div>
        )
    }
}

export default Alertmass
