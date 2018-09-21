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
      soundCategory: ""
    };
  }

  handleRadioButtonChange(key, label, title, categoryIndex) {
    let soundChanges = this.state.soundCategory;
    let imageChanges = this.state.imageCategory;
    let textChanges = this.state.textCategory;

    if (title === "Sound") {
      soundChanges = categoryIndex;
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
        {soundCategory : soundChanges}
    );

    this.setState(newState);
  }

  render() {
    return (
      <div className={"grid"}>
        <header className={"header box"}>
            <h1>Prosjekt 2 – Gruppe 13</h1>
        </header>
        <div className={"radioMenu flex-radio box"}>
            <RadioButtonContainer
                title={"Image"}
                rbcKey={0}
                onButtonChange={this.handleRadioButtonChange}
            >
                <div buttonValue={1} label={"People"} />
                <div buttonValue={2} label={"Nature"} />
                <div buttonValue={3} label={"Illustrations"} />
            </RadioButtonContainer>
            <RadioButtonContainer
                title={"Text"}
                rbcKey={1}
                onButtonChange={this.handleRadioButtonChange}
            >
                <div buttonValue={1} label={"Poems"} />
                <div buttonValue={2} label={"Fun facts"} />
                <div buttonValue={3} label={"Quotes"} />
            </RadioButtonContainer>
            <RadioButtonContainer
                title={"Sound"}
                rbcKey={2}
                onButtonChange={this.handleRadioButtonChange}
            >
                <div buttonValue={1} label={"People"} />
                <div buttonValue={2} label={"Nature"} />
                <div buttonValue={3} label={"Life"} />
            </RadioButtonContainer>
        </div>
        <div className={"media box"}>
            <Tabs>
                <div tabName="Gallery 1">
                    <MediaContainer
                        mediaKey={1}
                        activeCategories={this.state.categories}
                        soundSource={this.state.soundCategory}
                        imgSource={this.state.imageCategory}
                        textSource={this.state.textCategory}
                    />
                </div>
                <div tabName="Gallery 2">
                    <MediaContainer
                        mediaKey={2}
                        activeCategories={this.state.categories}
                        soundSource={this.state.soundCategory}
                        imgSource={this.state.imageCategory}
                        textSource={this.state.textCategory}
                    />
                </div>
                <div tabName="Gallery 3">
                    <MediaContainer
                        mediaKey={3}
                        activeCategories={this.state.categories}
                        soundSource={this.state.soundCategory}
                        imgSource={this.state.imageCategory}
                        textSource={this.state.textCategory}
                    />
                </div>
                <div tabName="Gallery 4">
                    <MediaContainer
                        mediaKey={4}
                        activeCategories={this.state.categories}
                        soundSource={this.state.soundCategory}
                        imgSource={this.state.imageCategory}
                        textSource={this.state.textCategory}
                    />
                </div>
            </Tabs>
        </div>
        <div className={"footer box"}>
          <p>Takk for oss – på gjennsyn ved neste prosjekt</p>
        </div>
      </div>
    );
  }
}

export default App;
