# Ursa Major

A pilot project for the glacier crates team on building an app together.

Plays pomodoro-sized music tracks and notifies you when they end.

HTML5 / Electron application with tray icon and desktop notifications.

## Development Environment

### Prerequisites

* NodeJS 6.6.0 (comes with NPM 3.10)
* NPM globally installed modules
  * Gulp `npm install -g gulp`
  * JSPM `npm install -g jspm`
  * Typings `npm install -g typings`
  * Unzip (on Windows) `npm install -g unzip`
  * Electron `npm install -g electron-prebuilt`
* Inside app folder, restore packages:
  * `npm install`
  * `jspm install -y`
  * `typings install`

### Build and run

* `gulp build`
* `electron index.js`

### Bundling

Bundling is performed by [Aurelia Bundler](http://github.com/aurelia/bundler). A gulp task is already configured for that. Use the following command to bundle the app:

  ```shell
    gulp bundle
  ```

You can also unbundle using the command bellow:

  ```shell
    gulp unbundle
  ```

To start the bundled app, execute the following command:

  ```shell
    gulp serve-bundle
  ```

#### Configuration

The configuration is done by ```bundles.js``` file.

##### Optional

Under ```options``` of ```dist/aurelia``` add ```rev: true``` to add bundle file revision/version.

### Running The Unit Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```

2. Install Aurelia libs for test visibility:

```shell
jspm install aurelia-framework
jspm install aurelia-http-client
jspm install aurelia-router
```

3. You can now run the tests with this command:

  ```shell
  karma start
  ```

### Running The E2E Tests

Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver

  ```shell
  gulp webdriver-update
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. Make sure your app runs and is accessible

  ```shell
  gulp watch
  ```

5. In another console run the E2E-Tests

  ```shell
  gulp e2e
  ```

### Exporting bundled production version

A gulp task is already configured for that. Use the following command to export the app:

  ```shell
    gulp export
  ```
The app will be exported into ```export``` directory preserving the directory structure.

To start the exported app, execute the following command:

  ```shell
    gulp serve-export
  ```

#### Configuration

The configuration is done by ```bundles.js``` file.
In addition, ```export.js``` file is available for including individual files.
