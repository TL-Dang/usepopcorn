import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import StarRating from './components/StarRating/StarRating.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['Bad', 'Could be better', 'Okay', 'Good', 'Great']}/>
    <StarRating maxRating={10} defaultRating={5}/>
    <StarRating /> */}
  </React.StrictMode>
);