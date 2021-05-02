"use strict";

// Requiring Testim to run the test
const { go, resize, click, type, sendCharacter, test, l, Locator } = require('testim');

// The Locator determines the location of references objects
Locator.set(require('./locators/locators.js'));

// Running an async test with Testim
test("want-app Create User", async () => {
  // Going to the want-app website and resizing
  await go("https://want-app.herokuapp.com/");
  await resize({width: 1024, height: 680});
  // Going to log in page
  await click(l("Log_In"));
  // Going to the create account button
  await click(l("CREATE_ACCOUNT"));
  // Clicking on the first name field
  await click(l("First_Name"));
  // Entering the first name
  await type(l("First_Name"), 'Nick');
  await sendCharacter(l("First_Name"), '\t');
  // Clicking on the last name field and entering last name
  await type(l("Last_Name"), 'Stan');
  // Entering UserId
  await click(l("User_Id"));
  await type(l("User_Id"), 'NStan');
  // Entering password
  await click(l("Password"));
  await type(l("Password"), 'nstan');
  // Selecting admin account
  await click(l("Admin_Account"));
  // Submitting form
  await click(l("SUBMIT"));
  // Heading to log in page
  await click(l("Log_In"));
  // Logging in with new credentials, first a bad login
  await click(l("[id='formLoginUserName']"));
  await type(l("[id='formLoginUserName']"), 'NStan');
  await sendCharacter(l("[id='formLoginUserName']"), '\t');
  await click(l("[id='formLoginUserName']"));
  await type(l("[id='formLoginUserName']"), '');
  await click(l("[id='formLoginPassword']"));
  await type(l("[id='formLoginPassword']"), 'dfas');
  await click(l("SIGN_IN"));
  // Now logging in with the correct credentials
  await click(l("[id='formLoginUserName']"));
  await type(l("[id='formLoginUserName']"), 'NStan');
  // Converting a 'drag' step has to be done manually at this time
  await type(l("[id='formLoginPassword']"), 'nstan');
  await sendCharacter(l("[id='formLoginPassword']"), '\r');
  await click(l("Home"));
  await click(l("Log_Out"));

}); // end of test