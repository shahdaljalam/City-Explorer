import React, { Component } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootsrap/Button'
import Image from 'react-bootstrap/Images'
import Alertmass from './Alertmass';
import Weather from './Weather';
import Card from 'react-bootstrap/card'
import { appendToMemberExpression } from '@babel/types';

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            cityData: {},
            displayData: false,
            error: "",
            alert: false
        }
    }

    updateCityNameState = (e) => {
        this.setState(
            {
                cityName: e.target.value
            });
    }

    getCityData = async (e) => {
        e.preventDefault();
        try {
            const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.6fd9899749f334503d08e2e2bb72f2cf&city=${this.state.cityName}&format=json`);
            console.log(axiosResponse);

            this.setState({
                cityData: axiosResponse.data[0],
                displayData: true,
                alert: false
                weatherData: appendToMemberExpression.data
            })
        } catch (error) {
            this.setState({
                errot: error.masssage,
                alert: true
            })
        }

    }

    render() {
        return (
            <div>
                <Alertmass
                    alert={this.state.alert}
                />
                <Card style={{ width: '38rem' }}>
                    <form onSubmit={this.getCityData}>
                        <Form.Group className="mb-3" conrolId="formBasicEmail">
                            <Form.Label>City Name</Form.Label>
                            <Form.control type="text" placehoolder="Enter City Name" onchange={this.updateCityNameState} size={'sm'} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Explore!</Button>
                    </form>
                </Card>
                {this.state.displayData &&
                    <div>
                        <p>
                            {this.state.cityData.display_name}
                        </p>
                        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} alt='' />
                        <p>
                            {`latitude: ${this.state.cityData.lat},longitude:${this.state.cityData.lon}`}
                        </p>
                    </div>}

            </div>


        )
    }
}

export default Form
