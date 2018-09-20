import React from "react";
import axios from "axios";

export default class SvgFile extends React.Component {
  // Needs id={id: int, category: int} prop
  state = {
    imageData: [],
    curImage: ""
  };

  componentDidMount() {
    // Loads image one time after component is rendered
    axios
      .get("resources/Images/" + this.props.id + ".svg") // Gets JSON with images
      .then(res => {
        this.setState({
          imageData: this.state.imageData.concat([
            {
              filename: this.props.id,
              data: res.data
            }
          ])
        }); // Stores data
        this.setState({
          curImage: this.state.imageData[0].data
        });
      })
      .catch(error => {
        // Lets user know if theres an error
        // handle error
        console.log(
          "componentDidMount-error: Could not retrieve file at path: 'resources/Images/" +
            this.props.id +
            "'. " +
            error
        );
      });
  }

  componentWillReceiveProps(nextProps) {
    let match = this.state.imageData.filter(
      data => data.filename === nextProps.id
    );
    if (match.length) {
      this.setState({
        curImage: match[0].data
      });
    } else {
      axios
        .get("resources/Images/" + nextProps.id + ".svg") // Gets JSON with images
        .then(res => {
          this.setState({
            imageData: this.state.imageData.concat([
              {
                filename: nextProps.id,
                data: res.data
              }
            ])
          }); // Stores data
          this.setState({
            curImage: this.state.imageData[this.state.imageData.length - 1].data
          });
        })
        .catch(error => {
          // Lets user know if theres an error
          // handle error
          console.log(
            "componentWillReceiveProps-error: Could not retrieve file at path: 'resources/Images/" +
              nextProps.id +
              "'. " +
              error
          );
        });
    }
  }

  render() {
    return (
      <div className="imageContainer">
        <div dangerouslySetInnerHTML={{ __html: this.state.curImage }} />
      </div>
    );
  }
}
