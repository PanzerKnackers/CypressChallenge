Feature: Cypress Kitchen Sink Testing
  As a QA engineer
  I want to test the Cypress example application
  So that I can demonstrate my automation skills

  Background:
    Given I am on the Cypress Kitchen Sink application

  @smoke
  Scenario: Verify page title and main navigation
    When I visit the main page
    Then I should see the page title contains "Kitchen Sink"
    And I should see the main navigation sidebar

  @regression
  Scenario: Navigate to Actions section and interact with elements
    Given I navigate to the "Actions" section
    When I interact with action elements
    Then the interactions should work correctly

  @regression
  Scenario Outline: Test navigation to different sections
    Given I am on the main page
    When I navigate to the "<section>" section
    Then I should be on the "<section>" page
    And the page should load correctly

    Examples:
      | section    |
      | Querying   |
      | Actions    |
      | Assertions |

  @challenge
  Scenario: Complete form interactions (TODO for candidates)
    Given I navigate to the "Actions" section
    When I fill out various form elements
    Then all form inputs should accept my data
    And I should be able to interact with buttons and links