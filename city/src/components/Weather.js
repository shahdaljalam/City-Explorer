import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'


export class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.wearherData.map((value)=>{
                    return (
                        <card border="light" style={{width:'35rem'}}>
                            // eslint-disable-next-line react/jsx-pascal-case
                            <Card.text>
                                description ":"Low of {value.low},High of {value.high} with {value.description}
                            </Card.text>
                            <Card.text>
                                date":{value.date}
                            </Card.text>
                        </card>
                    )
                })}
            </div>
        )
    }
}

export default Weather
