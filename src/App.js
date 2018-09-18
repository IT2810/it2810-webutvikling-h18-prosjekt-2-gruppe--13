import React, { Component } from 'react';
import './App.css';

import RadioButtonContainer from './components/RadioButtonContainer';
import ImageFile from "./components/ImageFile";
{/*import CheckboxContainer from './components/CheckboxContainer';*/}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tabs Demo</h1>

          <ImageFile src={'public/resources/images.json'} albumId={1}/>


      </div>
    );
  }
}

export default App;
