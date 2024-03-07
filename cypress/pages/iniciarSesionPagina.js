//Clase para para manejar los elementos web de la pagina que concierne 
//a la pagina principal despues de realizar el login correctamente
//se tienen las funcionas para interactuar con dichos elementos
class IniciarSesionPagina{
    a
        elements = {
            campoEmail: ()=> cy.get('#exampleInputEmail2'),
            campoContraseña: ()=> cy.get('#exampleInputPassword2'),
            botonIniciarSesion: ()=> cy.get('.tw-font-bold.tw-text-white.tw-text-base'),
            
        }
        visit() {
          cy.visit('/');
        }
       //Metodo para presionar el buton de login
        llenarCredenciales(){
        this.elements.campoEmail().type('rafasebass17@gmail.com');
        this.elements.campoContraseña().type('Rafael_1');
        
      }
        presionarBotonInicioSesion(){
        this.elements.botonIniciarSesion().click();
      }
      } 
    export const iniciarSesionPagina= new IniciarSesionPagina();
    
    