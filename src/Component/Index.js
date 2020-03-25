import React, { Component, Fragment } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import {FaLongArrowAltRight} from 'react-icons/fa';

import Slider from '../Component/Slider';
import Brands from './Brands';
import AboutWe from './AboutWe';

export class Index extends Component {
    
    render() {
        return (
                <Col>
                    <Slider />
                    <Row className="BrandText"><Col><p style={{textAlign:'center'}}>Брэндүүд</p></Col></Row>
                    <Brands />
                    <AboutWe />
                </Col>
        )
    }
}



export default Index
