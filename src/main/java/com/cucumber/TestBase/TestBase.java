package com.cucumber.TestBase;

import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cucumber.managers.FileReaderManager;


public class TestBase 
{
	WebDriver driver;
	
	public TestBase(WebDriver driver)
	{
		this.driver = driver;
		DOMConfigurator.configure("log4j.xml");
	}
	
	
	public void WaiteForElement(WebElement element)
	{
		WebDriverWait wait =new WebDriverWait(driver, FileReaderManager.getInstance().getConfigReader().getWebdriverWait());
		
		wait.until(ExpectedConditions.visibilityOf(element));
		
	}

}
