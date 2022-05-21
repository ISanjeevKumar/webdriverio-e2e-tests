# webdriverio-e2e-tests

WebdriverIO e2e tests using page object model design patterns.

Also, integrated Allure report.

## Framework Supports

- Cross browser test automation
- Jenkins Integration
- Failed Screenshots
- Testdata driven tests
- Retries of failed tests
- Parallel Execution on sam

## How to run WebDriverIO tests

```
npx wdio run ./wdio.conf.js
```

## How to run selective WebDriverIO tests using grep command

```
npx wdio run ./wdio.conf.js --mochaOpts.grep 'Your keyword'
```
