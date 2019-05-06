@tag
Feature: Login with Valid Credentials

  Scenario: Successful Login with Valid Credentials
    Given User is on Home Page
    When User Navigate to LogIn Page
    And User enters Credentials to LogIn
      | Username   | Password     |
      | 9290543618 | Test@153     |
      | 7358681940 | khaja@123    |
      | 9034287569 | hussain@1234 |
    Then Message displayed Login Successfully
