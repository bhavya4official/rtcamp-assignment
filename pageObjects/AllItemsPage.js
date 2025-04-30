class AllItemsPage {
    constructor(page) {
        this.page = page;
        this.sortDropdown = page.locator('.product_sort_container');
        // this.sortOption = page.locator('.product_sort_container [value="za"]');
    }

    async selectSortOption(option) {
        await this.sortDropdown.selectOption(option); // Select the specified option from the dropdown
        await this.page.waitForTimeout(2000); // Wait for 2 seconds to observe the change (optional)
    }

    async getSortedItems() {
        const sortedItems = await this.page.locator('.inventory_item_name').allTextContents(); // Get the text content of all item names
        return sortedItems; // Return the sorted items
    }

    async getSortedPrices() {
        const sortedPrices = await this.page.locator('.inventory_item_price').allTextContents(); // Get the text content of all item prices
        return sortedPrices.map(price => parseFloat(price.replace('$', ''))); // Convert prices to float and return
    }

    async verifySortingOrderVisually() {
        const screenshotBefore = await this.page.screenshot(); // Take a screenshot before sorting
        await this.page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is stable
        await this.selectSortOption('za'); // Select the Z-A sorting option
        await this.page.waitForTimeout(2000); // Wait for 2 seconds to observe the change (optional)
        const screenshotAfter = await this.page.screenshot(); // Take a screenshot after sorting
        return screenshotBefore.toString('base64') === screenshotAfter.toString('base64'); // Compare screenshots
    }
}
module.exports = { AllItemsPage }; // Export the AllItemsPage class for use in other files