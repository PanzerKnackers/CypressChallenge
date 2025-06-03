import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Background and setup steps
Given("I am on the site management page", () => {
  cy.visit("/Manage/site_settings");
  cy.url().should('include', '/Manage/site_settings');
});

Given("I am viewing the site title setting", () => {
  cy.visit("/Manage/site_settings");
  cy.get('#site-title').should('be.visible');
});

Given("I am viewing the site description setting", () => {
  cy.visit("/Manage/site_settings");
  cy.get('#site-description').should('be.visible');
});

// Navigation and verification steps (COMPLETED)
When("I visit the site management page", () => {
  cy.visit("/Manage/site_settings");
});

Then("I should see the site title {string}", (title) => {
  cy.get('.header-logo h1').should('contain.text', title);
});

Then("I should see the management sidebar", () => {
  cy.get('#manageSideBar').should('be.visible');
  cy.get('#js-configuration-group').should('contain.text', 'Configuration');
});

Then("I should see the settings table", () => {
  cy.get('table.settings').should('be.visible');
  cy.get('#site-title').should('be.visible');
});

// TODO: Main challenge - implement these step definitions
When("I click the edit link for site title", () => {
  // TODO: Implement clicking the edit link
  // Hint: Look for the edit link within the site-title row
  cy.log('TODO: Click the edit link for site title');
});

Then("the setting should become editable", () => {
  // TODO: Verify the setting is now in edit mode
  // Hint: Check for .active class and .editing div visibility
  cy.log('TODO: Verify setting is in edit mode');
});

When("I change the title to {string}", (newTitle) => {
  // TODO: Clear the input and type the new title
  // Hint: Find the input field within the site-title setting
  cy.log(`TODO: Change title to ${newTitle}`);
});

When("I save the changes", () => {
  // TODO: Click the save button
  // Hint: Look for the .save button within the active setting
  cy.log('TODO: Save the changes');
});

Then("the title should be updated to {string}", (expectedTitle) => {
  // TODO: Verify the title was updated in the viewing mode
  // Hint: Check the .viewing .value element contains the new title
  cy.log(`TODO: Verify title updated to ${expectedTitle}`);
});

Then("the setting should return to view mode", () => {
  // TODO: Verify the setting is no longer in edit mode
  // Hint: Check that .active class is removed and .viewing is visible
  cy.log('TODO: Verify setting returned to view mode');
});

// BONUS: Site description editing (simpler version)
When("I edit the site description to {string}", (newDescription) => {
  // TODO: Complete workflow - edit link, change text, save
  // This combines multiple steps into one for the bonus scenario
  cy.log(`TODO: Edit site description to ${newDescription}`);
});

Then("the description should be updated", () => {
  // TODO: Verify description was saved
  cy.log('TODO: Verify description was updated');
});

Then("the form should return to view mode", () => {
  // TODO: Verify form returned to view mode
  cy.log('TODO: Verify form returned to view mode');
});