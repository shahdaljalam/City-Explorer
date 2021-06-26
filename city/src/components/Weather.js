import React, { Component } from 'react'
// import ListGroup form 'react-bootstrap/ListGroup';
import WeatherDay from './WeatherDay';
// import Card from 'react-bootstrap/Card'


export class Weather extends Component {
    render() {
        console.log('weather data', this.props);
        return (
            <>
                {
                    this.props.weather.map(value => {
                        return (
                            <>
                                <WeatherDay

                                    description={value.description}
                                    date={value.date}

                                />
                                {/* <ListGroup  style={{ width: "30%" , margin: '50px 60px' , textAlign: 'center'}}>
                      
                    </ListGroup>
                     <ListGroup  style={{ width: "30%" , margin: '20px 60px' , textAlign: 'center'}}>
                    
                   </ListGroup> */}
                            </>
                        )
                    })
                }
            </>
        )
    }
}

export default Weather
