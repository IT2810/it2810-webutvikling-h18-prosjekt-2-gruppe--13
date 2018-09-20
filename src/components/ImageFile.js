import React from "react";
import axios from "axios";

export default class ImageFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios.get(this.props.src).then(res => {
      console.log(res);
      this.setState({ images: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.images.map(image => (
          <img src={image.url} alt={image.title} key={image.id} />
        ))}
      </div>
    );
  }
}
