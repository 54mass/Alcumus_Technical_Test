import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import ComputersPage from '../../../../support/pageObject/ComputersPage';

let url = Cypress.config().baseUrl;

const Computers = new ComputersPage();
let computerHeadercount;
let computersPagenumberingCount;

Given(/^I am on computer database homepage$/, (  ) =>{
    cy.visit(url);
} );

Then(/^I should see '(.*)' in the title$/, ( title) =>{
    Computers.getTitle().should('include', title);
} );

Then(/^I should see Add a New Computer button$/, (  ) =>{
    Computers.getAddANewComputer().should('be.visible');
    Computers.getAddANewComputer().contains('Add a new computer');
} );

Then(/^I should see search text box and search button$/, (  ) =>{
    Computers.setComputersearch().should('be.visible');
    Computers.setComputersearch()
    .invoke('attr', 'placeholder').should('contain', 'Filter by computer name...')
    Computers.getSearchButton().should('be.visible');
    Computers.getSearchButton().should('have.value', 'Filter by name');
} );

Then(/^I should see Previous link is disable$/, (  ) =>{
    Computers.getPreviousLink().should("not.have.attr", "href");
} );

Then(/^I should see Next link is enable$/, (  ) =>{
    Computers.getNextLink().should('not.be.disabled');
} );

Then(/^I should see table showing headings '(.*)','(.*)','(.*)','(.*)'$/, ( Column1, Column2, Column3,Column4 ) =>{
    
    Computers.getColumn1().should('have.text', Column1);
    
    Computers.getColumn2().should('have.text', Column2);
    
    Computers.getColumn3().should('have.text', Column3);
    
    Computers.getColumn4().should('have.text', Column4);

} );
    
Then(/^I should see computers count in heading$/, (  ) =>{
    Computers.getComputerCountHeading().should('be.visible');
    Computers.getComputerCountHeading().invoke('text').should('match', /^[0-9]*/);
    Computers.getComputerCountHeading().invoke('text')
    .then((text)=>{ 
        var fullText = text;
        var pattern = /^[0-9]*/;
        computerHeadercount = fullText.match(pattern);
        console.log("heading " +computerHeadercount);
       })
    Computers.getComputerCountHeading().contains('computers found');
} );
    
Then(/^I should see computers count in page navigation$/, (  ) =>{
    Computers.getcomputersCountPageNumbering().invoke('text')
    .then((text)=>{ 
        var fullText = text;
        var pattern = /(\d+)(?!.*\d)/;
        computersPagenumberingCount = fullText.match(pattern);
       })
    Computers.getcomputersCountPageNumbering().contains('Displaying 1 to 10 of');
} );
    
Then(/^I should see both count matches$/, (  ) =>{
    expect(computerHeadercount[0]).equal(computersPagenumberingCount[0])
} );







