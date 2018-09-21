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
      imageCategory: "",
      textCategory: "",
      sound1: "",
      sound2: "",
      sound3: "",
      sound4: ""
    };
  }

  handleRadioButtonChange(key, label, title, categoryIndex) {
    let soundChanges = {
      sound1: this.state.sound1,
      sound2: this.state.sound2,
      sound3: this.state.sound3,
      sound4: this.state.sound4
    };
    let imageChanges = this.state.imageCategory;
    let textChanges = this.state.textCategory;

    if (title === "Sound") {
      soundChanges = this.findSoundFiles(label);
    }

    if (title === "Image") {
      imageChanges = categoryIndex;
    }

    if (title === "Text") {
      textChanges = categoryIndex;
    }

    let newCategories = [...this.state.categories];
    newCategories[key] = label;

    let newState = Object.assign(
      {},
      { categories: newCategories },
      { imageCategory: imageChanges },
      { textCategory: textChanges },
      soundChanges
    );

    this.setState(newState);
  }

  findSoundFiles = label => {
    let soundDict;

    if (label === "Humans") {
      soundDict = { sound1: 1, sound2: 2, sound3: 3, sound4: 4 };
    } else if (label === "Nature") {
      soundDict = { sound1: 5, sound2: 6, sound3: 7, sound4: 8 };
    } else if (label === "Life") {
      soundDict = { sound1: 9, sound2: 10, sound3: 11, sound4: 12 };
    }

    return soundDict;
  };

  render() {
    return (
      <div>
        <h1>Tabs Demo</h1>

        <RadioButtonContainer
          title={"Image"}
          rbcKey={0}
          onButtonChange={this.handleRadioButtonChange}
        >
          <div buttonValue={1} label={"Hei"} />
          <div buttonValue={2} label={"Nature"} />
          <div buttonValue={3} label={"Illustrations"} />
        </RadioButtonContainer>
        <RadioButtonContainer
          title={"Text"}
          rbcKey={1}
          onButtonChange={this.handleRadioButtonChange}
        >
          <div buttonValue={1} label={"du"} />
          <div buttonValue={2} label={"ER"} />
          <div buttonValue={3} label={"KUL"} />
        </RadioButtonContainer>
        <RadioButtonContainer
          title={"Sound"}
          rbcKey={2}
          onButtonChange={this.handleRadioButtonChange}
        >
          <div buttonValue={1} label={"Humans"} />
          <div buttonValue={2} label={"Nature"} />
          <div buttonValue={3} label={"Life"} />
        </RadioButtonContainer>

        <Tabs>
          <div tabName="Gallery 1">
            <MediaContainer
              mediaKey={1}
              activeCategories={this.state.categories}
              soundSource={this.state.sound1}
              imgSource={this.state.imageCategory}
              textSource={this.state.textCategory}
            />
          </div>
          <div tabName="Gallery 2">
            <MediaContainer
              mediaKey={2}
              activeCategories={this.state.categories}
              soundSource={this.state.sound2}
              imgSource={this.state.imageCategory}
              textSource={this.state.textCategory}
            />
          </div>
          <div tabName="Gallery 3">
            <MediaContainer
              mediaKey={3}
              activeCategories={this.state.categories}
              soundSource={this.state.sound3}
              imgSource={this.state.imageCategory}
              textSource={this.state.textCategory}
            />
          </div>
          <div tabName="Gallery 4">
            <MediaContainer
              mediaKey={4}
              activeCategories={this.state.categories}
              soundSource={this.state.sound4}
              imgSource={this.state.imageCategory}
              textSource={this.state.textCategory}
            />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
