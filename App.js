import React from 'react';
import './App.css';
import Login from '../src/Components/LoginNote/LoginNote';
import Home from '../src/Components/Home/Home';
import fire from '../src/Components/FB/firebase';

class App extends React.Component {
    constructor() {
      super();
      this.state = ({
        user: null,
      });
      this.authListener = this.authListener.bind(this);
    }
  
    componentDidMount() {
      this.authListener();
    }
  
    authListener() {
      fire.auth().onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          this.setState({ user });
          localStorage.setItem('user', user.uid);
        } else {
          this.setState({ user: null });
          localStorage.removeItem('user');
        }
      });
    }
    render() {
      return (
       <div>{this.state.user ?  ( <Home/>) : (<Login />)}</div>
      )}
    
  }
  
   export default App;
  