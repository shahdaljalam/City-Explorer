import React, { Component } from 'react'
// import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootsrap/Button'
// import Image from 'react-bootstrap/Images'
// import Alertmass from './Alertmass';
// import Weather from './Weather';
// import Card from 'react-bootstrap/card'
// import { appendToMemberExpression } from '@babel/types';

export class FormSearch extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cityName: '',
    //         cityData: {},
    //         displayData: false,
    //         error: "",
    //         alert: false
    //     }
    // }

    // updateCityNameState = (e) => {
    //     this.setState(
    //         {
    //             cityName: e.target.value
    //         });
    // }

    // getCityData = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.6fd9899749f334503d08e2e2bb72f2cf&city=${this.state.cityName}&format=json`);
    //         console.log(axiosResponse);

    //         this.setState({
    //             cityData: axiosResponse.data[0],
    //             displayData: true,
    //             alert: false
    //             weatherData: appendToMemberExpression.data
    //         })
    //     } catch (error) {
    //         this.setState({
    //             errot: error.masssage,
    //             alert: true
    //         })
    //     }

    // }

    render() {
        return (
            <div style= {{ display: 'grid', 'grid-tamplate-columns': '1fr 2fr', 'grid-gap': '10em', padding: '5%' }} >
                {/* <Alertmass
                    alert={this.state.alert}
                /> */}
                {/* <Card style={{ width: '38rem' }}> */}
                <Form onSubmit={this.props.getCity} style={{ border: '1px solid', padding: '1em' }}>
            <Form.Group>
            <Form.Label> City Name </Form.Label>
            <Form.Control onChange={this.props.updateCityName} type='test'></Form.Control>
            <br></br>
            <Button className="button" variant="danger" type="submit">
            Explore!
          </Button>
            </Form.Group>
            
          </Form>
            </div>
        )
    }
}
export default FormSearch
