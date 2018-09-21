import React from "react";

// This code is very ugly, proceed with caution

export default class SoundFile extends React.Component {
  // Much of this code shall be credited to this example (https://codepen.io/StudentOfJS/pen/dzjPwP/)

    playSound = () => {
        // Play the sound for the selected category
        if (this.sound) {
            this.sound.play();
        }

    };

  render() {
    return (

      <div className={"sound soundContainer"}>

        {/*Temporary button for playing of the sounds*/}
        {/*Sounds follow*/}
        <audio controls src={"resources/Sounds/"+this.props.id+".mp3"} type="audio/mpeg"></audio>
      </div>
    );
  }
}
