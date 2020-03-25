import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import {FaLongArrowAltRight} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

 class AboutWe extends Component {

    state ={
        secLinks: ['Группийн танилцуулга', 'Бидний амжилт', 'Ерөнхийлөгчийн мэндчилгээ', 'Бизнесийн чиглэл' ],
        thirdLinks : ['Борлуулалтын менежер', 'Тооцооны нягтлан бодогч/Ажлын туршлагатай', 'Борлуулалт түгээлтийн жолооч', 'Захиргааны ажилтан' ]
    }

    

    render() {
        return (
                <Row className="About">
                    <Col md={4} sm={12} xs={12} className='AbCol' >
                     <Row  className="Title" style={{paddingLeft: '15px'}}>
                         <div className="painted">
                            <Col md={6}>
                            <p>МЭДЭЭЛЭЛ</p>
                            </Col>
                            <Col md={6}>
                                <a href="javascript:;">БҮГД</a>
                            </Col>
                         </div>
                         
                     </Row>

                     <Row className="inf">
                         <Col md={4}>
                            <img src={require('./img/111.jpg')}></img>
                         </Col>
                         <Col md={7}>
                            <a href="javascript:;">СЭТГЭЛ ШИГ ЦАГААН ГУРИЛАА ХҮМҮҮСТ ТҮГЭЭХ ХАМГИЙН САЙХАН</a>
                            <p>2020-03-17</p>
                         </Col>
                     </Row>
                     <Row className="inf inf2">
                         <Col md={4}>
                            <img src={require('./img/222.jpg')}></img>
                         </Col>
                         <Col md={7}>
                            <a href="javascript:;">БАРИЛГЫН ЗУРАГ ТӨСӨЛ ЗОХИОХ ТЕНДЕР ЗАРЛАГДЛАА</a>
                            <p>2020-03-17</p>
                         </Col>
                     </Row>
                    </Col>


                    <Col md={4} sm={12} xs={12} className='AbCol' >
                     <Row className="Title">
                         <div className="painted">
                            <Col >
                            <p>ГРУППИЙН ТУХАЙ</p>
                            </Col>
                         </div>
                     </Row>

                     <Row className="inf">
                         <Col md={4}>
                            <img src={require('./img/333.jpg')}></img>
                         </Col>
                         <Col md={8}>
                            <div>
                                <ul>
                                    {this.state.secLinks.map((element, index) => {
                                        return <li key={index}><FaLongArrowAltRight /> {element}</li>
                                    })}
                                </ul>
                            </div>
                         </Col>
                     </Row>
                    </Col>


                    <Col md={4} sm={12} xs={12} className='AbCol' >
                     <Row className="Title">
                        <div className="painted">
                            <Col >
                            <p>БИДЭНТЭЙ НЭГДЭХ</p>
                            </Col>
                         </div>
                     </Row>

                     <Row className="inf">
                         
                         <Col md={12}>
                            <div>
                                <ul>
                                    {this.state.thirdLinks.map((element, index) => {
                                        return (<li key={index}> 
                                        <NavLink to='/'> {element} <FaLongArrowAltRight style={{float:'right'}}/> </NavLink>
                                        </li>)
                                    })}
                                </ul>
                            </div>
                         </Col>
                     </Row>
                    </Col>
                </Row>
        )
    }
}

export default AboutWe
