// import { Given, Then } from "cypress-cucumber-preprocessor/steps";
// import customersearchPage from '../../../../support/pageObject/customersearchPage';


// let url = Cypress.config().baseUrl;

// const searchPage = new customersearchPage();


// Given(/^I am on brook '(.*)' page$/, ( SearchPageUrl ) =>{
//     cy.visit(url+SearchPageUrl);
// } );

// Given(/^I should see page heading '(.*)'$/, ( PageHeading ) =>{
//     searchPage.getPageHeading().contains(PageHeading);
// } );

// Given(/^I should see search text box$/, (  ) =>{
// 	searchPage.getSearchTextField().should('have.value', '');
//     searchPage.getSearchTextField().should('not.be.disabled');
//     searchPage.getSearchTextField().should('be.visible');
// } );

// Given(/^I should see search button$/, (  ) =>{
//     searchPage.getSearchButton().should('not.be.disabled');
//     searchPage.getSearchButton().should('be.visible');
// } );

// When(/^I enter '(.*)' customer reference number$/, ( SearchValue ) =>{
//     searchPage.getSearchTextField().type(SearchValue);
// } );

// Given(/^I click search button$/, (  ) =>{
//     searchPage.clickSearchButton();
// } );

// Then(/^I should get error message '(.*)'$/, ( ErrorMsg ) =>{
//     searchPage.getAlertDetails().should('be.visible');
//     searchPage.getAlertDetails().contains(ErrorMsg);
// } );

// Then(/^I should not get error message$/, (  ) =>{
//     searchPage.getAlertDetails().should('not.exist');
// } );

// Then(/^I should see table with heading '(.*)', '(.*)', '(.*)', '(.*)'$/, ( Customer, Property, Name, Email ) =>{
//     searchPage.getCustomerHeading().should('have.text',Customer);
//     searchPage.getPropertyHeading().should('have.text',Property);
//     searchPage.getNameHeading().should('have.text',Name);
//     searchPage.getEmailHeading().should('have.text',Email);
// } );


// Then(/^I should see valid search result '(.*)','(.*)','(.*)','(.*)'$/, ( CustomerRef, Property, CustomerName, CustomerEmail ) =>{
//     searchPage.getCustmorNumber().should('have.text',CustomerRef);
//     searchPage.getProperty().should('have.text',Property);
//     searchPage.getCustomerName()
//     .should('have.text',CustomerName)
//     searchPage.getCustomerEmail().should('have.text',CustomerEmail);
// } );







