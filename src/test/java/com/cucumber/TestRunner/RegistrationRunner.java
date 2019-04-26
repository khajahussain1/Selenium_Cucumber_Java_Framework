package com.cucumber.TestRunner;

import java.io.File;
import java.io.IOException;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import com.cucumber.listener.Reporter;
import com.cucumber.managers.FileReaderManager;
import com.cucumber.utility.Log;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/resources/features/Registration.feature", glue = {
		"com/cucumber/stepdefination" }, plugin = {"pretty", "json:target/cucumber.json", "html:target/site/cucumber-pretty",
				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-extent-reports/Extent_Report.html", }, 
				monochrome = true, dryRun = false, strict = true)

public class RegistrationRunner extends AbstractTestNGCucumberTests {

	
	String testcasename;

	@BeforeClass
	public void beforeclass() {

		testcasename = this.getClass().getSimpleName();

		System.out.println("***************** " + testcasename + " Test satrting *****************");

		//DOMConfigurator.configure("log4j.xml");

		Log.startTestCase(testcasename);
	}

	@AfterClass(alwaysRun = true)
	public void testDownClass() throws IOException {

		 //Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));

		// Reporter.loadXMLConfig(new File(ConfigFileReader.getReportConfigPath()));

		// Reporter.addScreenCaptureFromPath("screenshotPath");
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("os", "Window");
		Reporter.setTestRunnerOutput("Sample test runner output message");

		Log.endTestCase(testcasename);
		System.out.println("***************** " + testcasename + " Test end *****************");

	}

}