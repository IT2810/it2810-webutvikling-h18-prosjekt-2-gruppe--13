import React, { Component } from "react";

class MediaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: "",
      soundURL: "",
      textURL: ""
    };
  }

  render() {
    return (
      <div>
        <p>
          Hei! Dette er en media container med key{" "}
          {this.props.mediaKey.toString()}.<br />
          Følgende underkategorier er valgt: <br />- Bilde:{" "}
          {this.props.activeCategories[0]}
          <br />- Tekst: {this.props.activeCategories[1]}
          <br />- Lyd: {this.props.activeCategories[2]}
        </p>
      </div>
    );
  }
}

export default MediaContainer;
