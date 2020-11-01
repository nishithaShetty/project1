import React,{Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import S from '../assets/img/simpson.jpg'
import N from '../assets/img/nevergiveup.jpg'
import G from '../assets/img/genius.jpg'
import T from '../assets/img/try.jpg'
class QuizSummary extends Component{
  
          constructor(props){
          super(props);
  
          this.state ={
            score :0,
            numOfQuestions:0,
            correctAnswers:0,
            wrongAnswers:0,
            answeredQuestion:0
      };
  }
  componentDidMount(){
     const { state} = this.props.location;
     this.setState({
       score: (state.score/state.numOfQuestions)*100,
       numOfQuestions: state.numOfQuestions,
       correctAnswers: state.correctAnswers,
       wrongAnswers:state.wrongAnswers,
       answeredQuestion: state.answeredQuestion
     
     });
     }
     
  
  
     render(){
          const { state} = this.props.location;
          let stats,remark,imageS;
          const userScore = this.state.score;
          if(userScore <= 30){
            remark = "You need more practice!";
            imageS = N;
          }
          else if(userScore >30 && userScore<=50)
          {
            remark ="better luck next time";
            imageS = T;
          }
          else if(userScore >50 && userScore<90)
          {
            remark ="getting there";
            imageS = T;
          }
          else{
          
            remark ="You did great";
            imageS = G;
          }
          
     if(state !== undefined) 
          {
          stats =  (
               <Fragment> 
               <div id ="home1">
               <div class="questions1">
               <div>
                <span></span>
               </div>
               <div style={{textAlign:'center'}}>
              <img src ={imageS}  height="170px" width="200px"/>
              </div>
               <h2>Quiz Results</h2>
               <div className = "container">
                 <h3>{remark}</h3>
                 <h3>Your score:{this.state.score.toFixed(0)}&#37;</h3>
                 <span className ="stat left">Total number of Questions:</span>
                 <span className ="right">{this.state.numOfQuestions}</span>
                 <br/>
                 <span className ="stat left">Total number of Correct Answers:</span>
                 <span className ="right">{this.state.correctAnswers}</span>
                 <br/>
                 <span className ="stat left">Total number of Wrong Answers:</span>
                 <span className ="right">{this.state.wrongAnswers}</span>
                 <br/>
                 
                 <span className ="stat left">Total number of Answered Questions:</span>
                 <span className ="right">{this.state.wrongAnswers +this.state.correctAnswers }</span>
                 <br/>
                 
                 
               
               </div>
               <div className="play-button-container"></div>
               <ul>
               <li><Link className="play-button" to="/">Home</Link></li>
               <li><Link className="play-button2" to="/play">Play again</Link></li>
               </ul>
          
               </div>
               </div>
               </Fragment>
               
               );

          }
     else{
   stats = (<h1>Stats is not available</h1>);     
     }
      return (
	<Fragment>
        <Helmet><title>Summary</title></Helmet>

        {stats}
     </Fragment>

);
}

}


export default QuizSummary;