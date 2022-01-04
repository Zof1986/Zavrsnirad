/// <reference types="cypress" />

const Locators = require('../fixtures/Locators.json');

const faker = require("faker");

describe("login test", () =>{

    let validEmail = "nikola.zof@gmail.com";
    let validPass = "dukenukem3d";

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randPassword: faker.datatype.number()
    }

   before('visit app page', () =>{
       cy.visit("/");
       cy.url().should('contains',"https://gallery-app");
   })

   it("Register with invalid credentials", () =>{

    cy.visit("/");
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
    cy.get(Locators.Register.Register).click();
    cy.get(Locators.Register.FirstName).clear().type(userData.randomName);
    cy.get(Locators.Register.LastName).clear().type(userData.randomName);
    cy.get(Locators.Register.Email).clear().type(userData.randomEmail);
    cy.get(Locators.Register.Password).clear().type(userData.randPassword);
    cy.get(Locators.Register.PasswordConfirmed).clear().type(userData.randPassword);
    cy.get(Locators.Register.SubmitBut).check(),
    //cy.get(Locators.Register.Termsandconditions).click(),
    // preko id mora click a preko checkbox check i uncheck
    cy.get(Locators.LoginPage.SubmitButton).click();
    })

    
    


    it("login with valid credentials", () =>{

        cy.visit("/");
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get(Locators.Header.Login).click();
        cy.get(Locators.LoginPage.EmailInput).type(validEmail);
        cy.get(Locators.LoginPage.PasswordINput).type(validPass);
        cy.get(Locators.LoginPage.SubmitButton).click();

        
        })

        it("find gallery", () => {
            
        })
    
       

    it("logout", () => {
        cy.visit("/");
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get(Locators.Logout.LogoutButton).click();
        })

    })

//})