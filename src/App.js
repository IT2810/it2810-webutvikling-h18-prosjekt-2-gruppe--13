import React, { Component } from "react";
import "./App.css";

import RadioButtonContainer from "./components/RadioButtonContainer";
import Tabs from "./components/Tabs";
{
  /*import CheckboxContainer from './components/CheckboxContainer';*/
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tabs Demo</h1>
        <RadioButtonContainer>
          <div buttonValue={1} label={"hali"} />
          <div buttonValue={2} label={"og"} />
          <div buttonValue={3} label={"dra"} />
          <div buttonValue={4} label={"til"} />
          <div buttonValue={5} label={"hælvette"} />
          <div buttonValue={6} label={"kuk"} />
        </RadioButtonContainer>
        <Tabs>
          <div tabName="Gator">
            See ya later, <em>Alligator</em>!
          </div>
          <div tabName="Croc">
            After a while, <em>Crocodile</em>!
          </div>
          <div tabName="Sarcosuchus">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
