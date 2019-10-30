package com.cucumber.TestRunner;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.xml.DOMConfigurator;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import com.cucumber.listener.Reporter;
import com.cucumber.utility.Log;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = { "src/test/resources/features" }, glue = { "com/cucumber/stepdefination" }, plugin = {
		"pretty", "html:target/cucumber-pretty", "json:target/cucumber-reports/cucumber.json",
		"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-extent-reports/Extent_Report.html", }, tags = {"@sanity"},
		monochrome = true, dryRun = false, strict = true)

public class RegistrationRunner extends AbstractTestNGCucumberTests {

	
	/*

run cucumber tags through cmd

mvn clean install test -Dcucumber.options="--tags @sanity"
*/
	String testcasename;

	@BeforeClass
	public void beforeclass() {

		SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd hh-mm-ss");
		System.setProperty("Currentdata", formater.format(new Date()));
		//SeleniumUntil.cleanFolder("Logs"); //delete all log files
		
		testcasename = this.getClass().getSimpleName();

		System.out.println("***************** " + testcasename + " Test satrting *****************");

		DOMConfigurator.configure("log4j.xml");

		Log.startTestCase(testcasename);
	}

	@AfterClass(alwaysRun = true)
	public void testDownClass() throws IOException {

		// Reporter.loadXMLConfig(new
		// File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));

		// Reporter.loadXMLConfig(new File(ConfigFileReader.getReportConfigPath()));

		Reporter.addScreenCaptureFromPath("screenshotPath");
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("os", "Window");
		Reporter.setTestRunnerOutput("Sample test runner output message");

		Log.endTestCase(testcasename);
		System.out.println("***************** " + testcasename + " Test end *****************");

	}

}
