Feature: Login to Saucedemo

    Background: visit the page
      Given I visit "https://saucedemo.com"

    Scenario: User can successfully log in 
        Given The "login-container" is visible
        Then I click on the "login-button"
    
     
        