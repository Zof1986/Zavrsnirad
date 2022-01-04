/// <reference types="Cypress" />



before('visit app', () => {

  cy.visit('https://gradebook.vivifyideas.com/login');
  cy.url().should("contains", "login");
// cy.loginInBackend('nikola.zof@gmail.com','dukenukem3d')

});
 

 const faker = require("faker");

 let userData = {
    randomName: faker.name.findName(),
    randomName1: faker.name.findName(),
    randomEmail: faker.internet.email(),
   randPassword: faker.internet.password(),
   randimage: faker.image.imageUrl()
 }
 
 describe('register test', () => {
 
       
     


 it('login', () => {
    cy.visit('https://gradebook.vivifyideas.com/login');
     
    cy.get('#email').type("nikola.zof@gmail.com");
    cy.get('#userPassword').type("dukenukem3d");
    //////////////////////////////////
 // cy.get('h4').should('have.text','Please Login.');
 //  cy.get('#email').type(userData.randomEmail);
//   cy.get('#userPassword').type(userData.randPassword);
////////
   // cy.get('.group-btn').click();
  cy.get("button[type='submit']").click();


  });

  //mora da ides preko linka jer na header kliktanje ne funcionise
  it('create Profesor', () => {
   cy.visit('https://gradebook.vivifyideas.com/login');
   
   cy.get('#email').type("nikola.zof@gmail.com");
  cy.get('#userPassword').type("dukenukem3d");
   cy.get('.group-btn').click();

   cy.wait(3000);
   cy.visit('https://gradebook.vivifyideas.com/professors/create');

   cy.get('#input-default').type(userData.randomName);
   cy.get('#input-default1').type(userData.randomName1);
   
  // cy.get('.mb-4 custom-select').click();
  //cy.get('select').select('12');
 // cy.get('select').select('false'); 
 // cy.get('select').select('true');     //ovaj je dobar
 // cy.get('select').select('12').should('have.value', '7');
  //cy.get('.btn.btn-secondary').click();
  cy.contains('Add Image').click();
  cy.wait(300);
  cy.get('#__BVID__39').type(userData.randimage);
  //cy.get('#__BVID__39').type('https://tinyjpg.com/images/social/website.jpg');

 cy.get('.btn.btn-secondary').click();
  ///////////////////////////////////////////////
   
  // cy.get(':nth-child(6) > .nav-link').click();
  // cy.wait(3000);
  // cy.get('a[href*="/professors/create"').type('{enter}');
   
  
   //cy.get(':nth-child(6) > .nav-link').click();
  // cy.contains('Add Professor').click();
  
    //cy.contains('Add Professor').click();
  // cy.get('#input-default').type(faker.name.findName());

  //mora da se izlogujes jer onda ne mozes ponovo da udjes normalno
  cy.get('em').click();
  cy.contains('Sign Out').click();
  })


  it('logout', () => {
     
     //cy.visit('https://gradebook.vivifyideas.com/gradebooks');
    //cy.get('#__BVID__25__BV_button_').click();
   // cy.wait(300);
    cy.get('em').click();
   cy.contains('Sign Out').click();
  })

  it('register', () => {
   cy.visit('https://gradebook.vivifyideas.com/login');


  cy.get('.nav-link').eq(1).click();  //radi
  cy.get('h4').should('have.text','Please Register.');
  cy.get('#first_name').type('Nikola').click();
  cy.get('#last_name').type('Markovic').click();
  cy.get('#email').type('nikola.zof@gmail.com').click();
  cy.get('#password').type('dukenukem3d').click();
  cy.get('#password_confirmation').type('dukenukem3d').click();
  cy.get('.custom-control.custom-checkbox').click();
  cy.get('.btn.btn-outline-primary').click();
  
  })

   it.only('Create gradebook', () => {
    cy.visit('https://gradebook.vivifyideas.com/login');
     
    cy.get('#email').type("nikola.zof@gmail.com");
    cy.get('#userPassword').type("dukenukem3d");
     
  cy.get("button[type='submit']").click();
  cy.wait(3000);
  cy.contains('Add Gradebook').click();
  cy.get('.input-filed.form-control').type(userData.randomName);
  cy.get('select').select('17');
  cy.get(".btn.btn-submit.btn-primary").click();
   })

 })