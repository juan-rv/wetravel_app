import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store/index"
import { Auth0Provider } from "@auth0/auth0-react"
import axios from 'axios';

//axios.defaults.baseURL = "http://localhost:3001" //=>  para el servidor local
axios.defaults.baseURL= "https://wetravelback-production-5e23.up.railway.app"



const domain = "dev-phkwpdyfsngins0e.us.auth0.com"
const clientId = "J114T7blACrrsbyR6FosM0QDF7VEQ16K"

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin} >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
