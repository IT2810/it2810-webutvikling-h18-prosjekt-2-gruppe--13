import React from "react";
import axios from "axios";

export default class SvgFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ""
    };
  }

  componentDidMount() {
    // Loads image one time after component is rendered
    console.log("Did mount");
    axios
      .get("resources/images/" + this.props.file) // Gets image
      .then(res => {
        console.log(res.data); // Extracts data
        this.setState({
          images: res.data // Saves data in state images
        });
        console.log(res.data);
      })
      .catch(error => {
        // Lets user know if theres an error
        // handle error
        console.log(
          "Could not retrieve file at path: 'resources/images/" +
            this.props.file +
            "'. " +
            error
        );
      });
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.images }} />; // Not necessarily recommended way to load svg, but it works for this project
  }
}
