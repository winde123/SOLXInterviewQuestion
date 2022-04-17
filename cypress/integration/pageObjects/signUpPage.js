class SignUpPage {
    firstnameInputField(){
        return 'input#firstName'
    }

    lastnameInputField(){
        return 'input#lastName'
    }

    usernameInputField(){
        return 'input#username' 
    }

    passwordInputField(){
        return '[aria-label="Password"]'
    }

    passwordConfirmInputField(){
        return '[aria-label="Confirm"]'
    }

    showPwCheckbox(){
        return 'input#i3'
    }

    warningTextUsername(){
        return 'div.o6cuMc'
    }

    warningTextPw(){
        return 'div.OyEIQ.uSvLId>div:nth-child(2)'
    }

    langChooser(){
        return {"chooserSelector": "div#lang-chooser" , 
                "optionSelector" : "span.vRMGwf.oJeWuf",  
                "currentActiveOptionSelector":"div.MocG8c.B9IrJb.LMgvRb.KKjvXb"}
    }

    clickOnNextButtonSelector(){
        cy.contains('Next').click()
        return this
    }

    clickOnCurrentEmailBtn(){
        cy.contains('Use my current email address instead').click()
        return this
    }

    clickOnSignInBtn(){
        cy.contains('Sign in instead').click()
    }

    
    enterInputFieldValidation(searchterm,selector){
        cy.get(selector).should('be.visible');
        cy.get(selector).clear().type(searchterm)
        cy.get(selector).should('have.attr','data-initial-value').and('equal',searchterm)
        return this
        
    }
    



}

export default SignUpPage