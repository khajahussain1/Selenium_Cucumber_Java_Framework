Feature: Spicejet registration
  As an employee of the company
  I want to register to application with my credentails
  In order to use the application features.

  #Rule: There can be only One
  #Background: User navigates to the browser
  #Given Launch the spicejet application
  #Then pass the URL to the browser "https://www.spicejet.com/"
  #Then I should see home page
  @sanity, @Registration
  Scenario: User land on Spicejet Homepage
    Given User is on home page
    Then move to mouse on Login/SignUp button
    Then move to the mouse SpiceCash/SpiceClub Member button
    Then move to the mouse Signup button
    Then click on Signup button
    When user land on registration page
    Then enter firstname as "khaja"
    Then enter lastname as "hussain"
    Then enter mobile number as "9290543618"
    Then enter password as "Welcome@123"
    Then enter confirm password as "Welcome@123"
    Then select date of birth   
    Then email address as "test@gmail.com"
    Then check on checkbox
    Then click on submit button

  
    