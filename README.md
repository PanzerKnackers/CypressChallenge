# Cypress/Gherkin Coding Challenge

Welcome to the Cypress/Gherkin coding challenge! This repository contains a starter template for demonstrating your BDD and test automation skills.

## Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Open interactive mode: `npm run cy:open`

## Your Task

Complete the TODO items in the step definitions and create comprehensive tests for the sample scenarios. Focus on:

- Writing clean, readable step definitions
- Using Cypress best practices
- Implementing proper assertions
- Creating reusable custom commands
- Following BDD principles

## Project Structure

```
├── cypress/
│   ├── e2e/features/          # Gherkin feature files
│   ├── support/
│   │   ├── step_definitions/  # Step definition files
│   │   ├── commands.js        # Custom Cypress commands
│   │   └── e2e.js            # Support configuration
│   └── fixtures/              # Test data
├── .github/workflows/         # CI/CD pipeline
├── cypress.config.js          # Cypress configuration
└── package.json
```

## Available Scripts

- `npm test` - Run tests in headless mode
- `npm run cy:open` - Open Cypress interactive mode
- `npm run test:chrome` - Run tests in Chrome
- `npm run test:firefox` - Run tests in Firefox
- `npm run test:edge` - Run tests in Edge

## Tips for Success

1. **Start with the feature file** - Understand what needs to be tested
2. **Implement step definitions gradually** - One scenario at a time
3. **Use custom commands** - For reusable actions
4. **Add proper assertions** - Verify expected outcomes
5. **Handle edge cases** - Consider error scenarios
6. **Keep it maintainable** - Write clean, readable code

## Evaluation Criteria

- Completeness of implementation
- Code quality and organization
- Proper use of Cypress and Gherkin
- Test coverage and reliability
- Documentation and comments

Good luck! 🚀