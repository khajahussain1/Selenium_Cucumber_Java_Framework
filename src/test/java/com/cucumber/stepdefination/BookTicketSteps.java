package com.cucumber.stepdefination;

import org.apache.log4j.xml.DOMConfigurator;

import com.cucumber.PageObjects.BookTicketPageObjects;
import com.cucumber.utility.TestContext;

import cucumber.api.java.en.Then;

public class BookTicketSteps {

	TestContext testContext;
	BookTicketPageObjects bookTicket;

	public BookTicketSteps(TestContext context) {
		System.out.println("BookTicketSteps");
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
