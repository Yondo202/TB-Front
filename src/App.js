import React from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row } from 'react-bootstrap';
import './Styles/Style.scss'
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from './Component/Sidebar'
import Index from './Component/Index';
import Brands from './Component/Brands';
import Slider from './Component/Slider';
import AboutWe from './Component/AboutWe';
import Team from './Component/BackCon/Team'

function App() {
  return (
    <BrowserRouter>
        <div className="App container-fluid" style={{padding: '0px'}}>
            <Sidebar />
            {/* <div id="Body">
              <Route path="/" exact component={Index}/>
              <Route path="/test" component={AboutWe} />
              <Route path="/slider" component={Slider} />
              <Route path="/slider" component={Brands} />
            </div> */}

            <Team />

            {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
