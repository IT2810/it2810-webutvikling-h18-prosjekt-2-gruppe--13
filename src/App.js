import React, { Component } from "react";
import "./App.css";

import Tabs from "./components/Tabs";
import SvgFile from "./components/SvgFile";
import SoundFile from "./components/SoundFile";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tabs Demo</h1>
        <Tabs>
          <div tabName="Gator">
            See ya later, <em>Alligator</em>!
          </div>
          <div tabName="Croc">
            After a while, <em>Crocodile</em>!
          </div>
          <div tabName="Sarcosuchus">
            <SvgFile file={"SVG.svg"} />
          </div>
        </Tabs>

        <SoundFile category={"c7"} />
      </div>
    );
  }
}

export default App;
