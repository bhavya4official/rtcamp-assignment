const { expect, test } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager.js'); // Import the POManager class

test.describe('All Items Page Tests', () => {
    let page;
    let poManager; // Declare POManager variable
    const username = process.env.USER; // Get username from environment variable
    const password = process.env.PASSWORD; // Get password from environment variable

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage(); // Create a new page instance for each test
        poManager = new POManager(page); // Initialize POManager with the new page instance

        const loginPage = poManager.getLoginPage();

        // Navigate to the login page
        await loginPage.navigateToLoginPage();

        // Perform login
        await loginPage.login(username, password);

        // Add assertions to verify successful login
        await expect(page).toHaveURL(/inventory/);
    });

    test.afterEach(async () => {
        await poManager.closeBrowser(); // Close the browser after each test
    });

    test('@assignment Verify the sorting order displayed for Z-A on the “All Items” page.', async () => {
        const allItemsPage = poManager.getAllItemsPage(); // Get the AllItemsPage instance from POManager

        // Select the Z-A sorting option
        await allItemsPage.selectSortOption(process.env.ORDER_ZA);

        // Get the sorted items
        const sortedItems = await allItemsPage.getSortedItems();

        // Assert that the items are sorted in descending order
        const isDescending = sortedItems.every((item, index) => {
            return index === 0 || item.localeCompare(sortedItems[index - 1]) <= 0;
        });
        expect(isDescending).toBe(true); // Assert that the items are sorted in descending order

        // Verify the sorting order visually
        // const isSorted = await allItemsPage.verifySortingOrderVisually();
        // expect(isSorted).toBe(true); // Assert that the items are sorted correctly

    });

    test('@assignment Verify the price order (high-low) displayed on the “All Items” page.', async () => {
        const allItemsPage = poManager.getAllItemsPage(); // Get the AllItemsPage instance from POManager

        // Select the high to low sorting option
        await allItemsPage.selectSortOption(process.env.ORDER_PRICE_HL);

        // Get the sorted items
        const sortedPrices = await allItemsPage.getSortedPrices();

        // Assert that the items are sorted in descending order of price
        const isDescending = sortedPrices.every((price, index) => {
            return index === 0 || price <= sortedPrices[index - 1];
        });
        expect(isDescending).toBe(true); // Assert that the items are sorted in descending order
    })

});
