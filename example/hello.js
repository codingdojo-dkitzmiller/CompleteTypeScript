"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildperson_js_1 = require("./buildperson.js");
var firstName = 'George', lastName = 'Washington';
var partialAddress = ['123 Main St', '#222', 'Bellevue', 'WA', 98004];
var personData = { firstName: firstName, lastName: lastName };
var txt = buildperson_js_1.buildPersonData(personData, partialAddress);
console.log(txt);
//# sourceMappingURL=hello.js.map