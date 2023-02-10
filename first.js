//const { chromium } = require("playwright");

/*Modules are a way to split an application into separate files instead of having all of your application in one file. 
This concept is also present in other languages with minor differences in syntax and behavior, like C's include, Python's import, and so on.
For a module to access another module's exports or module.exports, it must use require().
require() is not part of the standard 
JavaScript API. But in Node.js, it's a built-in func
tion with a special purpose: to load modules. */

hello = function () {
  return "Hello World";
};
console.log(hello());
