$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Registration.feature");
formatter.feature({
  "line": 2,
  "name": "Spicejet registration",
  "description": "As an employee of the company\nI want to register to application with my credentails\nIn order to use the application formatter.before({
formatter.before({
  "duration": 39543289117,
  "status": "passed"
});
formatter.before({
  "duration": 70985,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-with-valid-credentials;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Credentials to LogIn",
  "rowformatter.result({
  "duration": 3443533299,
  "status": "passed"
});
formatter.match({
  "location": "BookTicketSteps.select_from_dropdown_value()"
});
formatter.result({
  "duration": 1535176030,
  "status": "passed"
});
formatter.match({
  "location": "BookTicketSteps.select_to_drop_down_value()"
});
formatter.result({
  "duration": 2341895617,
  "status": "passed"
});
formatter.after({
  "duration": 95150,
  "status": "passed"
});
formatter.after({
  "duration": 190678,
  "status": "passed"
});
formatter.after({
  "duration": 67965,
  "status": "passed"
});
formatter.after({
  "duration": 82690,
  "status": "passed"
});
});58336370,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 10802688529,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 39376549263,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 123469,
  "status": "passed"
});
formatter.after({
  "duration": 66454,
  "status": "passed"
});
formatter.after({
  "duration": 48708,
  "status": "passed"
});
formatter.after({
  "duration": 32094,
  "status": "passed"
});
formatter.after({
  "duration": 53994,
  "status": "passed"
});
});   }
  ],
  "line": 30,
  "name": "User land on Spicejet Homepage",
  "description": "",
  "id": "spicejet-registration;user-land-on-spicejet-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "move to mouse on Login/SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "move to the mouse SpiceCash/SpiceClub Member button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "move to the mouse Signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "click on Signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user land on registration page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "select title",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "enter firstname as \"\u003cfirstname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "enter lastname as \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "enter mobile number as \"\u003cphnumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enter password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "enter confirm password as \"\u003ccpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "select date of birth",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "email address as \"\u003caddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "check on checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "spicejet-registration;user-land-on-spicejet-homepage;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "phnumber",
        "password",
        "cpassword",
        "address"
      ],
      "line": 49,
      "id": "spicejet-registration;user-land-on-spicejet-homepage;;1"
    },
    {
      "cells": [
        "khaja",
        "hussain",
        "9290543618",
        "Welcome@123",
        "Welcome@123",
        "test@gmail.com"
      ],
      "line": 50,
      "id": "spicejet-registration;user-land-on-spicejet-homepage;;2"
    },
    {
      "cells": [
        "poola",
        "vali",
        "7358681940",
        "Welcome@123",
        "Welcome@123",
        "test1@gmail.com"
      ],
      "line": 51,
      "id": "spicejet-registration;user-land-on-spicejet-homepage;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37052703161,
  "status": "passed"
});
formatter.before({
  "duration": 95151,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "User land on Spicejet Homepage",
  "description": "",
  "id": "spicejet-registration;user-land-on-spicejet-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "move to mouse on Login/SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "move to the mouse SpiceCash/SpiceClub Member button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "move to the mouse Signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "click on Signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user land on registration page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "select title",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "enter firstname as \"khaja\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "enter lastname as \"hussain\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "enter mobile number as \"9290543618\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enter password as \"Welcome@123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "enter confirm password as \"Welcome@123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "select date of birth",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "email address as \"test@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "check on checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.launch_the_spicejet_application()"
});
formatter.result({
  "duration": 569395458,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_mouse_on_Login_SignUp_button()"
});
formatter.result({
  "duration": 2404906365,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_SpiceCash_SpiceClub_Member_button()"
});
formatter.result({
  "duration": 915763524,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_Signup_button()"
});
formatter.result({
  "duration": 981536280,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.click_on_Signup_button()"
});
formatter.result({
  "duration": 26809261840,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.user_land_on_registration_page()"
});
formatter.result({
  "duration": 89109,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_title()"
});
formatter.result({
  "duration": 556983609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "khaja",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.enter_firstname_as(String)"
});
formatter.result({
  "duration": 392822257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hussain",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.enter_lastname_as(String)"
});
formatter.result({
  "duration": 260701312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9290543618",
      "offset": 24
    }
  ],
  "location": "RegistrationSteps.enter_mobile_number_as(String)"
});
formatter.result({
  "duration": 511707849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome@123",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.enter_password_as(String)"
});
formatter.result({
  "duration": 965236100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome@123",
      "offset": 27
    }
  ],
  "location": "RegistrationSteps.enter_confirm_password_as(String)"
});
formatter.result({
  "duration": 346732808,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_date_of_birth()"
});
formatter.result({
  "duration": 893244582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 18
    }
  ],
  "location": "RegistrationSteps.email_address_as(String)"
});
formatter.result({
  "duration": 322967849,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.check_on_checkbox()"
});
formatter.result({
  "duration": 122658760,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 5525501645,
  "status": "passed"
});
formatter.after({
  "duration": 68342,
  "status": "passed"
});
formatter.after({
  "duration": 49840,
  "status": "passed"
});
formatter.after({
  "duration": 23032,
  "status": "passed"
});
formatter.after({
  "duration": 106100,
  "status": "passed"
});
formatter.before({
  "duration": 20653511864,
  "status": "passed"
});
formatter.before({
  "duration": 100059,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "User land on Spicejet Homepage",
  "description": "",
  "id": "spicejet-registration;user-land-on-spicejet-homepage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "move to mouse on Login/SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "move to the mouse SpiceCash/SpiceClub Member button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "move to the mouse Signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "click on Signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user land on registration page",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "select title",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "enter firstname as \"poola\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "enter lastname as \"vali\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "enter mobile number as \"7358681940\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enter password as \"Welcome@123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "enter confirm password as \"Welcome@123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "select date of birth",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "email address as \"test1@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "check on checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.launch_the_spicejet_application()"
});
formatter.result({
  "duration": 561086,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_mouse_on_Login_SignUp_button()"
});
formatter.result({
  "duration": 182304129,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_SpiceCash_SpiceClub_Member_button()"
});
formatter.result({
  "duration": 978763701,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_Signup_button()"
});
formatter.result({
  "duration": 777100229,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.click_on_Signup_button()"
});
formatter.result({
  "duration": 12696121901,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.user_land_on_registration_page()"
});
formatter.result({
  "duration": 80803,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_title()"
});
formatter.result({
  "duration": 301677933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poola",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.enter_firstname_as(String)"
});
formatter.result({
  "duration": 242888541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vali",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.enter_lastname_as(String)"
});
formatter.result({
  "duration": 167976055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7358681940",
      "offset": 24
    }
  ],
  "location": "RegistrationSteps.enter_mobile_number_as(String)"
});
formatter.result({
  "duration": 202698800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome@123",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.enter_password_as(String)"
});
formatter.result({
  "duration": 291721495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome@123",
      "offset": 27
    }
  ],
  "location": "RegistrationSteps.enter_confirm_password_as(String)"
});
formatter.result({
  "duration": 561342785,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_date_of_birth()"
});
formatter.result({
  "duration": 964494908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1@gmail.com",
      "offset": 18
    }
  ],
  "location": "RegistrationSteps.email_address_as(String)"
});
formatter.result({
  "duration": 401725244,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.check_on_checkbox()"
});
formatter.result({
  "duration": 146535107,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 4841122896,
  "status": "passed"
});
formatter.after({
  "duration": 81557,
  "status": "passed"
});
formatter.after({
  "duration": 49463,
  "status": "passed"
});
formatter.after({
  "duration": 46820,
  "status": "passed"
});
formatter.after({
  "duration": 153298,
  "status": "passed"
});
});