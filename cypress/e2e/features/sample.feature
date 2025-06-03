Feature: Dozuki Site Management Testing
  As a site administrator
  I want to manage basic site settings
  So that I can configure my Dozuki site

  Background:
    Given I am logged in as an administrator
    And I am on the site management page

  @smoke
  Scenario: Verify page elements are present
    When I visit the site management page
    Then I should see the site title "bughunt"
    And I should see the management sidebar
    And I should see the settings table

  @main-challenge
  Scenario: Edit site title setting
    Given I am viewing the site title setting
    When I click the edit link for site title
    Then the setting should become editable
    When I change the title to "Test Site"
    And I save the changes
    Then the title should be updated to "Test Site"
    And the setting should return to view mode

  @bonus
  Scenario: Edit site description
    Given I am viewing the site description setting  
    When I edit the site description to "A test description"
    And I save the changes
    Then the description should be updated
    And the form should return to view mode