import React, { Component } from "react";
import "./App.css";

import RadioButtonContainer from "./components/RadioButtonContainer";
import Tabs from "./components/Tabs";
import MediaContainer from "./components/MediaContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);

    this.state = {
      categories: ["", "", ""]
    };
  }

  handleRadioButtonChange(key, label) {
    console.log(
      "Key: " + key.toString() + ", Label: " + label + " is now selected"
    );
    let newCategories = [...this.state.categories];
    newCategories[key] = label;
    this.setState({ categories: newCategories });
  }

  render() {
    return (
      <div>
        <h1>Tabs Demo</h1>

        <RadioButtonContainer
          title={"Bilder"}
          rbcKey={0}
          onButtonChange={this.handleRadioButtonChange}
        >
          <div buttonValue={1} label={"Hei"} />
          <div buttonValue={2} label={"Hva"} />
          <div buttonValue={3} label={"skjEEER"} />
        </RadioButtonContainer>
        <RadioButtonContainer
          title={"Tekst"}
          rbcKey={1}
          onButtonChange={this.handleRadioButtonChange}
        >
          <div buttonValue={4} label={"du"} />
          <div buttonValue={5} label={"ER"} />
          <div buttonValue={6} label={"KUL"} />
        </RadioButtonContainer>
        <RadioButtonContainer
          title={"Lyd"}
          rbcKey={2}
          onButtonChange={this.handleRadioButtonChange}
        >
          <div buttonValue={7} label={"boi boi boi"} />
          <div buttonValue={8} label={"jadda"} />
          <div buttonValue={9} label={"neida"} />
        </RadioButtonContainer>

        <Tabs>
          <div tabName="Gator">
            <MediaContainer
              mediaKey={1}
              activeCategories={this.state.categories}
            />
          </div>
          <div tabName="Croc">
            <MediaContainer
              mediaKey={2}
              activeCategories={this.state.categories}
            />
          </div>
          <div tabName="Sarcosuchus">
            <MediaContainer
              mediaKey={3}
              activeCategories={this.state.categories}
            />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
