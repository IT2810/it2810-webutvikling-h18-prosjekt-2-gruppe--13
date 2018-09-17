import React, { Component } from 'react';
import './App.css';


import CheckboxContainer from './components/CheckboxContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tabs Demo</h1>
          <button>DummyButton</button>
          <CheckboxContainer>
            <div boxName={"Kenobi"} boxKey={0}></div>
            <div boxName={"Anakin"} boxKey={1}></div>
            <div boxName={"Grevious"} boxKey={2}></div>
            <div boxName={"Yoda"} boxKey={3}></div>
          </CheckboxContainer>
      </div>
    );
  }
}

export default App;
