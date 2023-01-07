/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let form = document.getElementById("form");
  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();
    let card = document.getElementById("card");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let postalCode = document.getElementById("postalCode");
    let message = document.getElementById("message");
    let alert = document.getElementById("alert");

    console.log(card.value);
    console.log(cvc.value);
    console.log(amount.value);
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(city.value);
    console.log(state.value);
    console.log(postalCode.value);
    console.log(message.value);
    console.log(alert);

    //cambiando color de fondo a card
    if (card.value === "") {
      //console.log("El campo email está vacio");
      document.getElementById("card").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    //cambiando color de fondo a CVC
    if (cvc.value === "") {
      //console.log("El campo email está vacio");
      document.getElementById("cvc").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    //cambiando color de fondo a amount
    if (amount.value === "") {
      //console.log("El campo email está vacio");
      document.getElementById("amount").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    //cambiando color de fondo a firstName
    if (firstName.value === "") {
      //console.log("El campo email está vacio");
      document.getElementById("firstName").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    //cambiando color de fondo a lastName
    if (lastName.value === "") {
      //console.log("El campo email está vacio");
      document.getElementById("lastName").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    //cambiando color de fondo a City
    if (city.value === "") {
      //console.log("El campo email está vacio");
      document.getElementById("city").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    //cambiando color de fondo a State
    if (state.value === "Pick a State") {
      //console.log("El campo email está vacio");
      document.getElementById("state").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    //cambiando color de fondo al Codigo postal
    if (postalCode.value === "") {
      //console.log("El campo email está vacio");
      document.getElementById("postalCode").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    //cambiando color de fondo al Mensaje
    if (message.value === "") {
      //console.log("El campo email está vacio");
      document.getElementById("message").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
  }
};
