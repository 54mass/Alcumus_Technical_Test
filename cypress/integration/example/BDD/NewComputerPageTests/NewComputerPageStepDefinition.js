import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import newComputerPage from '../../../../support/pageObject/NewComputerPage';


let url = Cypress.config().baseUrl;

const newComputer = new newComputerPage();

Given(/^I am on add a new computer page$/, (  ) =>{
    cy.visit(url+'/new');
} );

Then(/^I should see '(.*)' heading$/, ( heading ) =>{
    newComputer.getPageHeading().should('have.text',heading );
} );


Then(/^I should see Computer name text box$/, (  ) =>{
    newComputer.getComputerName().should('exist');
	newComputer.getComputerName().should('be.visible');
} );

Then(/^I should see Introduced date text box$/, (  ) =>{
	newComputer.getIntroduced().should('exist');
	newComputer.getIntroduced().should('be.visible');
} );

Then(/^I should see Discontinued date text box$/, (  ) =>{
	newComputer.getDiscontinued().should('exist');
	newComputer.getDiscontinued().should('be.visible');
} );

Then(/^I should see Company dropdown box$/, (  ) =>{
	newComputer.getCompany().should('exist');
	newComputer.getCompany().should('be.visible');
} );

Then(/^I should see Create this computer button$/, (  ) =>{
	newComputer.getCreateBtn().should('exist');
	newComputer.getCreateBtn().should('be.visible');
} );

Then(/^I should see Cancel button$/, (  ) =>{
    newComputer.getCancelBtn().should('exist');
	newComputer.getCancelBtn().should('be.visible');
} );

When(/^I enter space in Introduced text box$/, (  ) =>{
    newComputer.getIntroduced().type(" ");
} );

When(/^I press Create this computer without entering any value$/, (  ) =>{
    newComputer.clickCreate();
} );

Then(/^I should see error messages for computer name and Introduced$/, (  ) =>{
    newComputer.getComputerNameErr()
    .should('have.text','Failed to refine type : Predicate isEmpty() did not fail.');
    newComputer.getIntroducedErr()
    .should('have.text',"Failed to decode date : java.time.format.DateTimeParseException: Text ' ' could not be parsed at index 0");
} );
    







