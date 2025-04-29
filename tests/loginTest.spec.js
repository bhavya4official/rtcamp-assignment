const { expect, test } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager.js'); // Import the POManager class

test.describe('Login Scenario Tests', () => {
    let page;
    let poManager; // Declare POManager variable
    const username = process.env.USER; // Get username from environment variable
    const password = process.env.PASSWORD; // Get password from environment variable

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage(); // Create a new page instance for each test
        poManager = new POManager(page); // Initialize POManager with the new page instance 
    });

    // test.afterEach(async () => {
    //     await poManager.closeBrowser(); // Close the browser after each test
    // });

    test('Login with valid credentials', async () => {
        const loginPage = poManager.getLoginPage(); // Get the LoginPage instance from POManager

        // Navigate to the login page
        await loginPage.navigateToLoginPage();

        // Perform login with valid credentials
        await loginPage.login(username, password);

        // Assertion to verify successful login
        await expect(page, 'Landing on inventory page.').toHaveURL(/inventory/);
    });

    test('Login with empty credentials', async () => {
        const loginPage = poManager.getLoginPage(); // Get the LoginPage instance from POManager

        // Navigate to the login page
        await loginPage.navigateToLoginPage();

        // Perform login with empty credentials
        const errorMessage = await loginPage.loginWithEmptyCred();
        console.log('Error message:', errorMessage);

        // Assertion to verify error message for empty credentials
        expect(errorMessage).toContain('Epic sadface: Username is required');
    });

    test('Login with invalid credentials', async () => {
        const loginPage = poManager.getLoginPage(); // Get the LoginPage instance from POManager

        // Navigate to the login page
        await loginPage.navigateToLoginPage();

        // Perform login with invalid credentials
        const errorMessage = await loginPage.loginWithInvalidCred('abcd', '1234');

        // Assertion to verify error message for invalid credentials
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    });

    test('@Smoke Logout from the application', async () => {
        const loginPage = poManager.getLoginPage(); // Get the LoginPage instance from POManager

        // Navigate to the login page
        await loginPage.navigateToLoginPage();

        // Perform login with valid credentials
        await loginPage.login(username, password);

        // Perform logout from landing page
        await loginPage.logout();

        // Assertion to verify successful logout
        await expect(page, 'Landing on login page after logout.').toHaveURL('https://www.saucedemo.com/');
    });
});