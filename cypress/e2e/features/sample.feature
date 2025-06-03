Feature: Sample Web Application Testing
  As a QA engineer
  I want to test a web application
  So that I can ensure it works correctly

  Background:
    Given I am on the Cypress example page

  @smoke
  Scenario: Verify page title and navigation
    When I visit the main page
    Then I should see the page title contains "Kitchen Sink"
    And I should see the navigation menu

  @regression
  Scenario: Interact with form elements
    Given I navigate to the "Forms" section
    When I fill out a sample form
    Then the form should accept my input
    And I should be able to submit the form

  @regression
  Scenario Outline: Test different button interactions
    Given I navigate to the "Elements" section
    When I click on the "<button_type>" button
    Then I should see the appropriate "<response>"

    Examples:
      | button_type | response |
      | primary     | success message |
      | secondary   | info message |

  @edge-case
  Scenario: Handle error scenarios
    Given I navigate to the "Network Requests" section
    When I trigger a network error
    Then I should see an appropriate error message
    And the application should handle the error gracefully