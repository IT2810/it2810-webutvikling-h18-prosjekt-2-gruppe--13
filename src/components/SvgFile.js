import React from 'react';
import axios from 'axios';

export default class SvgFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        }
    }

    componentDidMount() {
        axios.get('public/resources/' + this.props.file)
            .then(res => {
                this.setState(
                    {images: res.data}
                );
                console.log(res.data);
            })
    }

    render() {
        return(
                <h1>LOL</h1>
        {this.state.images}
        )
    }
}