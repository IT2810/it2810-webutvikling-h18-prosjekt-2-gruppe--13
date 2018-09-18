import React, { Component } from 'react';

import Checkbox from './Checkbox';

export default class CheckboxContainer extends Component {

  // Ta inn en liste som inneholder
  constructor(props){
    super(props);

    // en liste som holder bools for checked/ikkechecked boxes
    this.state = {
      checkedBoxes : this.props.children.map((child) => {
        return false;
      })
    }
    console.log(this.state);
    console.log(this.props.children[0].props);
  }

  //Kalles fra child component, oppdaterer om en box er checked eller ikke basert på index i checkedboxes arrayen i state til CheckboxContainer

  onCheckBoxClick = (boxKey) => {
    let newCheckedBoxes = this.state.checkedBoxes;
    newCheckedBoxes[boxKey] = !newCheckedBoxes[boxKey];
    this.setState(
      {
        checkedBoxes : newCheckedBoxes
      }
    )
    console.log(boxKey);
    console.log(this.state);
  }

  //Funksjon for å lage Checkboxes


  render(){
    const {onCheckBoxClick, state : {checkedBoxes}, props: {children}} = this;
    console.log("Render -- children:", children[1].props);
    return(
      <div className="checkboxes">
        {
          children.map((child) => {
            const{boxName, boxKey} = child.props;
            return(
              <Checkbox checkBoxLabel={boxName} handleCheckBoxClick={onCheckBoxClick} checkedBoxes = {checkedBoxes} boxKey={boxKey} key={boxName}/>
            )
          }
        )}
      </div>
    )
  }

}
