"use strict";
// "emitDecoratorMetadata": true
// this will help in allowing browsers to support and register the decorator
// reflect library will be used to create the metadata
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel[LoggingLevel["INFO"] = 0] = "INFO";
    LoggingLevel[LoggingLevel["WARN"] = 1] = "WARN";
    LoggingLevel[LoggingLevel["DEBUG"] = 2] = "DEBUG";
    LoggingLevel[LoggingLevel["TRACE"] = 3] = "TRACE";
})(LoggingLevel || (LoggingLevel = {}));
var loggingLevel = LoggingLevel.DEBUG;
//
// This is a decorator
// Notice the factory method that exposes the calling function and it's function name and arguments
//
// ================================================================================
function LogMethod(level) {
    return function (target, propertyKey, descriptor) {
        /* console.log('target => ', target);
        console.log('propertyKey => ', propertyKey);
        console.log('descriptor => ', descriptor); */
        var originalFunction = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= loggingLevel) {
                console.log(">> " + propertyKey + " " + JSON.stringify(args));
            }
            originalFunction.apply(this, args);
        };
    };
}
var Database = /** @class */ (function () {
    function Database() {
        this.name = 'CTCDB';
    }
    Database.prototype.saveData = function (data) {
        console.log("Saving data of DB[" + this.name + "] - " + JSON.stringify(data));
    };
    __decorate([
        LogMethod(LoggingLevel.DEBUG),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Database.prototype, "saveData", null);
    return Database;
}());
var db = new Database();
db.saveData({ message: "Hello World" });
// ================================================================================
// Class descriptor factory
function registerOrmModel(model) {
    console.log('registering ORM models ', model);
}
// Property descriptor factory
function Entity(tableName) {
    return function (target, propertyKey) {
        // target is the class, propertyKey is the property name
        console.log("target: " + target + ", propertyKey: " + propertyKey);
    };
}
function Column(columnName) {
    return function (target, propertyKey, descriptor) {
        // registerOrmModel(target);
    };
}
var ToDo = /** @class */ (function () {
    function ToDo() {
        this.done = false;
    }
    __decorate([
        Column("DESCR"),
        __metadata("design:type", String)
    ], ToDo.prototype, "description", void 0);
    ToDo = __decorate([
        Entity("TODOS")
    ], ToDo);
    return ToDo;
}());
//# sourceMappingURL=decorators.js.map