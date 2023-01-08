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

    if (card.value === "") {
      document.getElementById("card").style.background = "salmon";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.display = "none";
    }

    //cambiando color de fondo a CVC
    if (cvc.value === "") {
      document.getElementById("cvc").style.background = "salmon";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.display = "none";
    }

    //cambiando color de fondo a amount
    if (amount.value === "") {
      document.getElementById("amount").style.background = "salmon";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.display = "none";
    }

    //cambiando color de fondo a firstName
    if (firstName.value === "") {
      document.getElementById("firstName").style.background = "salmon";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.display = "none";
    }

    //cambiando color de fondo a lastName
    if (lastName.value === "") {
      document.getElementById("lastName").style.background = "salmon";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.display = "none";
    }

    //cambiando color de fondo a City
    if (city.value === "") {
      document.getElementById("city").style.background = "salmon";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.display = "none";
    }

    //cambiando color de fondo a State
    if (state.value === "Pick a State") {
      document.getElementById("state").style.background = "salmon";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.display = "none";
    }

    //cambiando color de fondo al Codigo postal
    if (postalCode.value === "") {
      document.getElementById("postalCode").style.background = "salmon";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.display = "none";
    }

    //cambiando color de fondo al Mensaje
    if (message.value === "") {
      document.getElementById("message").style.background = "salmon";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.display = "none";
    }

    //funcion para validar que los campos no esten vacios

    /*const expresiones = {
                          texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
                          numeros: /^\d{4,14}$/ // 7 a 14 numeros.
                        };*/

    /*function validateFields(e) {
                  let field = e.target;
                  let fieldValue = e.target.value;
                  if (fieldValue.trim().length === 0 && stateValue === "Pick a State") {
                    field.style.background = "salmon";
                    alert.style.display = "block";
                  } else {
                    field.style.background = "white";
                    alert.style.display = "none";
                  }
                }
                card.addEventListener("blur", validateFields);
                cvc.addEventListener("blur", validateFields);
                amount.addEventListener("blur", validateFields);
                firstName.addEventListener("blur", validateFields);
                lastName.addEventListener("blur", validateFields);
                city.addEventListener("blur", validateFields);
                state.addEventListener("blur", validateFields);
                postalCode.addEventListener("blur", validateFields);
                message.addEventListener("blur", validateFields);
                alert.addEventListener("blur", validateFields);*/
  }
};
