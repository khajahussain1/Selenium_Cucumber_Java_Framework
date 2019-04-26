package com.cucumber.managers;

import org.openqa.selenium.WebDriver;

import com.cucumber.PageObjects.BookTicket;
import com.cucumber.PageObjects.Homepage;
import com.cucumber.PageObjects.Registration;
import com.cucumber.utility.Log;

public class PageObjectManager {

	private WebDriver driver;

	private Registration registration;

	private Homepage homepage;
	
	private BookTicket bookTicket;
	
	private Log log;

	public PageObjectManager(WebDriver driver) {
		
		this.driver = driver; 
	}
	
	
	public Log getlogger() {
		
		if(log == null)
		{
			log = new Log(driver);
			
		}
		return log;

		//return (loggerHelper == null) ? loggerHelper = new LoggerHelper(driver) : loggerHelper;

	}

	public Homepage getHomepage() {

		if (homepage == null) 
		{
			homepage = new Homepage(driver);
		}

		return homepage;

		// return (homepage == null) ? homepage = new Homepage(driver) : homepage;

	}

	public Registration getRegistration() {

		if (registration == null) 
		{
			registration = new Registration(driver);
		}

		return registration;		
	}
	
	public BookTicket getbookTicket()
	{
		if(bookTicket == null)
		{
			bookTicket = new BookTicket(driver);
		}
		
		return bookTicket;
	}

}
