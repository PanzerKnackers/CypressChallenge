# Cypress/Gherkin Coding Challenge

Welcome to the Cypress/Gherkin coding challenge! This repository contains a starter template for demonstrating your BDD and test automation skills using the Cypress Kitchen Sink example application.

## Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Run tests: `npm test` (some tests will pass, others are TODOs for you to complete)
4. Open interactive mode: `npm run cy:open` (recommended for development)

## Your Challenge

**Goal**: Complete the TODO items in the step definitions and create comprehensive, reliable tests.

### What's Already Working:
✅ Basic navigation and page verification  
✅ Section navigation (Querying, Actions, Assertions)  
✅ Page title validation  

### What You Need to Implement:
🔧 **Form Interactions** (in Actions section):
- Text input fields
- Checkboxes and radio buttons  
- Select dropdowns
- Button clicks and responses

🔧 **Validation Logic**:
- Verify form inputs accept data correctly
- Test button and link interactions
- Implement proper assertions

🔧 **Additional Scenarios** (Bonus):
- Create new test scenarios
- Add edge case testing
- Implement custom commands

## Test Target: Cypress Kitchen Sink

You'll be testing: `https://example.cypress.io`

This is Cypress's official example application with various UI elements perfect for automation practice.

### Key Areas to Explore:
- **Actions section**: Forms, buttons, checkboxes, etc.
- **Querying section**: Element selection examples
- **Assertions section**: Validation examples

## Project Structure

```
├── cypress/
│   ├── e2e/features/          # Gherkin feature files
│   │   └── sample.feature     # Main test scenarios (some TODO)
│   ├── support/
│   │   ├── step_definitions/  # Step definition files
│   │   │   └── steps.js       # Your implementation goes here
│   │   ├── commands.js        # Custom Cypress commands
│   │   └── e2e.js            # Support configuration
│   └── fixtures/              # Test data
├── .github/workflows/         # CI/CD pipeline (already configured)
├── cypress.config.js          # Cypress configuration
└── package.json
```

## Available Scripts

- `npm test` - Run tests in headless mode
- `npm run cy:open` - Open Cypress interactive mode (recommended)
- `npm run test:chrome` - Run tests in Chrome
- `npm run test:firefox` - Run tests in Firefox
- `npm run test:edge` - Run tests in Edge

## Development Workflow

1. **Start with interactive mode**: `npm run cy:open`
2. **Examine the Kitchen Sink app** manually to understand the UI
3. **Look at the feature file** to understand what needs testing
4. **Implement step definitions** one by one
5. **Use the Test Runner** to see your tests in action
6. **Add custom commands** for reusable actions

## Tips for Success

### 🎯 **Focus Areas**:
1. **Implement the TODO step definitions** - Start here!
2. **Use proper selectors** - Prefer data-cy, then CSS selectors
3. **Add meaningful assertions** - Don't just click, verify outcomes
4. **Handle async behavior** - Use Cypress's built-in waiting
5. **Create reusable commands** - For repeated actions

### 🔍 **What We're Looking For**:
- **Clean, readable code** with good organization
- **Proper use of Cypress API** and best practices
- **Effective use of Gherkin** for readable scenarios
- **Robust selectors** that won't break easily
- **Good error handling** and meaningful assertions
- **Understanding of async testing** patterns

### 💡 **Bonus Points**:
- Custom Cypress commands for reusable actions
- Additional test scenarios beyond the TODOs
- Page Object Model pattern implementation
- Cross-browser testing considerations
- Performance and accessibility testing

## Example Implementation Hints

Look for elements like these in the Actions section:
```javascript
// Text inputs
cy.get('[data-cy="action-email"]').type('test@example.com');

// Buttons
cy.get('[data-cy="action-btn"]').click();

// Checkboxes
cy.get('[data-cy="action-checkboxes"]').check();

// Assertions
cy.get('[data-cy="action-email"]').should('have.value', 'test@example.com');
```

## Evaluation Criteria

### Technical Skills (60%):
- Completeness of TODO implementations
- Code quality and organization  
- Proper use of Cypress and Gherkin
- Effective selectors and assertions

### Testing Approach (40%):
- Test coverage and edge cases
- Understanding of BDD principles
- Documentation and code comments
- Creative problem-solving

## Submission Guidelines

1. **Ensure all tests pass**: Run `npm test` successfully
2. **Test in interactive mode**: Verify with `npm run cy:open`
3. **Update this README**: Add notes about your approach
4. **Commit with clear messages**: Document your changes
5. **Make repository accessible**: Public repo or provide access

## Questions or Issues?

If you encounter any setup issues:
1. Check Node.js version (v16+ required)
2. Try deleting `node_modules` and running `npm install` again
3. Verify Cypress opens with `npm run cy:open`

## Time Expectations

- **Minimum viable solution**: 2-3 hours
- **Complete implementation**: 4-6 hours  
- **Bonus features**: Additional 2-4 hours

Good luck! We're excited to see your automation and BDD skills in action! 🚀

---

**Remember**: Focus on quality over quantity. A few well-implemented, robust tests are better than many fragile ones.