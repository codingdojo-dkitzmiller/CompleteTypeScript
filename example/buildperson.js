"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildPersonData(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    return firstName + " " + lastName + " " + other.join('-');
}
exports.buildPersonData = buildPersonData;
//# sourceMappingURL=buildperson.js.map