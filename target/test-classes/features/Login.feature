@tag
Feature: Login with Valid Credentials

@sanity
  Scenario: Successful Login with Valid Credentials
    Given User is on home page
    Then move to mouse on Login/SignUp button
    Then move to the mouse SpiceCash/SpiceClub Member button
    When User Navigate to LogIn Page
    And User enters Credentials to LogIn
      | Username   | Password     |
      | 9290543618 | Test@153     |
      | 7358681940 | khaja@123    |
      | 9034287569 | hussain@1234 |
    Then Message displayed Login Successfully
