Feature: New Computer Page

  I want to add a new computer
  
  Background: I am on home page
    Given I am on add a new computer page

  @focus 
  Scenario: Verify Add new computer page elements
    Then I should see 'Add a computer' heading
    And I should see Computer name text box
    And I should see Introduced date text box 
    And I should see Discontinued date text box 
    And I should see Company dropdown box
    And I should see Create this computer button
    And I should see Cancel button
    When I enter space in Introduced text box 
    And I press Create this computer without entering any value
    Then I should see error messages for computer name and Introduced

@integration @focus 
  Scenario: Add a new computer
    When I add a new Computer name in text box
    And I press create this computer button
    Then I should redirect to computers page
    And I should see Computer has been created messages