package com.cucumber.stepdefination;

import com.cucumber.PageObjects.BookTicket;
import com.cucumber.utility.TestContext;

import cucumber.api.java.en.Then;

public class BookTicketSteps {

	TestContext testContext;
	BookTicket bookTicket;

	public BookTicketSteps(TestContext context) {
		
		testContext = context;
		bookTicket = testContext.getPageObjectManager().getbookTicket();

	}

	@Then("^Tap on drop down$")
	public void tap_on_drop_down() throws Throwable {
		
		bookTicket.select_from_dropdown();
	}

	@Then("^Select from dropdown value$")
	public void select_from_dropdown_value() throws Throwable {
		
		bookTicket.select_from_dropdown_value();
	}

	@Then("^Select to drop down value$")
	public void select_to_drop_down_value() throws Throwable {
		
		bookTicket.select_to_dropdown_value();
	}

}