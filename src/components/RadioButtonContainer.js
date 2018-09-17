import React from 'react';


export default class RadioButtonContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            selectedId: 2,
        };

    }

    handleChange = (i) => {
        this.setState(
            {selectedId: i}
        );
        console.log(this.state.selectedId);
    };

    handleSubmit = (event) => {
        event.preventDefault();

        alert('Du valgte knapp med id: ' + this.state.selectedId.text());
    };

    renderButton = (i, key, label) => {
        return (
            <RadioButton
                id={i}
                key={key}
                onChange={() => this.handleChange(i)}
                selectedId={this.state.selectedId}
                label={label}
            />
        );
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p> Select a button</p>
                <ul className="Radiobuttons">
                    {
                       this.props.children.map((child, index) => {
                           const {buttonValue, label} = child.props;
                           return (
                               this.renderButton(buttonValue, index, label)
                           )
                       })
                    }
                </ul>
            </form>
        )
    }
}

function RadioButton(props) {

    return (
        <li>
            <label>
                <input
                    type="radio"
                    value={props.id}
                    checked={props.selectedId === props.id}
                    onChange={props.onChange}
                />
                {props.label}
            </label>
        </li>
    )
}