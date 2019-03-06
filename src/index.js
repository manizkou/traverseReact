import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App'; 
// import Todos from '.components/Todos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
