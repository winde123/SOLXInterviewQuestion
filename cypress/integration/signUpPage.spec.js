/// <reference types="cypress" />

import SignUpPage from './pageObjects/signUpPage.js'

const signUpPage = new SignUpPage();

context('Google SignUp Form Tcs', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit(Cypress.env('googleSignUpURL'));
    })
    it('validate url of sign up page',()=> {
      cy.url().should('eq',Cypress.env('googleSignUpURL'));
  })
    
    it('should validate that the input fields are present and functional',()=> {
    // validating input field and input function

    signUpPage.enterInputFieldValidation('test',signUpPage.firstnameInputField());


    signUpPage.enterInputFieldValidation('test',signUpPage.lastnameInputField());


    signUpPage.enterInputFieldValidation('test',signUpPage.usernameInputField())

    
    signUpPage.enterInputFieldValidation('test',signUpPage.passwordInputField())

    
    signUpPage.enterInputFieldValidation('test',signUpPage.passwordConfirmInputField())

})
it('validate the functionality of the show passsword checkbox',()=> {
    signUpPage.enterInputFieldValidation('test',signUpPage.passwordInputField());
    signUpPage.enterInputFieldValidation('test',signUpPage.passwordConfirmInputField());
    // clickin on the show pw checkbox
    cy.get(signUpPage.showPwCheckbox()).click()
    // validating the functionality works
    cy.get(signUpPage.passwordInputField()).should('have.attr','type').and('eq','text')
    cy.get(signUpPage.passwordConfirmInputField()).should('have.attr','type').and('eq','text')

    

})

it('validate the length of new username check',()=> {
    // validating the check between 6 and 30chars
    // validating for username below 6 characters
    signUpPage.enterInputFieldValidation('test',signUpPage.usernameInputField());
    cy.get(signUpPage.firstnameInputField()).click();
    // checking for the error message
    cy.get(signUpPage.warningTextUsername()).contains('Sorry, your username must be between 6 and 30 characters long.').should('be.visible')

    // validating for correct length of username
    signUpPage.enterInputFieldValidation('mvkl12234',signUpPage.usernameInputField());
    cy.get(signUpPage.firstnameInputField()).click();
    cy.get(signUpPage.warningTextUsername()).should('not.exist')

    // validating for username string above 30
    signUpPage.enterInputFieldValidation('testtesttesttesttesttesttesttest',signUpPage.usernameInputField());
    cy.get(signUpPage.firstnameInputField()).click();
    cy.get(signUpPage.warningTextUsername()).contains('Sorry, your username must be between 6 and 30 characters long.').should('be.visible')
  
})

it('Checking on the validation between password input field and confirm pw input field',() => {
    // checking the case when password dont match
    signUpPage.enterInputFieldValidation('test111111',signUpPage.passwordInputField());
    signUpPage.enterInputFieldValidation('1111111111',signUpPage.passwordConfirmInputField());
    signUpPage.clickOnNextButtonSelector();
    cy.get(signUpPage.warningTextPw()).contains('Those passwords didn\’t match. Try again.').should('be.visible');
    cy.get(signUpPage.passwordConfirmInputField()).should('have.attr','aria-invalid').and('eq','true')

    // checking for the case where the password match
    signUpPage.enterInputFieldValidation('test',signUpPage.firstnameInputField());
    signUpPage.enterInputFieldValidation('test',signUpPage.lastnameInputField());
    signUpPage.enterInputFieldValidation('mvkl12234',signUpPage.usernameInputField());
    signUpPage.enterInputFieldValidation('test111111',signUpPage.passwordInputField());
    signUpPage.enterInputFieldValidation('test111111',signUpPage.passwordConfirmInputField());
    signUpPage.clickOnNextButtonSelector();
    cy.get(signUpPage.warningTextPw()).should('not.exist');

})

it('Verifying functionality of the user current email button functionality',() =>{
    signUpPage.clickOnCurrentEmailBtn();
    cy.get(signUpPage.usernameInputField()).should('have.attr','aria-label').and('eq','Your email address');
    
})

it('Verifying functionality of sign in button functionality',() =>{
    signUpPage.clickOnSignInBtn();
    cy.url().should('eq',Cypress.env('googleSignInURL'));
    
    
})

it('Verifying the functionality of the language picker',() =>{
    var langChooserJson = signUpPage.langChooser();
    // clicking on the picker
    
    cy.get(langChooserJson["chooserSelector"]).click()
    // verifying the number of options 
    cy.get(langChooserJson["optionSelector"]).should('have.length',74)
    // verifying current lang options as english(UK)
    cy.get(langChooserJson["currentActiveOptionSelector"]).should('have.attr','data-value').and('eq','en-GB')
    cy.get(langChooserJson["currentActiveOptionSelector"]).should('have.attr','aria-selected').and('eq','true')


})



  

  
  
  
})