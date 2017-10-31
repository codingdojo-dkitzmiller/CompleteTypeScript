import * as _ from 'lodash';

const colors = [ 'red', 'green', 'blue' ];

console.log(`First color: ${ _.first(colors)}`);


interface Person {
    fname: string;
    lname: string;
}

interface Player {
    fname: string;
}

const p: Person = { fname: 'Dave', lname: 'Kitzmiller' };
const pl: Player = p;