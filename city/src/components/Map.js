import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export class Map extends Component {
    render() {
        return (
            <div>
              <Image style={{ width: "30%" , margin: '50px 60px' , textAlign: 'center'}} src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&
             center=${this.props.cityDat.lat},${this.props.cityDat.lon}&zoom=15`} alt='' thumbnail fluid  ></Image>   
            </div>
        )
    }
}

export default Map
