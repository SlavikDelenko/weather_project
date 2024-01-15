import React from 'react'; 
import ReactDOM from 'react-dom'; 
import DisplayWeatherData from './components/Weather'; 
import './index.css'; 
 
ReactDOM.render( 
  <React.StrictMode> 
    <DisplayWeatherData /> 
  </React.StrictMode>, 
  document.getElementById('root') 
);

