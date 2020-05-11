import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';

const image=require('./assets/62127775.jpeg');

ReactDOM.render(
  <React.StrictMode>
  <h1>Licenses</h1>
    <div className="test">
      <App name='El Mo' age="18" address="123 Sesame st." state="MA"/>
      <App name="Jotaro Joestar" age="65" address="14 Grain ave." state="ID"/>
      <App name="Freddie Cougar" age="21" address="666 Elm st." state="CA"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
