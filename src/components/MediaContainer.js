import React, { Component } from "react";
import ImageFile from "./ImageFile";

class MediaConainer extends Component {
  state = { imageURL: "", soundURL: "", textURL: "" };
  render() {
    return (
      <div>
        <p>Hei hei hallo du</p>
        <ImageFile src="resources/tree.jpg" />
      </div>
    );
  }
}

export default MediaConainer;
