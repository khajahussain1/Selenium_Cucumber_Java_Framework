package com.cucumber.utility;

import com.cucumber.managers.PageObjectManager;
import com.cucumber.managers.WebDriverManager;

public class TestContext {

	
	private WebDriverManager webDriverManager = null;
	private PageObjectManager pageObjectManager = null;
	//public ScenarioContext scenarioContext;

	public TestContext() {		
        System.out.println("started TestContext");        
        System.gc();
		webDriverManager = new WebDriverManager();
		pageObjectManager = new PageObjectManager(webDriverManager.getDriver());
		//scenarioContext = new ScenarioContext();
	}

	public WebDriverManager getWebDriverManager() {

		System.out.println("started WebDriverManager object");
		return webDriverManager;
	}

	public PageObjectManager getPageObjectManager() {
		System.out.println("started PageObjectManager object");
		return pageObjectManager;
	}

	/*public ScenarioContext getScenarioContext() {
		
		return scenarioContext;
	}*/

}