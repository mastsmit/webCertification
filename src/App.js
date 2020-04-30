import React,{useState} from 'react';
import './App.css';
import Button from './component/Button';
function App(props) {
  return(
    <div>
      <Button id={'button2'} ></Button>some
      <Button id={'button1'} ></Button>some
      <Button id={'button3'} ></Button>some
      <Button id={'button4'} ></Button>some
    </div>
  );
}
export default App;
