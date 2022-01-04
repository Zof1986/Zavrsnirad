///<reference types="cypress" />

import { authLogin } from "../Pageobject/authLogin";
import { header } from "../Pageobject/Header";



const faker = require("faker");

describe('POM Login', () => {

    let validEmail = "nikola.zof@gmail.com";
    let validPass = "dukenukem3d";
    
    let userData = {
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomName: faker.name.findName()
        
    };

    


    before('visit app', () => {
        //probaj drugacije , sve sto je zakomentarisano radi ali zbog ovih post requestova moraju da budu
        /*
        cy.visit('/');
        cy.url().should("contains", "gallery-app");
        */


        /*
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {
           email: 'nikola.zof@gmail.com' ,
           password: 'dukenukem3d'
        }).its('body').then((response) =>{
            window.localStorage.setItem('token', response.acces_token);
        })
        */
       cy.loginViaBackend('nikola.zof@gmail.com', 'dukenukem3d')



    });

    it('assert login`', () => {
        cy.visit('/');
      header.loginBtn.should('not.exist');
     
    });
    
    
    it("login in with valid", () => {
        cy.intercept({
         method:"POST",
         url:"https://gallery-api.vivifyideas.com/api/auth/login"    
        }).as("login");

      
        //napisi manualno loginovanje
        cy.get('.nav-link.nav-buttons').eq(0).click();
        cy.get('.nav-link.nav-buttons').eq(2).click();
        cy.get('#email').type('nikola.zof@gmail.com');
        cy.get('#password').type('dukenukem3d');
        cy.get('.btn.btn-custom').click();   
    
       
    })

    

    
    it("create gallery", () => {
       
      cy.intercept({
        method:"POST",
        url:"https://gallery-api.vivifyideas.com/api/galleries"    
       }).as("createGallery");
    });
    


    it("visit one gallery", () => {
        cy.visit("https://gallery-app.vivifyideas.com/galleries/3802");
      // cy.get('.textarea').type("Lorem Ipsum is simpl ");
    });

    

    ////////
    

    it('login with invalid credentials', () => {
        cy.get("a[href='/login']").click();
        cy.url().should("contains", "/login");
    });

    it('login with valid credentias', () => {

        cy.get("a[href='/login']").click();
        cy.url().should("contains", "/login");

        authLogin.login(validEmail,validPass);
       // cy.url().should("not.contains", "/login");

    })
    
    
    
    it('logout', () => {
        cy.wait(1000);
        header.logoutBtn.click();
    })

    it('allgaleries', () => {
        cy.wait(1000);
        header.allgaleries.click();

       
    })

   it('register', () => {
        cy.wait(1000);
        header.registerbtn.click();
        header.firstnameform.type(userData.randomName);
        header.lastnameform.type(userData.randomName);
        header.emailform.type(userData.randomEmail);
        header.passwordform.type(userData.randomPassword);
        header.passwordconfirmform.type(userData.randomPassword);
        header.submitvtnform.check();
        header.termscondform.click();
    })

   

   
})