"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuperCharacter = /** @class */ (function () {
    function SuperCharacter(name) {
        this.name = name;
    }
    return SuperCharacter;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hero;
}(SuperCharacter));
var Villian = /** @class */ (function (_super) {
    __extends(Villian, _super);
    function Villian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Villian;
}(SuperCharacter));
var SuperTeam = /** @class */ (function () {
    function SuperTeam(members, leader) {
        this.members = members;
        this.leader = leader;
    }
    return SuperTeam;
}());
var captAmerica = new Hero('Captain America');
var thor = new Hero('Thor');
var ironMan = new Hero('IronMan');
var avengers = new SuperTeam([thor, ironMan], captAmerica);
var joker = new Villian('Joker');
var riddler = new Villian('Riddler');
var badGuys = new SuperTeam([joker, riddler], joker);
var mixedTeam = new SuperTeam([captAmerica, joker], joker);
//# sourceMappingURL=generic.js.map