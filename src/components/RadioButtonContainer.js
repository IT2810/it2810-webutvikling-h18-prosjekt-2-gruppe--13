import React from "react";
import RadioButton from "./RadioButton";

export default class RadioButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this); // Binds 'this' correctly. Not sure if necessary
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      selectedId: "" // Indicates which button should be selected on load (blank for none)
    };
  }

  handleChange = (i, label) => {
    // the id of the chosen button
    // Should be run when user clicks on a radioButton. Changes state to correct selectedId
    this.setState({ selectedId: i });
    this.props.onButtonChange(this.props.rbcKey, label, this.props.title, i);
  };

  handleSubmit = event => {
    // Not in use (yet?)
    event.preventDefault();

    alert("Du valgte knapp med id: " + this.state.selectedId.text());
  };

  renderButton = (i, key, label) => {
    // Function for rendering a radioButton, takes inn 'id', 'key' which is the index in the list, and a label
    return (
      <RadioButton
        id={i}
        key={key}
        onChange={() => this.handleChange(i, label)}
        selectedId={this.state.selectedId}
        label={label}
      />
    );
  };

  render() {
    // renders the form containing a list of RadioButton-components. The number of components is determined by the number of children the RadioButtonContainer has
    return (
        <div className={"flex-child-radio"}>
      <form onSubmit={this.handleSubmit}>
        <p>{this.props.title}</p>
        <span className="Radiobuttons">
          {this.props.children.map((child, index) => {
            // Maps each child to a rendered RadioButton-component
            const { buttonValue, label } = child.props;
            return this.renderButton(buttonValue, index, label);
          })}
        </span>
      </form>
        </div>
    );
  }
}
