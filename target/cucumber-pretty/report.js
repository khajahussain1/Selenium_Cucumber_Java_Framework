$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Registration.feature");
formatter.feature({
  "line": 2,
  "name": "Spicejet registration",
  "description": "As an employee of the company\nI want to register to application with my credentails\nIn order to use the application formatter.before({
  "duration": 70514016758,
  "status": "passed"
});
formatter.before({
  "duration": 73628,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Book your ticket",
  "description": "",
  "id": "book-your-ticket;book-your-ticket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Tap on drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Select from dropdown value",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select to drop down value",
  "keyword": "And "
});
formatter.match({
  "location": "BookTicketSteps.tap_on_drop_down()"
});
formatter.result({
  "duration": 1290725435,
  "status": "passed"
});
formatter.match({
  "location": "BookTicketSteps.select_from_dropdown_value()"
});
formatter.result({
  "duration": 2415822616,
  "status": "passed"
});
formatter.match({
  "location": "BookTicketSteps.select_to_drop_down_value()"
});
formatter.result({
  "duration": 940737122,
  "status": "passed"
});
formatter.after({
  "duration": 113275,
  "status": "passed"
});
formatter.after({
  "duration": 171422,
  "status": "passed"
});
formatter.after({
  "duration": 81180,
  "status": "passed"
});
formatter.after({
  "duration": 82313,
  "status": "passed"
});
});935700943,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 20091287050,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 39614455621,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 83068,
  "status": "passed"
});
formatter.after({
  "duration": 67587,
  "status": "passed"
});
formatter.after({
  "duration": 39269,
  "status": "passed"
});
formatter.after({
  "duration": 61923,
  "status": "passed"
});
formatter.after({
  "duration": 29074,
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
  "duration": 48659800101,
  "status": "passed"
});
formatter.before({
  "duration": 81180,
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
  "duration": 814696366,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_mouse_on_Login_SignUp_button()"
});
formatter.result({
  "duration": 709775992,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_SpiceCash_SpiceClub_Member_button()"
});
formatter.result({
  "duration": 746105344,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_Signup_button()"
});
formatter.result({
  "duration": 981228928,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.click_on_Signup_button()"
});
formatter.result({
  "duration": 25440716544,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.user_land_on_registration_page()"
});
formatter.result({
  "duration": 92885,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_title()"
});
formatter.result({
  "duration": 3380442503,
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
  "duration": 1344285327,
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
  "duration": 581594730,
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
  "duration": 312021015,
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
  "duration": 273477527,
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
  "duration": 282124514,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_date_of_birth()"
});
formatter.result({
  "duration": 2487923255,
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
  "duration": 338835698,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.check_on_checkbox()"
});
formatter.result({
  "duration": 133073960,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 4162190379,
  "status": "passed"
});
formatter.after({
  "duration": 75139,
  "status": "passed"
});
formatter.after({
  "duration": 49463,
  "status": "passed"
});
formatter.after({
  "duration": 69475,
  "status": "passed"
});
formatter.after({
  "duration": 34360,
  "status": "passed"
});
formatter.before({
  "duration": 23497372979,
  "status": "passed"
});
formatter.before({
  "duration": 105723,
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
  "duration": 1299257,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_mouse_on_Login_SignUp_button()"
});
formatter.result({
  "duration": 164082060,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_SpiceCash_SpiceClub_Member_button()"
});
formatter.result({
  "duration": 703292923,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_Signup_button()"
});
formatter.result({
  "duration": 736790794,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.click_on_Signup_button()"
});
formatter.result({
  "duration": 9629581523,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.user_land_on_registration_page()"
});
formatter.result({
  "duration": 103835,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_title()"
});
formatter.result({
  "duration": 228509494,
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
  "duration": 233098994,
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
  "duration": 162586084,
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
  "duration": 322503801,
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
  "duration": 214354353,
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
  "duration": 190316024,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_date_of_birth()"
});
formatter.result({
  "duration": 1177624765,
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
  "duration": 357457625,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.check_on_checkbox()"
});
formatter.result({
  "duration": 168945307,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 4687664838,
  "status": "passed"
});
formatter.after({
  "duration": 81558,
  "status": "passed"
});
formatter.after({
  "duration": 46442,
  "status": "passed"
});
formatter.after({
  "duration": 60413,
  "status": "passed"
});
formatter.after({
  "duration": 34737,
  "status": "passed"
});
});