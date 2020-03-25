import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import {FaLongArrowAltRight} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

class Sidebar extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         links: ['Группийн тухай', 'Брэндүүд', 'Брэндүүд2', 'Брэндүүд3', 'Брэндүүд4']
    //     }
    // }

    state = {
        links: ['Группийн тухай', 'Брэндүүд', 'Брэндүүд2', 'Брэндүүд3', 'Брэндүүд4', 'Брэндүүд5,', 'Брэндүүд6',]
        
    }

    render() {
        return (
            <div id="Sidebar">
                <div id="flexible">
                    <Row >
                        <Col>
                            <div className="imgCon">
                                <NavLink to="/">
                                    <img src={require('./img/logo.png')} />
                                </NavLink>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <div className="linkCon">
                                <ul>
                                    {this.state.links.map((element, index)=>{
                                        return (<li key={index}>
                                                    <NavLink to="/test"> {element} <FaLongArrowAltRight style={{color:'rgba(0,0,0,0.3)'}}/> </NavLink>
                                                </li>)
                                    })}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className="footBar">
                        <Col>
                            <div>
                                <p>English</p>
                                <p>TAVANBOGD TRADE LLC Ⓒ 2016.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
                
        )
    }
}

export default Sidebar
