///<reference types="cypress"/>
class ComputersPage {

    getTitle() {
        return cy.title();
    }

    getComputerCountHeading(){
        return cy.get('#main h1');
    }

    getcomputersCountPageNumbering(){
        return cy.get('li.current a')
    }

    getNavigationTo() {
        return cy.get('.App-header a');
    }
    
    getAddANewComputer(){
        return cy.get('#add');
    }

    setComputersearch(){
        return cy.get('#searchbox');
    }

    clickSearchButton(){
        return cy.get('#searchsubmit').focus().click();
    }

    getSearchButton(){
        return cy.get('#searchsubmit');
    }

    getPreviousLink(){
        return cy.get('li.prev a');
    }

    getNextLink(){
        return cy.get('li.next');
    }

    getColumn1(){
        return cy.get('th.col-name.header.headerSortUp a');
    }

    getColumn2(){
        return cy.get('th.col-introduced.header a');
    }

    getColumn3(){
        return cy.get('th.col-discontinued.header a');
    }

    getColumn4(){
        return cy.get('th.col-company.header a');
    }
}
export default ComputersPage;