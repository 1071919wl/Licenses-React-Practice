import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const image=require('./assets/62127775.jpeg');


const App = (props) => {
  function ofAge(age) {
    if (age>=21) {
      return `I am ${age} years old and of age to drink.`;
    }else{
      return `I am ${age} years old and not old enough to drink yet.`;
  }
}

  return(
    <div id="info">
    <img src={image}/>
    <div className="word">
    <h3><b>Name:</b> {props.name}</h3>
    <p><b>Address:</b> {props.address}</p>
    <p><b>State:</b>{props.state}</p>
    <p><b>Age:</b>{ofAge(props.age)}</p>
    </div>
    </div>
  )
}



// class App extends Component{
//   render(){
//     return(
//       <div>
//         <p>Name: {this.props.name} | Age: {this.props.age}</p>
//       </div>
//     )
//   }
// }

export default App;
