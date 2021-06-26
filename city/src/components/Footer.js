import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'

export class footer extends Component {
    render() {
        const name = 'Shahd Aljalam';
        return (
            <footer>
                <Navbar style={{background: '#F6C6EA'}} >
                    <Container>
                        <Navbar.Brand href="#home"> Author: {name} </Navbar.Brand>
                        <Nav className="me-auto">
                        </Nav>
                    </Container>

                </Navbar>
            </footer>
        )
    }
}

export default footer
