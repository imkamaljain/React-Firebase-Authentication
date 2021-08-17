import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export { default as Dashboard } from "./components/Dashboard";
export { default as Login } from "./components/Login";
export { default as PrivateRoute } from "./components/PrivateRoute";
export { default as Register } from "./components/Register";
export { default as ResetPassword } from "./components/ResetPassword";
export { default as UpdateProfile } from "./components/UpdateProfile";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
