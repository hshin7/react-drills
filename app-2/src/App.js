import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor (){
    super();

    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    };
  }


  render() {
    let foodsArray = this.state.foods.map((element, index) => {
      return <h2 key ={index}>{element}</h2>
    });

    return <div className = 'App'>{foodsArray}</div>
  }
}



// key = special string attribute need to include when creating list of elements and identify which items in the list are changed, updated, or deleted 


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
