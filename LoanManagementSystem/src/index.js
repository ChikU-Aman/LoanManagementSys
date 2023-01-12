import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { store } from './state/store';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-seo-dream.css'
import './assets/css/animated.css'
import './assets/css/owl.css'
// import './assets/jquery/jquery.min.js'
// import './assets/js/owl-carousel.js'
// import './assets/js/animation.js'
// import './assets/js/imagesloaded.js'
// import './assets/js/custom.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
