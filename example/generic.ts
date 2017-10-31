class SuperCharacter {
    constructor(public name: string) {}
}

class Hero extends SuperCharacter {
}

class Villian extends SuperCharacter {}

class SuperTeam<T> {
    constructor(public members: T[], public leader: T) {}
}


const captAmerica = new Hero('Captain America');
const thor = new Hero('Thor');
const ironMan = new Hero('IronMan');

const avengers = new SuperTeam([thor, ironMan], captAmerica);

const joker = new Villian('Joker');
const riddler = new Villian('Riddler');

const badGuys = new SuperTeam([joker, riddler], joker);

const mixedTeam = new SuperTeam([captAmerica, joker], joker);