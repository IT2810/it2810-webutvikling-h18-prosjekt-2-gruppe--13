import React, { Component } from 'react';
import './App.css';

import RadioButtonContainer from './components/RadioButtonContainer';
{/*import CheckboxContainer from './components/CheckboxContainer';*/}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tabs Demo</h1>

          <RadioButtonContainer>
              <div buttonValue={1} label={"hali"}/>
              <div buttonValue={2} label={"og"}/>
              <div buttonValue={3} label={"dra"}/>
              <div buttonValue={4} label={"til"}/>
              <div buttonValue={5} label={"hælvette"}/>
              <div buttonValue={6} label={"kuk"}/>
          </RadioButtonContainer>


      </div>
    );
  }
}

export default App;
