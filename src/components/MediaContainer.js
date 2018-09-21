import React, { Component, PureComponent } from "react";
import SoundFile from "../components/dataLoading/SoundFile";
import SvgFile from "./dataLoading/SvgFile";
import TextFile from "./dataLoading/TextFile";

class MediaContainer extends PureComponent {
  render() {
    if (
      this.props.textSource !== "" &&
      this.props.imgSource !== "" &&
      this.props.soundSource !== ""
    ) {
      return (
        <div>
          {console.log("" + this.props.mediaKey + this.props.textSource)}
          <p>
            Hei! Dette er en media container med key{" "}
            {this.props.mediaKey.toString()}.<br />
            Følgende underkategorier er valgt: <br />- Bilde:{" "}
            {this.props.activeCategories[0]}
            <br />- Tekst: {this.props.activeCategories[1]}
            <br />- Lyd: {this.props.activeCategories[2]}
          </p>
          <SvgFile id={"" + this.props.mediaKey + this.props.imgSource} />
          <TextFile id={"" + this.props.mediaKey + this.props.textSource} />
          <SoundFile id={this.props.soundSource} />
        </div>
      );
    }
    return <p>Please select all categories.</p>;
  }
}

export default MediaContainer;
