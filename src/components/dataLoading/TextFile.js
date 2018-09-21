import React from "react";
import axios from "axios";

export default class TextFile extends React.Component {
  constructor(props) {
    // Needs mandatory prop id={id (string) + category (string) eks: "13"}
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
          texts: res.data // Loads text from selected id into state-storage
        });
      })
      .catch(error => {
        // Lets user know if theres an error
        console.log(
          "Could not retrieve file at path: 'resources/Texts/text.json'" + error
        );
      });
  }

  render() {
    return (
      <div>
        <h3>
          {this.state.texts
            .filter(text => text.Id === this.props.id)
            .map(text => text.title)}
        </h3>
        <hr />
        <p>
          {this.state.texts
            .filter(text => text.Id === this.props.id)
            .map(text => text.body)}
        </p>
      </div>
    );
  }
}
