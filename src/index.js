import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from "jquery"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


$(document).ready(function () {

    $(".theme").click(() => {
        $("body").toggleClass("dark")
        if ($("body").hasClass("dark")) {
            $(".theme").text("THEME: DARK")
        }else {
            $(".theme").text("THEME: LIGHT")
        }
    })

})