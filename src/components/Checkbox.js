import React, { Component } from 'react';

export default class Checkbox extends Component {


  constructor(props){
    super(props);
    console.log(this.props);
  }

  handleClick = () =>{
    const {handleCheckBoxClick} = this.props;
    handleCheckBoxClick(this.props.boxKey);
  }

  render(){
    const {handleClick} = this;
    return(
      <div className="checkbox">
      <p>{this.props.checkBoxLabel}
      <input type="checkbox" onClick={handleClick} value={"hi"}/>
      </p>
      </div>
    )
  }

}
