import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';



const tick = (() => ReactDOM.render(<App />, document.getElementById('app')));

tick();
setInterval(tick, 1000);