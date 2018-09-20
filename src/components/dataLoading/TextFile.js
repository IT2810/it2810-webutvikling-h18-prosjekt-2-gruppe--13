import React from "react";
import axios from "axios";

export default class TextFile extends React.Component {
  constructor(props) {
    // Needs mandatory prop id={int}
    super(props);

    this.state = {
      texts: []
    };
  }

  componentDidMount() {
    axios
      .get("resources/Texts/text.json")
      .then(res => {
        this.setState({
          texts: res.data[this.props.id] // Loads text from selected id into state-storage
        });
        console.log(this.state.texts);
      })
      .catch(error => {
        // Lets user know if theres an error
        console.log(
          "Could not retrieve file at path: 'resources/images/" +
            this.props.file +
            "'. " +
            error
        );
      });
  }

  render() {
    return (
      <div>
        <h3>{this.state.texts.title}</h3>
        <hr />
        <p>{this.state.texts.body}</p>
      </div>
    );
  }
}
