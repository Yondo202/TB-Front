import React, { Component } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import { FaRoad } from 'react-icons/fa'

class Team extends Component {
    render() {
        return (
            <Container className="backParent">
                <Row className="Header">
                    <p>УДИРДЛАГЫН БАГ</p>
                    <div></div>
                </Row>
                <Row className="team">
                    <Col md={6}>
                        <Row>
                            <Col md={4}>
                                <img src={require('../img/er1.jpg')} />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Team