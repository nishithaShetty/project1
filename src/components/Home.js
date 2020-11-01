import React,{Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';

import S from '../assets/img/simpson.jpg'


const Home =() =>(
    <Fragment>
        <Helmet><title>Trivia Quiz</title></Helmet>
    <div id="home">
    <section>
        <div style={{textAlign:'center'}}>
        <img src ={S}  height="170px" width="200px"/>
        </div>
        <h1>Trivia Quiz</h1>
         
        <div className="play-button-container">
            <ul>
                <li ><Link className="play-button" to="/instructions">Read Instructions</Link></li>
            </ul>
        </div>
    </section>
    </div>

    </Fragment>


);

export default Home;