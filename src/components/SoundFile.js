import React from "react";
import axios from "axios";

// This code is very ugly, proceed with caution

export default class SoundFile extends React.Component {
  // Much of this code shall be credited to this example (https://codepen.io/StudentOfJS/pen/dzjPwP/)
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: this.props.category
    };
  }

  setSoundCategory = category => {
    // Set which sound that shall be played
    this.setState({
      selectedCategory: category
    });
  };

  playSound = () => {
    // Play the sound for the selected category
    switch (this.state.selectedCategory) {
      case "c1":
        this.sound1.play().catch;
        break;
      case "c2":
        this.sound2.play();
        break;
      case "c3":
        this.sound3.play();
        break;
      case "c4":
        this.sound4.play();
        break;
      case "c5":
        this.sound5.play();
        break;
      case "c6":
        this.sound6.play();
        break;
      case "c7":
        this.sound7.play();
        break;
      case "c8":
        this.sound8.play();
        break;
      case "c9":
        this.sound9.play();
        break;
      case "c10":
        this.sound10.play();
        break;
      case "c11":
        this.sound11.play();
        break;
      case "c12":
        this.sound12.play();
        break;
      default:
        this.sound1.play();
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.playSound}>Play da sound</button>{" "}
        {/*Temporary button for playing of the sounds*/}
        {/*Sounds follow*/}
        <audio
          ref={sound1 => {
            this.sound1 = sound1;
          }}
        >
          <source src="resources/Sounds/sound1.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound2 => {
            //This links the name to the audio, which makes it playable
            this.sound2 = sound2;
          }}
        >
          <source src="resources/Sounds/sound2.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound3 => {
            this.sound3 = sound3;
          }}
        >
          <source src="resources/Sounds/sound3.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound4 => {
            this.sound4 = sound4;
          }}
        >
          <source src="resources/Sounds/sound4.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound5 => {
            this.sound5 = sound5;
          }}
        >
          <source src="resources/Sounds/sound5.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound6 => {
            this.sound6 = sound6;
          }}
        >
          <source src="resources/Sounds/sound6.mp3" type="audio/mpeg" />
        </audio>
        <audio>
          <source src="resources/Sounds/sound7.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound7 => {
            this.sound7 = sound7;
          }}
        >
          <source src="resources/Sounds/sound8.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound8 => {
            this.sound8 = sound8;
          }}
        >
          <source src="resources/Sounds/sound9.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound9 => {
            this.sound9 = sound9;
          }}
        >
          <source src="resources/Sounds/sound10.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound10 => {
            this.sound10 = sound10;
          }}
        >
          <source src="resources/Sounds/sound11.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound11 => {
            this.sound11 = sound11;
          }}
        >
          <source src="resources/Sounds/sound12.mp3" type="audio/mpeg" />
        </audio>
        <audio
          ref={sound12 => {
            this.sound12 = sound12;
          }}
        >
          <source
            src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
            type="audio/mpeg"
          />
        </audio>
      </div>
    );
  }
}
