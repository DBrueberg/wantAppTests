"use strict";

// Requiring Testim to run the test
const { go, resize, scrollToElement, click, type, test, l, Locator } = require('testim');

// The Locator determines the location of references objects
Locator.set(require('./locators/locators.js'));

// Running an async test with Testim
test("want-app Purchase Products", async () => {
  // Going to the want-app website and resizing
  await go("https://want-app.herokuapp.com/");
  await resize({width: 1024, height: 680});
  // Picking out some items to add to cart from home page
  await scrollToElement(l("QrMyHPsquCMWj2kp"));
  await click(l(".Products_>_:nth-child(1)_.MuiSvgIc"));
  // Adding those items to the cart
  await click(l("ADD_TO_CART"));
  await click(l("ADD_TO_CART"));
  // Checking cart quantity
  await click(l("Cart:_3"));
  await click(l("cartQuantity"));
  await type(l("cartQuantity"), '');
  await click(l(".shoppingCartCards_>_:nth-child(1)_"));
  // Buying the items and creating an invoice
  await click(l("CHECKOUT"));
  await click(l("PURCHASE"));

}); // end of test