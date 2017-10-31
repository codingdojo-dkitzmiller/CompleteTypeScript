import {buildPersonData} from './buildperson.js';

const firstName = 'George', lastName = 'Washington';

const partialAddress = [ '123 Main St', '#222', 'Bellevue', 'WA', 98004];

const personData = {firstName, lastName};


const txt = buildPersonData(personData, partialAddress);

console.log(txt);