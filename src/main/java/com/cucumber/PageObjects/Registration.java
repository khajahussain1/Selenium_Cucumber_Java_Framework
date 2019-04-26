package com.cucumber.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.cucumber.TestBase.TestBase;
import com.cucumber.utility.Log;

public class Registration {
	WebDriver driver;
	Select se;
	TestBase testBase;

	public Registration(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		testBase = new TestBase(driver);

	}

	@FindBy(xpath = "//input[@id='CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_TextBoxFirstName']")
	WebElement firstname_txtbox;

	@FindBy(xpath = "//input[@id='CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_TextBoxLastName']")
	WebElement laststname_txtbox;

	@FindBy(xpath = "//input[@id='CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_TEXTBOXINTLMOBILENUMBER']")
	WebElement mobilenumber_txtbox;

	@FindBy(xpath = "//input[@id='CONTROLGROUPREGISTERVIEW_MemberInputRegisterView_PasswordFieldAgentPassword']")
	WebElement password_txtbox;

	@FindBy(xpath = "//input[@id='CONTROLGROUPREGISTERVIEW_MemberInputRegisterView_PasswordFieldPasswordConfirm']")
	WebElement confirm_password_txtbox;

	@FindBy(xpath = "//select[@id='CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_DropDownListDOBDay']")
	WebElement day_dropdown;

	@FindBy(xpath = "//select[@id='CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_DropDownListDOBMonth']")
	WebElement month_dropdown;

	@FindBy(xpath = "//select[@id='CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_DropDownListDOBYear']")
	WebElement year_dropdown;

	@FindBy(xpath = "//input[@id='CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_TextBoxEmail']")
	WebElement email_address_txtbox;

	@FindBy(xpath = "//input[@id='chkSpiceClubTnC']")
	WebElement agree_checkbox;

	@FindBy(xpath = "//input[@id='CONTROLGROUPREGISTERVIEW_ButtonSubmit']")
	WebElement submit_button;

	public void setfirstname(String firstname) {
		try {
			
		testBase.WaiteForElement(firstname_txtbox);
		Log.info("Explicity wait applied on the driver for 60 seconds");
		
		firstname_txtbox.sendKeys(firstname);
		Log.info("FirstName text box is found on Registration page");
		Log.info(firstname+" is entered as First Name on the Registration page");
		}
		catch(Exception e)
		{
			Log.error("First name text box is not found on the Registration page "+e);
			throw(e);
		}
	}

	public void setlastname(String lastname) {
		try {
			
		laststname_txtbox.sendKeys(lastname);
		Log.info("Last Name text box is found on Registration page");
		Log.info(lastname+" is entered as Last Name on the Registration page");
		
		}catch(Exception e)
		{
			Log.error("Last Name text box is not found on the Registration page "+e);
			throw(e);
			
		}
	}

	public void setmobilenumber(String mobilenumber) {
		try {
			
		mobilenumber_txtbox.sendKeys(mobilenumber);
		Log.info("Mobile number text box is found on the Registration page");
		Log.info(mobilenumber+" is entered as Email on the Registration page");
		
		}catch(Exception e)
		{
			Log.error("Mobile Number text box is not found on the Registration page "+e);
			throw(e);
			
		}
	}

	public void setpassword(String password) {
		try {
			
		password_txtbox.sendKeys(password);
		Log.info("Password text box is found on the Registratio page");
		Log.info(password+" is entered as password on the Registration page");
		
		}catch(Exception e)
		{
			Log.error("Password page is not found on the Registration page "+e);
			throw(e);
			
		}
	}

	public void setconfirmpassword(String confirmpassword) {
		try {
			
		confirm_password_txtbox.sendKeys(confirmpassword);
		Log.info("Confirmpassword text box is found on the Registration page");
		Log.info(confirmpassword+" is entered as confirm password on the Registration page");
		
		}catch(Exception e)
		{
			Log.error("Confirm password text box is not found on the Registration page "+e);
			throw(e);
			
		}
	}

	public void selectday(String day) {
		try {
		se = new Select(day_dropdown);
		se.selectByVisibleText(day);
		Log.info("Day drop down is selected on Registration page");
		Log.info(day+" is selected as day on the Registration page");
		
		}catch(Exception e)
		{
			Log.error("Day drop down is not selected on registration page "+e);
			throw(e);
			
		}

	}

	public void selectmonth(String month) {
		se = new Select(month_dropdown);
		se.selectByValue(month);
	}

	public void selectyear(String year) {
		se = new Select(year_dropdown);
		se.selectByVisibleText(year);
	}

	public void setemailaddress(String emailaddress) {
		email_address_txtbox.sendKeys(emailaddress);
	}

	public void agreecheckbox() {
		agree_checkbox.click();
	}

	public void clickonsubmitbutton() {
		submit_button.click();
	}

}
