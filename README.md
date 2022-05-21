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

## How to run selective WebDriverIO tests in IT block using grep command

```
npx wdio run ./wdio.conf.js --mochaOpts.grep 'Your keyword'
```

## How to run selective suites using command line arguments

`Add below config in wdio.conf.js file`

```
   suites: {
        smoke: ['./test/specs/smoke/**.spec.js'],
        regression: ['./test/specs/regression/**.spec.js']
    }
```

`Run command`

```
npx wdio run ./wdio.conf.js --suite smoke
```

## How to custom config file

Create separate config file and merge the parents object in custom file using deepmerge npm module

```
npx wdio run ./wdio.qa.conf.js --suite regression
```
