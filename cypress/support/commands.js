// Custom commands for reusable actions

// Login command example
Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-cy="username"]').type(username);
  cy.get('[data-cy="password"]').type(password);
  cy.get('[data-cy="login-button"]').click();
});

// Navigation helper
Cypress.Commands.add('navigateToSection', (sectionName) => {
  cy.get('.navbar').contains(sectionName).click();
  cy.url().should('include', sectionName.toLowerCase());
});

// Form filling helper
Cypress.Commands.add('fillForm', (formData) => {
  Object.keys(formData).forEach(field => {
    cy.get(`[data-cy="${field}"]`).type(formData[field]);
  });
});

// Wait for element to be stable (stop moving/animating)
Cypress.Commands.add('waitForStable', (selector) => {
  cy.get(selector).should('be.visible');
  cy.wait(100); // Brief wait for animations to settle
});

// Custom assertion for responsive design
Cypress.Commands.add('shouldBeResponsive', (selector) => {
  // Desktop
  cy.viewport(1280, 720);
  cy.get(selector).should('be.visible');
  
  // Tablet
  cy.viewport(768, 1024);
  cy.get(selector).should('be.visible');
  
  // Mobile
  cy.viewport(375, 667);
  cy.get(selector).should('be.visible');
});