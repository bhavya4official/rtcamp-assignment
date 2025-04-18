// This is the page object class for the login page - It contains locators and methods to interact with the login page elements.
class LoginPage {
    // Constructor to initialize the page object with the page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use 
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('.error-message-container .error');
    }

    // Method to navigate to the login page
    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
        // Wait for the username field to be visible before proceeding
        await this.username.waitFor({ state: 'visible' });
    }


    // Method to login with the provided username and password
    async login(username, password) {
        // Fill the username and password fields and click the login button
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    // Method to login with empty credentials
    async loginWithEmptyCred() {
        await this.loginButton.click();
        // Wait for the error message to be visible and return its text content
        await this.errorMessage.waitFor({ state: 'visible' });
        return this.errorMessage.textContent();
    }

    // Method to login with invalid credentials
    async loginWithInvalidCred(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        // Wait for the error message to be visible and return its text content
        await this.errorMessage.waitFor({ state: 'visible' });
        return this.errorMessage.textContent();
    }

}
// Export the LoginPage class for use in other files
module.exports = { LoginPage }; 