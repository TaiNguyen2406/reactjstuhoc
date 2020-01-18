import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Main1 extends React.Component {
    render() {
      return (
        <h1>Hello world!</h1>
      );
    }
  }
  function Main(){
    return ( <h1>Xin chào!</h1>)
    
  }
  class AnhRongVang extends React.Component {
    render() {
      return (
       <img src="https://1.bp.blogspot.com/-Ue5uZmuGees/WS2EHBNssVI/AAAAAAAH0kc/QJE0P5y9A_sURI3i1E9h-BZH8iBeDS8sQCLcB/s1600/AW438063_02.gif"></img>
      );
    }
  }
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
