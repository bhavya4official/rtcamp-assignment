# rtcamp-assignment
rtCamp assignment - https://www.saucedemo.com/


### How to set up and run the test locally:
1. Make a clone of git repository to the local repository

    `git clone https://github.com/bhavya4official/rtcamp-assignment.git`


1. Install Node

    [Donload link](https://nodejs.org/en/download)

2. Install dependencies

    `npm ci`

3. Run using npm scripts

    Smoke test (headless): `npm run smoke`

    Assignment test (headed): `npm run assignment`

4. Run Test report

    `npx playwright show-report`

***

Note:
> Video recording of test execution (headed & headless) is present in Attachments folder
> This project is implemented using Page Object pattern 
> Dotenv module is used for environment variable & test data
> Pre-defiened test scripts are added in package.json file