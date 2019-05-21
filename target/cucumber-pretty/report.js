$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Registration.feature");
formatter.feature({
  "line": 2,
  "name": "Spicejet registration",
  "description": "As an employee of the company\nI want to register to application with my credentails\nIn order to use the application features.",
  "id": "spicejet-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#Rule: There can be only One"
    },
    {
      "line": 8,
      "value": "#Background: User navigates to the browser"
    },
    {
      "line": 9,
      "value": "#Given Launch the spicejet application"
    },
    {
      "line": 10,
      "value": "#Then pass the URL to the browser \"https://www.spicejet.com/\""
    },
    {
      "line": 11,
      "value": "#Then I should see home page"
    },
    {
      "line": 12,
      "value": "#@sanity, @Registration"
    },
    {
      "line": 13,
      "value": "#Scenario: User land on Spicejet Homepage"
    },
    {
      "line": 14,
      "value": "#Given User is on home page"
    },
    {
      "line": 15,
      "value": "#Then move to mouse on Login/SignUp button"
    },
    {
      "line": 16,
      "value": "#Then move to the mouse SpiceCash/SpiceClub Member button"
    },
    {
      "line": 17,
      "value": "#Then move to the mouse Signup button"
    },
    {
      "line": 18,
      "value": "#Then click on Signup button"
    },
    {
      "line": 19,
      "value": "#When user land on registration page"
    },
    {
      "line": 20,
      "value": "#Then enter firstname as \"khaja\""
    },
    {
      "line": 21,
      "value": "#Then enter lastname as \"hussain\""
    },
    {
      "line": 22,
      "value": "#Then enter mobile number as \"9290543618\""
    },
    {
      "line": 23,
      "value": "#Then enter password as \"Welcome@123\""
    },
    {
      "line": 24,
      "value": "#Then enter confirm password as \"Welcome@123\""
    },
    {
      "line": 25,
      "value": "#Then select date of birth"
    },
    {
      "line": 26,
      "value": "#Then email address as \"test@gmail.com\""
    },
    {
      "line": 27,
      "value": "#Then check on checkbox"
    },
    {
      "line": 28,
      "value": "#Then click on submit button"
    }
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
  "duration": 31385162790,
  "status": "passed"
});
formatter.before({
  "duration": 109121,
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
  "duration": 552513257,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_mouse_on_Login_SignUp_button()"
});
formatter.result({
  "duration": 277193031,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_SpiceCash_SpiceClub_Member_button()"
});
formatter.result({
  "duration": 652931390,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_Signup_button()"
});
formatter.result({
  "duration": 765459690,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.click_on_Signup_button()"
});
formatter.result({
  "duration": 8536603112,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.user_land_on_registration_page()"
});
formatter.result({
  "duration": 121204,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_title()"
});
formatter.result({
  "duration": 223785661,
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
  "duration": 273636591,
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
  "duration": 129279318,
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
  "duration": 171670375,
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
  "duration": 150394044,
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
  "duration": 113867581,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_date_of_birth()"
});
formatter.result({
  "duration": 724368269,
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
  "duration": 321043439,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.check_on_checkbox()"
});
formatter.result({
  "duration": 71724595,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 5919372792,
  "status": "passed"
});
formatter.after({
  "duration": 134419,
  "status": "passed"
});
formatter.after({
  "duration": 76649,
  "status": "passed"
});
formatter.after({
  "duration": 74383,
  "status": "passed"
});
formatter.after({
  "duration": 53616,
  "status": "passed"
});
formatter.before({
  "duration": 22979951563,
  "status": "passed"
});
formatter.before({
  "duration": 72873,
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
  "duration": 445924,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_mouse_on_Login_SignUp_button()"
});
formatter.result({
  "duration": 89851142,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_SpiceCash_SpiceClub_Member_button()"
});
formatter.result({
  "duration": 660638959,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_Signup_button()"
});
formatter.result({
  "duration": 724500800,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.click_on_Signup_button()"
});
formatter.result({
  "duration": 7206693686,
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
  "duration": 185244045,
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
  "duration": 195707580,
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
  "duration": 107529123,
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
  "duration": 207730902,
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
  "duration": 278627462,
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
  "duration": 110152181,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.select_date_of_birth()"
});
formatter.result({
  "duration": 450012385,
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
  "duration": 283953246,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.check_on_checkbox()"
});
formatter.result({
  "duration": 80704235,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 4533435960,
  "status": "passed"
});
formatter.after({
  "duration": 50595,
  "status": "passed"
});
formatter.after({
  "duration": 88354,
  "status": "passed"
});
formatter.after({
  "duration": 64188,
  "status": "passed"
});
formatter.after({
  "duration": 38891,
  "status": "passed"
});
});