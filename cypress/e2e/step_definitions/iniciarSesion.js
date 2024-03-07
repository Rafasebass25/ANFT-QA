import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";
import { iniciarSesionPagina } from "@pages/iniciarSesionPagina";
import { paginaPrincipal } from "@pages/paginaPrincipal";


//Pasos usados para realizar el Login en la pagina

Given("el usuario ingresa a la pagina principal",()=>{
    cy.visit('/') 
});
When("el usuario presiona el boton de iniciar sesion", () => {
    paginaPrincipal.PresionarBotonIniciarSesion();
  });

  When("el usuario ingresa credenciales validas de inicio de sesion", () => {
    iniciarSesionPagina.llenarCredenciales();
  });

  When("el usuario presiona el boton de inicio de sesion", () => {
    iniciarSesionPagina.presionarBotonInicioSesion();
  });

 