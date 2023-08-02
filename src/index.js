import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
