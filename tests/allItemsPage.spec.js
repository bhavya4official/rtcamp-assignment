const { expect, test } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager.js'); // Import the POManager class

test.describe('All Items Page Tests', () => {
    let page;
    let poManager; // Declare POManager variable

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage(); // Create a new page instance for each test
        poManager = new POManager(page); // Initialize POManager with the new page instance
    });

    // test.afterEach(async () => {
    //     await poManager.closeBrowser(); // Close the browser after each test
    // });

    test('Verify login with valid credentials', async ({ }) => {
        // const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();

        // Navigate to the login page
        await loginPage.navigateToLoginPage();

        // Perform login
        await loginPage.login('standard_user', 'secret_sauce');

        // Add assertions to verify successful login
        await expect(page).toHaveURL(/inventory/);
    });

});
