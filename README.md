# Cypress/Gherkin 30-Minute Challenge

Welcome to the Cypress/Gherkin coding challenge! This is a focused 30-minute assessment of your BDD and test automation skills.

## Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Run tests: `npm test` (1 test passes, 1 needs implementation)
4. Open interactive mode: `npm run cy:open` (recommended for development)

## Your 30-Minute Challenge

**Goal**: Complete the main scenario step definitions to make the failing test pass.

### 🔧 What You Need to Implement (Main Challenge):
Complete these step definitions in `cypress/support/step_definitions/steps.js`:

1. **Login Implementation**: `Given("I am logged in as an administrator")`
   - Visit the login page
   - Enter admin credentials (provided by interviewer)
   - Submit the form
   - Verify successful login
   - Click the manage button (gear icon) to access site settings
   - Navigate to `/Manage/site_settings`

2. **Click edit link**: `When("I click the edit link for site title")`
3. **Verify edit mode**: `Then("the setting should become editable")`  
4. **Change title**: `When("I change the title to {string}")`
5. **Save changes**: `When("I save the changes")`
6. **Verify update**: `Then("the title should be updated to {string}")`
7. **Verify view mode**: `Then("the setting should return to view mode")`

### 🌟 Bonus (If Time Permits):
Implement the site description editing scenario.

## Test Target

**URL**: `https://bughunt.jglenn.dozuki.dev/Manage/site_settings`

**Login Page Elements**:
- `input[name="username"]` - Username input field
- `input[name="password"]` - Password input field
- `button[type="submit"]` - Login submit button

**Manage Button**:
- SVG icon with class `fa-gear` and `chakra-icon`
- Located in the header/navigation area
- Click this to access site settings

**Key Elements**:
- `#site-title` - The site title setting row
- `.editLink` - Edit button within each setting
- `input[name="site-title"]` - Title input field
- `.save` - Save button
- `.viewing .value` - Display value in view mode

## Essential DOM Pattern

The settings follow this structure:
```
<tr id="site-title" class="setting inactive">
  <td class="display">
    <div class="viewing">
      <div class="value">Current Title</div>
    </div>
    <div class="editing">
      <input name="site-title" value="Current Title">
      <button class="save">Save</button>
    </div>
  </td>
  <td class="actions">
    <a class="editLink">Edit</a>
  </td>
</tr>
```

**Key States**:
- `class="setting inactive"` = View mode
- `class="setting active"` = Edit mode

## Implementation Hints

**1. Click Edit Link:**
```
cy.get('#site-title .editLink').click();
```

**2. Verify Edit Mode:**
```
cy.get('#site-title').should('have.class', 'active');
cy.get('#site-title .editing').should('be.visible');
```

**3. Change Title:**
```
cy.get('#site-title input[name="site-title"]')
  .clear()
  .type('New Title');
```

**4. Save Changes:**
```
cy.get('#site-title .save').click();
```

**5. Verify Update:**
```
cy.get('#site-title .viewing .value')
  .should('contain', 'New Title');
```

**6. Verify View Mode:**
```
cy.get('#site-title').should('not.have.class', 'active');
cy.get('#site-title .viewing').should('be.visible');
```

## Development Workflow

1. **Start interactive mode**: `npm run cy:open`
2. **Run the failing test** to see what needs to be implemented
3. **Open the step definitions file**: `cypress/support/step_definitions/steps.js`
4. **Replace the TODO logs** with actual Cypress commands
5. **Use the browser dev tools** to inspect elements if needed
6. **Test incrementally** - implement one step at a time

## Success Criteria

- ✅ All tests pass when running `npm test`
- ✅ The site title can be edited and saved successfully
- ✅ Form transitions properly between view and edit modes
- ✅ Code is clean and uses appropriate Cypress commands

## Time Management

- **5 minutes**: Setup and exploration
- **20 minutes**: Core implementation
- **5 minutes**: Testing and refinement

## Available Scripts

- `npm test` - Run tests in headless mode
- `npm run cy:open` - Open Cypress interactive mode (recommended)
- `npm run test:chrome` - Run tests in Chrome

## Tips for Success

1. **Use the interactive mode** - It's much faster for development
2. **Start simple** - Get one step working, then move to the next
3. **Use browser dev tools** - Inspect elements to understand the DOM
4. **Read the hints** - They contain the exact selectors you need
5. **Test incrementally** - Don't implement everything at once

## Common Pitfalls

- **Wrong selectors** - Use the exact IDs and classes shown in hints
- **Timing issues** - Cypress handles waiting automatically, don't add manual waits
- **Missing assertions** - Always verify the state changes you expect

## Evaluation Criteria

- **Functionality** (70%): Do the tests pass and work correctly?
- **Code Quality** (20%): Clean, readable Cypress commands?
- **Understanding** (10%): Proper use of selectors and assertions?

Good luck! This challenge tests your ability to quickly understand a form workflow and implement reliable automation. 🚀

---

**Remember**: Focus on getting the main scenario working first. The bonus is truly optional for extra credit.