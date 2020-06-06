import React from 'react';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Form from './pages/Form';
import About from './pages/About';
import Home from './pages/Home';
import ExercisesList from './pages/ExercisesList';
import EditExercise from './pages/EditExercise';
import CreateExercise from './pages/CreateExercise';
import CreateUser from './pages/CreateUser';
import Nav from './pages/Nav';
import NavError from './pages/NavError';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/form" component={Form} />
          <Route path="/exerciselist" component={ExercisesList} />
          <Route path="/editexercise" component={EditExercise} />
          <Route path="/createexercise" component={CreateExercise} />
          <Route path="/createuser" component={CreateUser} />
          <Route path="/*" component={NavError} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
