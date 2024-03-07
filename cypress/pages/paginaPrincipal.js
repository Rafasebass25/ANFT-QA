//Clase para para manejar los elementos web de la pagina que concierne 
//a la pagina principal despues de realizar el login correctamente
//se tienen las funcionas para interactuar con dichos elementos
class PaginaPrincipal{
    a
        elements = {
            BotonIniciarSesion: ()=> cy.contains('Iniciar Sesión'),
        }
        visit() {
          cy.visit('/');
        }
       //Metodo para presionar el buton de login
        PresionarBotonIniciarSesion(){
        this.elements.BotonIniciarSesion().click();
      }
      } 
    export const paginaPrincipal= new PaginaPrincipal();
    
    