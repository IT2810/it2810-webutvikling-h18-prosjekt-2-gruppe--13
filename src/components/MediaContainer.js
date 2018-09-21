import React, { PureComponent } from "react";
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
        <div className={"gridMedia"}>
          <SvgFile id={"" + this.props.mediaKey + this.props.imgSource} />
          <TextFile id={"" + this.props.mediaKey + this.props.textSource} />
          <SoundFile id={"" + this.props.mediaKey + this.props.soundSource} />
        </div>
      );
    }
    return <p>Please select all categories.</p>;
  }
}

export default MediaContainer;
