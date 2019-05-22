package com.cucumber.PageObjects;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.TestBase.TestBase;
import com.cucumber.utility.Log;

public class LoginPageObjects {

	WebDriver driver;
	Actions act;
	TestBase testbase;

	public LoginPageObjects(WebDriver driver) {
		this.driver = driver;
		testbase = new TestBase(driver);
		PageFactory.initElements(driver, this);

	}

	/*@FindBy(xpath = "//a[@id='ctl00_HyperLinkLogin']")
	WebElement Login_Signup_button;

	@FindBy(xpath = "//*[text()='SpiceClub Members']")
	WebElement SpiceCash_SpiceClub_Member_button;*/

	@FindBy(linkText = "Member Login")
	WebElement Member_Login;

	@FindBy(xpath = "//input[@id='ControlGroupLoginView_MemberLoginView2LoginView_TextBoxUserID']")
	WebElement mobile_number;

	@FindBy(xpath = "//input[@id='ControlGroupLoginView_MemberLoginView2LoginView_PasswordFieldPassword']")
	WebElement password_txtbox;

	@FindBy(xpath = "//input[@id='ControlGroupLoginView_MemberLoginView2LoginView_ButtonLogIn']")
	WebElement login_button;

	/*public void mousemoveon_Login_Signup_button() {
		act = new Actions(driver);

		try {

			testbase.WaiteForElement(Login_Signup_button);

			Log.info("Explicity wait applied on the driver for 60 seconds");

			act.moveToElement(Login_Signup_button).build().perform();

			Log.info("Login_Signup_button is found on the Home page");

		} catch (Exception e) {

			Log.error("Login_Signup_button is not found on the Home page " + e);
			throw (e);
		}
	}

	public void mousemoveon_SpiceCash_SpiceClub_Member_button() {
		try {

			testbase.WaiteForElement(SpiceCash_SpiceClub_Member_button);

			Log.info("Explicity wait applied on the driver for 60 seconds");

			act.moveToElement(SpiceCash_SpiceClub_Member_button).build().perform();

			Log.info("SpiceCash_SpiceClub_Member_button is found on the Home page");

		} catch (Exception e) {

			Log.error("SpiceCash_SpiceClub_Member_button is not found on the Home page" + e);

		}
	}
*/
	public void Member_Login_button() {
		act = new Actions(driver);

		try {

			testbase.WaiteForElement(Member_Login);

			Log.info("Explicity wait applied on the driver for 60 seconds");

			act.moveToElement(Member_Login).build().perform();

			testbase.WaiteForElement(Member_Login);

			Member_Login.click();

			Log.info("Member_Login is found on the Home page");

		} catch (Exception e) {

			Log.error("Member_Login is not found on the Home page " + e);
			throw (e);
		}
	}

	public void mobile_number_txtbox(String ph_number) {
		testbase.WaiteForElement(mobile_number);

		Log.info("Explicity wait applied on the driver for 60 seconds");

		mobile_number.sendKeys(ph_number);

		Log.info("mobile_number is found on the Home page");

	}

	public void password_txtbox(String password) {
		testbase.WaiteForElement(password_txtbox);

		Log.info("Explicity wait applied on the driver for 60 seconds");

		password_txtbox.sendKeys(password);

		Log.info("password_txtbox is found on the Home page");

	}

	public void Login_buton() throws InterruptedException {
		testbase.WaiteForElement(login_button);

		Log.info("Explicity wait applied on the driver for 60 seconds");

		login_button.click();

		Log.info("password_txtbox is found on the Home page");
		Thread.sleep(2000);

		// testbase.isAlertPresent();

		try {
			Alert alt = driver.switchTo().alert();
			alt.accept();

		} catch (Exception e) {
			//System.out.println(e);

		}
	}
}
