import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Background steps
Given("I am on the Cypress Kitchen Sink application", () => {
  cy.visit("/");
});

Given("I am on the main page", () => {
  cy.visit("/");
});

// Navigation steps  
When("I visit the main page", () => {
  cy.visit("/");
});

When("I navigate to the {string} section", (section) => {
  cy.get('.navbar-nav').contains(section).click();
});

// Assertion steps
Then("I should see the page title contains {string}", (title) => {
  cy.title().should("contain", title);
});

Then("I should see the main navigation sidebar", () => {
  cy.get('.navbar-nav').should('be.visible');
  cy.get('.navbar-nav').should('contain', 'Querying');
  cy.get('.navbar-nav').should('contain', 'Actions');
});

Then("I should be on the {string} page", (section) => {
  cy.url().should('include', section.toLowerCase());
});

Then("the page should load correctly", () => {
  cy.get('h1, h2, h3').should('be.visible');
});

// Actions section interactions
Given("I navigate to the {string} section", (section) => {
  cy.get('.navbar-nav').contains(section).click();
});

When("I interact with action elements", () => {
  // Basic interaction - click on a button if available
  cy.get('button').first().should('be.visible');
  cy.log('Interacting with action elements');
});

Then("the interactions should work correctly", () => {
  // Verify we're in the actions section
  cy.url().should('include', 'actions');
  cy.get('h1').should('contain', 'Actions');
});

// TODO scenarios for candidates to implement
When("I fill out various form elements", () => {
  // TODO: Implement form filling logic
  // Candidates should find and interact with:
  // - Text inputs
  // - Checkboxes
  // - Radio buttons
  // - Select dropdowns
  // - File uploads (if available)
  cy.log('TODO: Implement form filling logic');
  
  // Hint: Look for elements in the Actions section
  // Example patterns:
  // cy.get('[data-cy="action-email"]').type('test@example.com');
  // cy.get('[data-cy="action-disabled"]').should('be.disabled');
});

Then("all form inputs should accept my data", () => {
  // TODO: Implement form validation
  // Candidates should verify:
  // - Text was entered correctly
  // - Checkboxes/radios were selected
  // - Dropdowns show correct selection
  cy.log('TODO: Implement form validation logic');
});

Then("I should be able to interact with buttons and links", () => {
  // TODO: Implement button/link interaction testing
  // Candidates should test:
  // - Button clicks
  // - Link navigation
  // - Hover effects
  // - Focus states
  cy.log('TODO: Implement button and link interaction logic');
});