Feature: Computer Database Home Page

  I want to open a search and view computer details
  
  Background: I am on home page
    Given I am on computer database homepage

  @focus 
  Scenario: Verify computers home page elements
    Then I should see 'Computers database' in the title
    And I should see Add a New Computer button
    And I should see search text box and search button
    And I should see Previous link is disable 
    And I should see Next link is enable
    And I should see table showing headings 'Computer name','Introduced','Discontinued','Company'

  @focus
  Scenario: Verify computers number 
    And I should see computers count in heading
    And I should see computers count in page navigation
    Then I should see both count matches
    