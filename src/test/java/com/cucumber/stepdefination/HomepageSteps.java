package com.cucumber.stepdefination;

import com.cucumber.PageObjects.HomepagePageObjects;
import com.cucumber.utility.TestContext;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomepageSteps {

	TestContext testContext;
	HomepagePageObjects homepage;

	public HomepageSteps(TestContext context) {
		System.out.println("Started home page stepdefination ");
		testContext = context;
		homepage = testContext.getPageObjectManager().getHomepage();
	}

	@Given("^User is on home page$")
	public void launch_the_spicejet_application() throws Throwable {
		System.out.println("user is on home page");
	}

	@Then("^move to mouse on Login/SignUp button$")
	public void move_to_mouse_on_Login_SignUp_button() throws Throwable {

		homepage.mousemoveon_Login_Signup_button();
	}

	@Then("^move to the mouse SpiceCash/SpiceClub Member button$")
	public void move_to_the_mouse_SpiceCash_SpiceClub_Member_button() throws Throwable {
		homepage.mousemoveon_SpiceCash_SpiceClub_Member_button();
	}

	@Then("^move to the mouse Signup button$")
	public void move_to_the_mouse_Signup_button() throws Throwable {
		homepage.mousemoveon_Signup_button();

	}

	@Then("^click on Signup button$")
	public void click_on_Signup_button() throws Throwable {
		homepage.clickon_Signup_button();
	}

	@When("^user land on registration page$")
	public void user_land_on_registration_page() throws Throwable {

		System.out.println("user land on registration page successfully");
	}

}
