"use strict";
var Editor;
(function (Editor) {
    Editor[Editor["Marvel"] = 0] = "Marvel";
    Editor[Editor["DC"] = 1] = "DC";
})(Editor || (Editor = {}));
var SuperHero = /** @class */ (function () {
    function SuperHero(name, _editor, creationYear) {
        this.name = name;
        this._editor = _editor;
        this.creationYear = creationYear;
        this._summary = '';
        this._summary = name + " " + Editor[_editor] + " " + creationYear;
    }
    Object.defineProperty(SuperHero.prototype, "summary", {
        get: function () {
            return "Summary: " + this.name + " - " + this.editor + " [" + this.creationYear + "]";
        },
        set: function (txt) {
            this._summary = txt;
        },
        enumerable: true,
        configurable: true
    });
    SuperHero.prototype.getSummary = function () {
        return this.summary;
    };
    Object.defineProperty(SuperHero.prototype, "editor", {
        get: function () {
            return Editor[this._editor];
        },
        set: function (name) {
            this._editor = Editor[name];
        },
        enumerable: true,
        configurable: true
    });
    return SuperHero;
}());
var superMan = new SuperHero('Clark Kent', Editor.DC, 1938);
console.log(superMan.summary);
console.log(JSON.stringify(superMan));
//# sourceMappingURL=oop.js.map