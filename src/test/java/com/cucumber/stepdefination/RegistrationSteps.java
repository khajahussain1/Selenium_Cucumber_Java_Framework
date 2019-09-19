package com.cucumber.stepdefination;

import com.cucumber.PageObjects.RegistrationPageObjects;
import com.cucumber.utility.TestContext;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class RegistrationSteps {

	TestContext managerReder;
	RegistrationPageObjects registration;

	public RegistrationSteps(TestContext reader) {
		
		System.out.println("started registration page stepdefination");
		managerReder = reader;
		registration = managerReder.getPageObjectManager().getRegistration();
	}
	
	@And("^select title$")
	public void select_title() throws Throwable {
		registration.select_Title_dropdown();
	}

	@Then("^enter firstname as \"([^\"]*)\"$")
	public void enter_firstname_as(String firstname) throws Throwable {

		registration.setfirstname(firstname);
	}

	@Then("^enter lastname as \"([^\"]*)\"$")
	public void enter_lastname_as(String lastname) throws Throwable {

		registration.setlastname(lastname);
	}

	@Then("^enter mobile number as \"([^\"]*)\"$")
	public void enter_mobile_number_as(String mobilenumber) throws Throwable {

		registration.setmobilenumber(mobilenumber);
	}

	@Then("^enter password as \"([^\"]*)\"$")
	public void enter_password_as(String password) throws Throwable {
		registration.setpassword(password);
	}

	@Then("^enter confirm password as \"([^\"]*)\"$")
	public void enter_confirm_password_as(String confirmpassword) throws Throwable {
		registration.setconfirmpassword(confirmpassword);
	}

	@Then("^select date of birth$")
	public void select_date_of_birth() throws Throwable {
		registration.click_on_dob_txtbox();
		registration.click_on_year_button();
		registration.click_on_month_button();
		registration.click_on_day_button();

	}

	@Then("^email address as \"([^\"]*)\"$")
	public void email_address_as(String emailaddress) throws Throwable {
		registration.setemailaddress(emailaddress);
	}

	@Then("^check on checkbox$")
	public void check_on_checkbox() throws Throwable {
		registration.agreecheckbox();
	}

	@Then("^click on submit button$")
	public void click_on_submit_button() throws Throwable {
		registration.clickonsubmitbutton();

	}

}
