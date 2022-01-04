/// <reference types="Cypress" />



before('visit app', () => {

  cy.visit('https://gradebook.vivifyideas.com/login');
  cy.url().should("contains", "login");


});
 
const Locators = require('../fixtures/Locators.json');


 const faker = require("faker");

 let userData = {
    randomName: faker.name.findName(),
    randomName1: faker.name.findName(),
    randomEmail: faker.internet.email(),
    randPassword: faker.internet.password(),
    randimage: faker.image.imageUrl()
 }
 
 let validEmail = "nikola.zof@gmail.com";
 let validPass = "dukenukem3d";
  
 describe('register test', () => {
 
       
     


 it('login', () => {
    cy.visit('https://gradebook.vivifyideas.com/login');
    cy.get(Locators.LoginPage.EmailInput).should('be.visible');
    cy.get(Locators.LoginPage.EmailInput).type(validEmail);
    cy.get(Locators.LoginPage.PasswordInput).should('be.visible');
    cy.get(Locators.LoginPage.PasswordInput).type(validPass);
    cy.get(Locators.LoginPage.SubmitButton).should('be.visible');
    cy.get(Locators.LoginPage.SubmitButton).click();

  });

  
  it('create Profesor', () => {
   cy.visit('https://gradebook.vivifyideas.com/login');
   cy.get(Locators.LoginPage.EmailInput).should('be.visible');
   cy.get(Locators.LoginPage.EmailInput).type(validEmail);
   cy.get(Locators.LoginPage.PasswordInput).should('be.visible');
   cy.get(Locators.LoginPage.PasswordInput).type(validPass);
   cy.get(Locators.LoginPage.SubmitButton).should('be.visible');
   cy.get(Locators.LoginPage.SubmitButton).click();
   cy.wait(3000);
   cy.visit('https://gradebook.vivifyideas.com/professors/create');
   cy.get(Locators.CreateProfessor.EnterName).should('be.visible');
   cy.get(Locators.CreateProfessor.EnterName).type(userData.randomName);
   cy.get(Locators.CreateProfessor.EnterLastName).should('be.visible');
   cy.get(Locators.CreateProfessor.EnterLastName).type(userData.randomName1);
   cy.get(Locators.CreateProfessor.AddImage).should('be.visible');
   cy.get(Locators.CreateProfessor.AddImage).click();
   cy.wait(300);
   cy.get(Locators.CreateProfessor.AddImageUrl).should('be.visible');
   cy.get(Locators.CreateProfessor.AddImageUrl).type(userData.randimage);
   cy.get(Locators.CreateProfessor.SubmitButton).should('be.visible');
   cy.get(Locators.CreateProfessor.SubmitButton).click();
   cy.get(Locators.Logout.LogoutUser).should('be.visible');
   cy.get(Locators.Logout.LogoutUser).click();
   cy.contains('Sign Out').click();
  })

  it.only('Create gradebook', () => {
    cy.visit('https://gradebook.vivifyideas.com/login');
    cy.get(Locators.LoginPage.EmailInput).should('be.visible');
    cy.get(Locators.LoginPage.EmailInput).type(validEmail);
    cy.get(Locators.LoginPage.PasswordInput).should('be.visible');
    cy.get(Locators.LoginPage.PasswordInput).type(validPass);
    cy.get(Locators.LoginPage.SubmitButton).should('be.visible');
    cy.get(Locators.LoginPage.SubmitButton).click();
    cy.wait(3000);
    cy.contains('Add Gradebook').click();
    cy.get(Locators.CreateGradebook.AddGradebook).should('be.visible');
    cy.get(Locators.CreateGradebook.AddGradebook).type(userData.randomName);
    cy.get('select').should('be.visible');
    cy.get('select').select("25");
    cy.get(Locators.CreateGradebook.SubmitButton).should('be.visible');
    cy.get(Locators.CreateGradebook.SubmitButton).click();
   })

  
 

 })