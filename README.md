# Pig Latin Translator

## About

Follows the basic rules of pig latin:
* If a word begins with a vowel, append /way/ onto the end
* If a word begin with a consonant, move the first letter of the word to the end, and append /ay/

This app is built in React - I elected not to develop with Angular or AngularJS as these frameworks contain far more
overhead than is required for such a simple application. It also makes use of Redux to manage the state of the
application, but firing an action when a new word is input to translate the word(s), and adding the translations to the
reducer. Sass (SCSS) is used for styling, Webpack is used to bundle all the files, and Babel is used to transpile the
React and ES6 code into cross-platform ES5 code.

## Running

* To run this application in development, run `npm start` from the console. It is advised to use Node 8+ (NPM 5+) to
make use of the package version locking.
** Navigate to `localhost:8080`
* To build this application for production, run `npm run build`. This will create a `/dist` folder with the bundled
JS and HTML
