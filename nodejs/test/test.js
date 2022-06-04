var event = require('util');
function Person(){
    this.firstName="nagwa";
    this.lastName="talaat";
}
Person.prototype.greet = function(){
    console.log(`hello ${this.firstName} ${this.lastName}`);
}
function policeMan(){
    // it is important to call all parameters under this in the parent
    Person.call(this);
this.budget=1234;
}
event.inherits(policeMan,Person);
var police = new policeMan();
  console.log(police.budget);
  police.greet();