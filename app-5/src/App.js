import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image.js'

class App extends Component {

  render(){
    return (
      <div className = 'App'>
        <Image url = { 'https://lh3.googleusercontent.com/proxy/VVHtywMXXM6wIOGbL9R7S8ySjvyDbevX2_2XnOv4zERLk_V3PVB4epbq6Gcv9jmdQNoTbwm-fibiGgIXta5wpKmr-mQWbKrRhfp7x9Q9TVaaH1wwqR8ygFC0ORbp5h6np5PfrQpdZqC8' } />
      </div>
    );
  }
}



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
