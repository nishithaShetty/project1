import React,{Fragment} from 'react';
import {Helmet} from 'react-helmet';
import questions from '../questions.json';
import isEmpty from '../is-empty'
import M from 'materialize-css';

class Play extends React.Component{
constructor(props){
    super();
  
    this.state ={
        questions:this.shuffleArray(),
        currentQuestion:{},
        nextQuestion:{},
        previousQuestion: {},
        answer: '',
        numberofQuestions:0,
        numberofAnsweredQuestions:0,
        currentQuestionIndex:0,
        score:0,
        correctAnswers:0,
        wrongAnswers:0,
        answeredSet:{},
        submittedAnswer:'',
        answeredQuestion:0
        
        };   
}


componentDidMount(){
  this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.answeredSet,this.submittedAnswer);
}


displayQuestions = (questions = this.state.questions,currentQuestion,nextQuestion,answeredSet,submittedAnswer) =>{
  let { currentQuestionIndex} = this.state;
  if(!isEmpty(this.state.questions)){
     questions = this.state.questions;
     currentQuestion = questions[currentQuestionIndex];
     nextQuestion = questions[currentQuestionIndex+1];
     const answer = currentQuestion.correct;
     if (!currentQuestion.incorrect) return null;
        const wrong = currentQuestion.incorrect;
        var answerset = [currentQuestion.correct,wrong[0],wrong[1],wrong[2]];
        var i= answerset.length,j,temp;
        while(--i > 0){
          j = Math.floor(Math.random() * (i+1));
          temp = answerset[j];
          answerset[j] = answerset[i];
          answerset[i]  =temp;
          }
    answeredSet = answerset;
    submittedAnswer = '';
  
    this.setState({
      	currentQuestion,
        nextQuestion,
        numberOfQuestions: questions.length,
        answer,
        answeredSet,
        submittedAnswer
});        }};

shuffleArray =() =>{
  var arr = questions

  var i= arr.length,j,temp;
  
  while(--i > 0){
   j = Math.floor(Math.random() * (i+1));
  temp = arr[j];
  arr[j] = arr[i];
  arr[i]  =temp;
  
  }
  arr = arr.slice(0,10);
 

  return arr;

}



handleQuitButtonClick =() =>{
   if(window.confirm("Are you sure you want to quit"))
    {
      this.props.history.push('/');
    }  }


handleNextClick =() =>{
  this.setState(prevState =>({
    currentQuestionIndex: prevState.currentQuestionIndex +1,
    numberofAnsweredQuestions: prevState.numberofAnsweredQuestions +1,
     }), () =>{
    if(this.state.nextQuestion === undefined)
    {
       this.endgame();
    }
    else{
      
  this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion);
    }
  });
}



handleOptionClick =(e)=>{
  if(e.target.innerHTML.toLowerCase() === this.state.currentQuestion.correct.toLowerCase())
  {
     this.correctAnswer(e.target.innerHTML); 
  }
  else{
     this.wrongAnswer(e.target.innerHTML);
  }  
}

  correctAnswer = (e) =>{
  M.toast({
   html: 'Correct Answer!',
   classes: 'toast-valid',
   displayLength: 1500
  });

  this.setState(prevState =>({
    submittedAnswer : e,
    correctAnswers:prevState.correctAnswers+1,
    numberofAnsweredQuestions:prevState.numberofAnsweredQuestions+1,
    score:prevState.score +1
  }), () =>{
    if(this.state.nextQuestion === undefined)
    {
       this.endgame();
    }
    else{
    }
  });    
  }

  wrongAnswer = (e) =>{
  M.toast({
   html: 'Wrong Answer!',
   classes: 'toast-invalid',
   displayLength: 1500
  });
  this.setState(prevState =>({
    submittedAnswer : e,
    wrongAnswers:prevState.wrongAnswers+1,
    numberofAnsweredQuestions:prevState.numberofAnsweredQuestions+1,
    answeredQuestion:prevState.answeredQuestion + 1

  }), () =>{
    if(this.state.nextQuestion === undefined)
    {
       this.endgame();
    }
    else{
    }
  });
  }
  
endgame =() =>{
    alert('Quiz has ended!');
    const { state} = this;
    const playerStats ={
      score: state.score,
      numOfQuestions: state.numberOfQuestions,
      numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
      answeredQuestion : state.answeredQuestion + 1 
    };
console.log(playerStats);
setTimeout(() =>{this.props.history.push('/quizSummary',playerStats)},1000);   
    }
    



  render(){
  const {currentQuestion, currentQuestionIndex, answeredSet, submittedAnswer} = this.state; 
  var first = answeredSet[0];
  var second = answeredSet[1];
  var third = answeredSet[2];
  var fourth = answeredSet[3];
 
  

	return(
  <Fragment>
    <Helmet><title>Play Quiz</title></Helmet>
        <div id="home">
          <div className="questions">
              <div className="lifeline-container">
              <p>
                <span className="left">{currentQuestionIndex +1} of 10</span>
              </p>		
              </div>
		      <h5>{currentQuestion.question}</h5>
		      <div className="options-container">
              <button onClick={this.handleOptionClick} disabled ={ submittedAnswer === ''?false:true} className={ first === currentQuestion.correct && submittedAnswer !== ''? "option1": submittedAnswer === first?"option2":"option"}>{first}</button>
              <button onClick={this.handleOptionClick} disabled ={ submittedAnswer === ''?false:true} className={second === currentQuestion.correct && submittedAnswer !== ''? "option1": submittedAnswer === second?"option2":"option"}>{second}</button>
              <button onClick={this.handleOptionClick} disabled ={ submittedAnswer === ''?false:true} className={third === currentQuestion.correct && submittedAnswer !== '' ? "option1": submittedAnswer === third?"option2":"option"} >{third}</button>
              <button onClick={this.handleOptionClick} disabled ={ submittedAnswer === ''?false:true} className={fourth === currentQuestion.correct && submittedAnswer !== ''? "option1": submittedAnswer === fourth?"option2":"option"}>{fourth}</button>
            
          </div>
          <div className="button-container">
              <button onClick={this.handleNextClick} >Next</button>
              <button onClick={this.endgame} visibility ={currentQuestionIndex +1 === 10?false:true}>Submit</button>
              <button onClick={this.handleQuitButtonClick} >Exit</button>
          </div>
      </div>
    </div>          
	</Fragment>
);
}
}

export default Play;