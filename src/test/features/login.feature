@smoke
Feature: Login to Saucedemo

    Background: visit the page
      Given I visit "https://www.saucedemo.com"
      Then I check that url includes the correct endpoint "https://www.saucedemo.com"
      And The "login_logo" contains the text "Swag Labs"
      And The "login-container" is displayed

@dev     
@regression

#  Positive scenario
    Scenario: User can successfully log in with correct credentials
 
        Given I enter the username "standard_user"
        And I enter the password "secret_sauce"
        When I click on the "login-button"

    
# # negative scenario  
#     Scenario: User unsuccessfully log in with incorrect username and correct password
#         Given I enter the incorrect username "hello_user"
#         And I enter the correct password "secret_sauce"
#         When I click on the "login-button"
#         Then I can see an error message "Epic sadface: Username and password do not match any user in this service"

#     Scenario: User unsuccessfully log in with correct username and empty password
#         Given I enter the incorrect username "hello_user"
#         And I enter the correct password "secret_sauce"
#         When I click on the "login-button"
#         Then I can see an error message "Epic sadface: Username is required"

#     Scenario: User unsuccessfully log in with logged out user
#         Given I enter the incorrect username "locked_out_user"
#         And I enter the correct password "secret_sauce"
#         When I click on the "login-button"
#         Then I can see an error message "Epic sadface: Sorry, this user has been locked out."
