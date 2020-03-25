import React, { Component } from 'react'
import { Col, Row, Button } from 'react-bootstrap'

 class Brands extends Component {
    render() {
        return (
            <React.Fragment>
                    <Row className="Brands">
                    <Col md={3} sm={3} xs={6}>
                        <img src={require('./img/Khaan.jpg')}></img>
                        <h4><a href="youtube.com">ХААН БАНК</a></h4>
                        <p>Монгол улс даяар 520 гаруй салбар нэгжтэй ХААН банк нь Монгол улсын хамгийн том арилжааны банк юм.</p>
                    </Col>
                    <Col md={3} sm={3} xs={6}>
                        <h4><a href="youtube.com">ХААН БАНК</a></h4>
                        <p>Монгол улс даяар 520 гаруй салбар нэгжтэй ХААН банк нь Монгол улсын хамгийн том арилжааны банк юм.</p>
                        <img src={require('./img/Gallery1.jpg')}></img>
                    </Col>
                    <Col md={3} sm={3} xs={6}>
                        <img src={require('./img/goyo.jpg')}></img>
                        <h4><a href="youtube.com">ХААН БАНК</a></h4>
                        <p>Монгол улс даяар 520 гаруй салбар нэгжтэй ХААН банк нь Монгол улсын хамгийн том арилжааны банк юм.</p>
                    </Col>
                    <Col md={3} sm={3} xs={6}>
                        <h4><a href="youtube.com">ХААН БАНК</a></h4>
                        <p>Монгол улс даяар 520 гаруй салбар нэгжтэй ХААН банк нь Монгол улсын хамгийн том арилжааны банк юм.</p>
                        <img src={require('./img/goyo2.jpg')}></img>
                    </Col>
                </Row>
                <Row className="Brands">
                    <Col md={3} sm={3} xs={6}>
                        <img src={require('./img/ulaanbaatarguril.jpg')}></img>
                        <h4><a href="youtube.com">ХААН БАНК</a></h4>
                        <p>Монгол улс даяар 520 гаруй салбар нэгжтэй ХААН банк нь Монгол улсын хамгийн том арилжааны банк юм.</p>
                    </Col>
                    <Col md={3} sm={3} xs={6}>
                        <h4><a href="youtube.com">ХААН БАНК</a></h4>
                        <p>Монгол улс даяар 520 гаруй салбар нэгжтэй ХААН банк нь Монгол улсын хамгийн том арилжааны банк юм.</p>
                        <img src={require('./img/toyoto.png')}></img>
                    </Col>
                    <Col md={3} sm={3} xs={6}>
                        <img src={require('./img/kfc.jpg')}></img>
                        <h4><a href="youtube.com">ХААН БАНК</a></h4>
                        <p>Монгол улс даяар 520 гаруй салбар нэгжтэй ХААН банк нь Монгол улсын хамгийн том арилжааны банк юм.</p>
                    </Col>
                    <Col md={3} sm={3} xs={6}>
                        <h4><a href="youtube.com">ХААН БАНК</a></h4>
                        <p>Монгол улс даяар 520 гаруй салбар нэгжтэй ХААН банк нь Монгол улсын хамгийн том арилжааны банк юм.</p>
                        <img src={require('./img/pizza.jpg')}></img>
                    </Col>
                </Row>
            </React.Fragment>
            
        )
    }
}

export default Brands
