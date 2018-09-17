import React from 'react';

function RadioButton(props) {
    return (
        <li>
            <label>
                <input
                    type="radio"
                    value={this.props.key}
                    checked={this.props.selectedId === this.props.key}
                    onChange={this.props.handleChange}
                />
                {props.label}
            </label>
        </li>
    )
}

export default RadioButton;