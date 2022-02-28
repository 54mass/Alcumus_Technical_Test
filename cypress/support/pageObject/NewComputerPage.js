///<reference types="cypress"/>
class NewComputerPage {

    getTitle() {
        return cy.title();
    }

    getPageHeading() {
        return cy.get('#main h1');
    }

    getComputerName(){
        return cy.get('#name');
    }

    getIntroduced(){
        return cy.get('#introduced');
    }

    getDiscontinued(){
        return cy.get('#discontinued');
    }

    getDiscontinued(){
        return cy.get('#discontinued');
    }

    getResidentialHeading() {
        return cy.get('.css-joa6mv h6.ui-core-Text');
    }

    getCompany(){
        return cy.get('#company');
    }

    getCreateBtn(){
        return cy.get('#main > form > div > input');
    }

    getCancelBtn(){
        return cy.get('#main > form > div > a');
    }

    clickCreate(){
        return cy.get('#main > form > div > input').focus().click();
    }

    clickCancel(){
        return cy.get('#main > form > div > a').focus().click();
    }

    getComputerNameErr(){
        return cy.get('#name+span');
    }

    getIntroducedErr(){
        return cy.get('#introduced+span')
    }

    getIntroducedErr(){
        return cy.get('#introduced+span')
    }

}

export default NewComputerPage;