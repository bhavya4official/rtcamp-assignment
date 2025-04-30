# rtcamp-assignment

rtCamp assignment - https://www.saucedemo.com/

### How to set up and run the test locally:

1. Make a clone of git repository to the local repository

   `git clone https://github.com/bhavya4official/rtcamp-assignment.git`

1. Install Node

   [Donload link](https://nodejs.org/en/download)

1. Install dependencies

   `npm ci`

1. Run using npm scripts

   Smoke test: `npm run smoke`

   Assignment test: `npm run assignment`

1. Run Test report

   `npx playwright show-report`

---

### Note:

* Video recording of test execution (headed & headless) is present in the Attachments folder.
* This project is implemented using the Page Object pattern.
* The dotenv module is used for environment variables & test data.
* Pre-defined test scripts are added in the package.json file.
