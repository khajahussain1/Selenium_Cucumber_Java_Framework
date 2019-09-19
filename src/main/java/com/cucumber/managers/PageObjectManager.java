package com.cucumber.managers;

import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.WebDriver;

import com.cucumber.PageObjects.BookTicketPageObjects;
import com.cucumber.PageObjects.HomepagePageObjects;
import com.cucumber.PageObjects.LoginPageObjects;
import com.cucumber.PageObjects.RegistrationPageObjects;
import com.cucumber.utility.Log;

public class PageObjectManager {

	private WebDriver driver;

	private RegistrationPageObjects registration;

	private HomepagePageObjects homepage;
	
	private BookTicketPageObjects bookTicket;
	
	private LoginPageObjects login;
	
	private Log log;

	public PageObjectManager(WebDriver driver) {
		System.out.println("started pageobject manager");
		this.driver = driver; 
		DOMConfigurator.configure("log4j.xml");
	}
	
	public LoginPageObjects getlogin()
	{
		if(login == null)
		{
			login = new LoginPageObjects(driver);
		}
		return login;
	}
	
	
	public Log getlogger() {
		
		if(log == null)
		{
			log = new Log(driver);
			
		}
		return log;

		//return (loggerHelper == null) ? loggerHelper = new LoggerHelper(driver) : loggerHelper;

	}

	public HomepagePageObjects getHomepage() {

		if (homepage == null) 
		{
			homepage = new HomepagePageObjects(driver);
		}

		return homepage;

		// return (homepage == null) ? homepage = new Homepage(driver) : homepage;

	}

	public RegistrationPageObjects getRegistration() {

		if (registration == null) 
		{
			registration = new RegistrationPageObjects(driver);
		}

		return registration;		
	}
	
	public BookTicketPageObjects getbookTicket()
	{
		if(bookTicket == null)
		{
			bookTicket = new BookTicketPageObjects(driver);
		}
		
		return bookTicket;
	}

}
