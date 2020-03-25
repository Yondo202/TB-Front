import React, { Component } from 'react'
import { Col, Row, Button } from 'react-bootstrap'

 class Slider extends Component {
    state = {
        currentText: '',
        currentSrc: '',
    }

    clickHandler = (e) => {
        let current = e.target.tabIndex;
        
        e.target.classList.add('active')
        this.setState({
            currentText: data.articles[current].name,
            currentSrc: data.articles[current].src
        });
    }

    componentDidMount(){
        document.querySelector('.buttonCon div').click()
        console.log(this.props,'sda')
    }

    render() {
        return (
            <div className="Slider" style={{backgroundImage: `url(${this.state.currentSrc})`}}>
                <div className="bodyContent">
                    <h2>{this.state.currentText}</h2>
                    <Button>Дэлгэрэнгүй</Button>
                </div>
                <div className="buttonCon">
                    {data.articles.map( (el, i)=> {
                        return <div key={i} tabIndex={i} onClick={this.clickHandler}></div>
                    })}
                </div>
            </div>
        )
    }
}

const data = {
    articles: [
        {
            name: 'Text1',
            src: require('../Component/img/11.jpg'),
        },
        {
            name: 'Text2',
            src: require('../Component/img/22.jpg'),
        },
        {
            name: 'Text3',
            src: require('../Component/img/33.jpg'),
        },
    ]
}

export default Slider
