const { LoginPage } = require('./LoginPage.js'); // Import the LoginPage class

class POManager {
    constructor(page) {
        this.page = page; // Initialize the page instance
        this.loginPage = new LoginPage(page); // Create an instance of the LoginPage class
    }

    // Method to get the login page object
    getLoginPage() {
        return this.loginPage; // Return the login page object
    }

    // Method to close the browser
    async closeBrowser() {
        await this.page.close(); // Close the page instance
    }
}
module.exports = { POManager };