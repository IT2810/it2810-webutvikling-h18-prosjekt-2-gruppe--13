import React from "react";

function RadioButton(props) {
  // A functional component, which means it doesn't have a state. This contains one radiobutton
  return (
    <div>
      <label>
        <input
          type="radio" // Indicates it a radiobutton
          value={props.id}
          checked={props.selectedId === props.id} // Checks if the selected button is this button (props.id is this buttons id)
          onChange={props.onChange} // Indicates that the parent's function onChange should be run when onChange is fired by the input
        />
        {"\t" + props.label}
      </label>
    </div>
  );
}

export default RadioButton;
