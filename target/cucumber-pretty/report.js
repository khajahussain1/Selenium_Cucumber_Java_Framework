$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login with Valid Credentials",
  "description": "",
  "id": "login-with-valid-credentials",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 35783723085,
  "status": "passed"
});
formatter.before({
  "duration": 102702,
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
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "move to mouse on Login/SignUp button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "move to the mouse SpiceCash/SpiceClub Member button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10
    },
    {
      "cells": [
        "9290543618",
        "Test@153"
      ],
      "line": 11
    },
    {
      "cells": [
        "7358681940",
        "khaja@123"
      ],
      "line": 12
    },
    {
      "cells": [
        "9034287569",
        "hussain@1234"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.launch_the_spicejet_application()"
});
formatter.result({
  "duration": 3955917,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_mouse_on_Login_SignUp_button()"
});
formatter.result({
  "duration": 125435068,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.move_to_the_mouse_SpiceCash_SpiceClub_Member_button()"
});
formatter.result({
  "duration": 693154607,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 10871600166,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 33829561802,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 90997,
  "status": "passed"
});
formatter.after({
  "duration": 72118,
  "status": "passed"
});
formatter.after({
  "duration": 53616,
  "status": "passed"
});
formatter.after({
  "duration": 3053569311,
  "status": "passed"
});
formatter.after({
  "duration": 61545,
  "status": "passed"
});
});