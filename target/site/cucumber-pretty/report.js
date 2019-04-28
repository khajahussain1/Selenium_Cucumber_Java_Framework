$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Spicejet registration",
  "description": "As an employee of the company\nI want to register to application with my credentails\nIn order to use the application features.",
  "id": "spicejet-registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16924930356,
  "status": "passed"
});
formatter.before({
  "duration": 74383,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#Rule: There can be only One"
    },
    {
      "line": 7,
      "value": "#Background: User navigates to the browser"
    },
    {
      "line": 8,
      "value": "#Given Launch the spicejet application"
    },
    {
      "line": 9,
      "value": "#Then pass the URL to the browser \"https://www.spicejet.com/\""
    },
    {
      "line": 10,
      "value": "#Then I should see home page"
    }
  ],
  "line": 12,
  "name": "User land on Spicejet Homepage",
  "description": "",
  "id": "spicejet-registration;user-land-on-spicejet-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity,"
    },
    {
      "line": 11,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "move to mouse on Login/SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "move to the mouse SpiceCash/SpiceClub Member button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "move to the mouse Signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click on Signup button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user land on registration page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enter firstname as \"khaja\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "enter lastname as \"hussain\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "enter mobile number as \"7358681940\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "enter password as \"Welcome@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "enter confirm password as \"Welcome@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "select day as \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "select month as \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "select year as \"2000\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "email address as \"test@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "check on checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.launch_the_spicejet_application()"
});
formatter.result({
  "duration": 48481480,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_mouse_on_Login_SignUp_button()"
});
formatter.result({
  "duration": 230630629,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_SpiceCash_SpiceClub_Member_button()"
});
formatter.result({
  "duration": 442234543,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_Signup_button()"
});
formatter.result({
  "duration": 1069168044,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.click_on_Signup_button()"
});
formatter.result({
  "duration": 5912467896,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.user_land_on_registration_page()"
});
formatter.result({
  "duration": 91753,
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
  "duration": 609451850,
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
  "duration": 188699057,
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
  "duration": 276558147,
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
  "duration": 219328101,
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
  "duration": 629493882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    }
  ],
  "location": "RegistrationSteps.select_day_as(String)"
});
formatter.result({
  "duration": 416602037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "RegistrationSteps.select_month_as(String)"
});
formatter.result({
  "duration": 219638474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 16
    }
  ],
  "location": "RegistrationSteps.select_year_as(String)"
});
formatter.result({
  "duration": 200974236,
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
  "duration": 267645711,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.check_on_checkbox()"
});
formatter.result({
  "duration": 104379418,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 3281302083,
  "status": "passed"
});
formatter.after({
  "duration": 79670,
  "status": "passed"
});
formatter.after({
  "duration": 80802,
  "status": "passed"
});
formatter.after({
  "duration": 3468208005,
  "status": "passed"
});
formatter.after({
  "duration": 83823,
  "status": "passed"
});
});