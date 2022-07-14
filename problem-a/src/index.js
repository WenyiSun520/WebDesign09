// import react here:
import React from 'react';
import ReactDOM from  'react-dom'
import senator from './senators.json'
//render the App component here!
import {App} from "./App"
ReactDOM.render(<App senators={senator}/>, document.querySelector("#root")) ;