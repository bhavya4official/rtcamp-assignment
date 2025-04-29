const { LoginPage } = require('./LoginPage.js'); // Import the LoginPage class
const { AllItemsPage } = require('./AllItemsPage.js'); // Import the AllItemsPage class

class POManager {
    constructor(page) {
        this.page = page; // Initialize the page instance
        this.loginPage = new LoginPage(page); // Create an instance of the LoginPage class
        this.allItemsPage = new AllItemsPage(page); // Create an instance of the AllItemsPage class
    }

    // Method to get the login page object
    getLoginPage() {
        return this.loginPage; // Return the login page object
    }

    // Method to get the all items page object
    getAllItemsPage() {
        return this.allItemsPage; // Return the all items page object
    }

    // Method to close the browser
    async closeBrowser() {
        await this.page.close(); // Close the page instance
    }
}
module.exports = { POManager };