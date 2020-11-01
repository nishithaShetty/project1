import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Instructions from './components/Instructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';

function App() {
  return (
    
      <Router>
        <Route exact path="/" component={ Home } />
        <Route path="/instructions" component={ Instructions } />
        <Route path="/play" component={ Play } />
        <Route path="/quizSummary" component={ QuizSummary } />
        
      </Router>
  );
}
 
export default App;
