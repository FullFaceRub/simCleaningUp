import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      bins: []
    }
  }

  componentDidMount(){
    axios.get('/api/bins').then(res=>{
      this.setState({
        bins: res.data
      })
    })
  }

  render() {
    function mapping(arr, cb){
      var newArr = [];
      for(let i = 0; i<arr.length; i++){
        cb(arr[i], i, arr)
      }
    }

    function fun (e, i, a){
      return <div key={i}>
        <h1>{e.bin_name}</h1>
        <div>{e.bin_content}</div>
      </div>
    }


    let binsMap = this.state.bins.length>1?mapping(this.state.bins, fun):null
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {binsMap}
        </p>
      </div>
    );
  }
}

export default App;
