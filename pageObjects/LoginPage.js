// This is the page object class for the login page - It contains locators and methods to interact with the login page elements.
class LoginPage {
    // Constructor to initialize the page object with the page instance
    constructor(page) {
        this.page = page; // Store the page instance for later use 
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('.error-message-container .error');
        // Below locators are for landing page after login
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    // Method to navigate to the login page
    async navigateToLoginPage() {
        await this.page.goto('/');
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
        try {
            // Wait for the error message to be visible and return its text content
            await this.errorMessage.waitFor({ state: 'visible' });
            return await this.errorMessage.textContent();
        }
        catch (error) {
            console.error('Error message not found:', error); // Log the error if the message is not found
            return 'Error message not found'; // Return a default message if the error message is not found
        }
    }

    // Method to login with invalid credentials
    async loginWithInvalidCred(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        // Wait for the error message to be visible and return its text content
        await this.errorMessage.waitFor({ state: 'visible' });
        return await this.errorMessage.textContent();
    }

    // Method to logout from the application
    async logout() {
        try {
            // Click on the burger menu and then click on the logout button
            await this.burgerMenu.click();
            await this.logoutButton.click();
        } catch (error) {
            console.error('Error during logout:', error); // Log the error if any occurs during logout
        }
    }

}
// Export the LoginPage class for use in other files
module.exports = { LoginPage }; 