"use strict";

// Requiring Testim to run the test
const { go, resize, click, type, test, l, Locator } = require('testim');

// The Locator determines the location of references objects
Locator.set(require('./locators/locators.js'));

// Running an async test with Testim
test("want-app Log In/Out", async () => {
  // Going to the want-app website and resizing
  await go("https://want-app.herokuapp.com/");
  await resize({width: 1024, height: 680});
  // Heading to log in page
  await click(l("Log_In"));
  // Attempting to log in
  await click(l("User_Id"));
  await type(l("User_Id"), 'admin');
  await click(l("Password"));
  await type(l("Password"), 'admin');
  // Log in successful
  await click(l("SIGN_IN"));
  // Converting a 'drag' step has to be done manually at this time
  // Attempting to log out
  await click(l("Home"));
  await click(l("Log_Out"));

}); // end of test