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
      categories: ["", "", ""],
      sound1: "",
      sound2: "",
      sound3: "",
      sound4: ""
    };
  }

  handleRadioButtonChange(key, label, title) {
    console.log(
      "Key: " + key.toString() + ", Label: " + label + " is now selected"
    );

    let soundChanges;

    if (title === "Lyd") {
      soundChanges = this.findSoundFiles(label);
    }

    let newCategories = [...this.state.categories];
    newCategories[key] = label;

    let newState = Object.assign(
      {},
      { categories: newCategories },
      soundChanges
    );

    console.log(newState);
    this.setState(newState);
  }

  findSoundFiles = label => {
    let soundDict;

    if (label === "Mennesker") {
      soundDict = { sound1: 1, sound2: 2, sound3: 3, sound4: 4 };
    } else if (label === "Natur") {
      soundDict = { sound1: 5, sound2: 6, sound3: 7, sound4: 8 };
    } else if (label === "Livet") {
      soundDict = { sound1: 9, sound2: 10, sound3: 11, sound4: 12 };
    }

    return soundDict;
  };

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
          <div buttonValue={7} label={"Mennesker"} />
          <div buttonValue={8} label={"Natur"} />
          <div buttonValue={9} label={"Livet"} />
        </RadioButtonContainer>

        <Tabs>
          <div tabName="Gator">
            <MediaContainer
              mediaKey={1}
              activeCategories={this.state.categories}
              soundSource={"C" + this.state.sound1.toString()}
              imgSource={""}
              textSource={""}
            />
          </div>
          <div tabName="Croc">
            <MediaContainer
              mediaKey={2}
              activeCategories={this.state.categories}
              soundSource={"C" + this.state.sound2.toString()}
              imgSource={""}
              textSource={""}
            />
          </div>
          <div tabName="Sarcosuchus">
            <MediaContainer
              mediaKey={3}
              activeCategories={this.state.categories}
              soundSource={"C" + this.state.sound3.toString()}
              imgSource={""}
              textSource={""}
            />
          </div>
          <div tabName="Heyhey">
            <MediaContainer
              mediaKey={4}
              activeCategories={this.state.categories}
              soundSource={"C" + this.state.sound4.toString()}
              imgSource={""}
              textSource={""}
            />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
