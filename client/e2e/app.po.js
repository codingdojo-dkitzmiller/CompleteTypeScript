"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ClientPage = /** @class */ (function () {
    function ClientPage() {
    }
    ClientPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    ClientPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return ClientPage;
}());
exports.ClientPage = ClientPage;
//# sourceMappingURL=app.po.js.map