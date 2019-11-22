package com.cucumber.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.TestBase.TestBase;

public class BookTicketPageObjects {

	WebDriver driver;
	TestBase testBase;

	public BookTicketPageObjects(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		testBase = new TestBase(driver);

	}

	@FindBy(xpath = "//input[@id='ctl00_mainContent_ddl_originStation1_CTXT']")
	public WebElement from_dropdon;

	@FindBy(xpath = "//a[text()=' Bengaluru (BLR)']")
	public WebElement from_dropdon_value;

	@FindBy(linkText = "Hyderabad (HYD)")
	public WebElement to_drop_down_value;

	public void select_from_dropdown() {
		testBase.WaiteForElement(from_dropdon);
		from_dropdon.click();
	}

	public void select_from_dropdown_value() {
		testBase.WaiteForElement(from_dropdon_value);
		from_dropdon_value.click();
	}

	public void select_to_dropdown_value() {
		testBase.WaiteForElement(to_drop_down_value);
		to_drop_down_value.click();
	}
}
