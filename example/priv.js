var Person = (function() {
    // everyone shares the same age
    var age = 25;

    function InnerPerson( name) {
        this.name = name;
    }

    InnerPerson.prototype.getAge = function() {
        return age;
    };

    InnerPerson.prototype.growOlder = function() {
        age++;
    };

    return InnerPerson;
}());


var dave  = new Person('Dave');
var linda  = new Person('Linda');

linda.growOlder();
linda.growOlder();
linda.growOlder();
linda.growOlder();
linda.growOlder();
linda.growOlder();
console.log(`Dave: ${dave.getAge()}`);
console.log(`Linda: ${linda.getAge()}`);


var Person2 = (function(){
    function InnerPerson(name) {
        var age = 10;

        this.getAge = function() {
            return age;
        }

        this.growOlder = function() {
            age++;
        }
    }

    return InnerPerson;
})();

var d2 = new Person2('Dave');
var l2 = new Person2('Linda');


l2.growOlder();
l2.growOlder();
l2.growOlder();
l2.growOlder();
l2.growOlder();
l2.growOlder();
console.log(`Dave: ${d2.getAge()}`);
console.log(`Linda: ${l2.getAge()}`);

