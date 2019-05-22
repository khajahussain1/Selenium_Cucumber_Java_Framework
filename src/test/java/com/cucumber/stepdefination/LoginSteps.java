package com.cucumber.stepdefination;

import java.util.List;
import java.util.Map;

import com.cucumber.PageObjects.LoginPageObjects;
import com.cucumber.utility.TestContext;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	TestContext testContext;
	LoginPageObjects login;
	
	public LoginSteps(TestContext context) {
		this.testContext = context;
		login = testContext.getPageObjectManager().getlogin();
		
	}
	
	@When("^User Navigate to LogIn Page$")
	public void user_Navigate_to_LogIn_Page() throws Throwable {
		login.Member_Login_button();
	}

	@When("^User enters Credentials to LogIn$")
	public void user_enters_Credentials_to_LogIn(DataTable usercredentials) throws Throwable {

		/*
		 * List<Map<String, String>> data = usercredentials.asMaps(String.class,
		 * String.class);
		 * 
		 * login.mobile_number_txtbox(data.get(0).get("Username"));
		 * login.password_txtbox(data.get(0).get("Password")); login.Login_buton();
		 */

		for (Map<String, String> data : usercredentials.asMaps(String.class, String.class)) {
			
			System.out.println(data.get("Username") + "     " + data.get("Password"));

			Thread.sleep(2000);

			String username = data.get("Username");
			String password = data.get("Password");

			login.mobile_number_txtbox(username);
			Thread.sleep(200);

			login.password_txtbox(password);
			login.Login_buton();

		}

	}
	
	// @When("^User enters Credentials to LogIn$")
	 public void user_enters_testuser_and_Test(List<Credentials>  usercredentials) throws Throwable {
	 
	 for (Credentials credentials : usercredentials) { 
		 
		 System.out.println(credentials.getUsername() + "     " + credentials.getPassword());
		 
		 login.mobile_number_txtbox(credentials.getUsername());
		 login.password_txtbox(credentials.getPassword());
		 login.Login_buton();
		 
	
	 } 
	 }

	@Then("^Message displayed Login Successfully$")
	public void message_displayed_Login_Successfully() throws Throwable {

		System.out.println("Login_Successfully");
	}

}
