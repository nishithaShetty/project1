import React,{Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';


const Instructions =() =>(
    <Fragment>
         <Helmet><title>Play Quiz</title></Helmet>
              <div id="home">
              <div className="questions">
		      <h3> Instructions page</h3>
              <div className="instructionList">
              <ol className="design">
                <li>Each game consist of 10 questions</li>
                <li>Each question has 4 options </li> 
                <li>Select the option which best answers the question by clicking it</li>
                <li>Next Button takes you to the next Question</li> 
                <li>Be sure to answer each question before clicking next </li>
                <li>After we click an option, if the option is wrong its marked red and the right answer is marked green</li>       
                <li>score sheet and number of correct answers are shown at the end of the game</li>       
                <li>Exit game - takes you to the initial stage </li>       
                <li>At any time you can submit, it will take you to the summary page 
</li>       
              
              </ol>    
             </div>
             <div className="play-button-container">
            <ul>
                <li ><Link className="play-button2" to="/play">Play</Link></li>
            </ul>
        </div>

              </div>
              </div>
    </Fragment>


);

export default Instructions;