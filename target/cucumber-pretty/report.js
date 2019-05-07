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
  "duration": 59124851516,
  "status": "passed"
});
formatter.before({
  "duration": 84200,
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
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "9290543618",
        "Test@153"
      ],
      "line": 9
    },
    {
      "cells": [
        "7358681940",
        "khaja@123"
      ],
      "line": 10
    },
    {
      "cells": [
        "9034287569",
        "hussain@1234"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 1236677599,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 15661540367,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 36748677520,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 123847,
  "status": "passed"
});
formatter.after({
  "duration": 121959,
  "status": "passed"
});
formatter.after({
  "duration": 132154,
  "status": "passed"
});
formatter.after({
  "duration": 67964,
  "status": "passed"
});
formatter.after({
  "duration": 129888,
  "status": "passed"
});
});