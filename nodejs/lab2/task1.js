var eventHandle = require('events');
var Util = require('util');
function Greetr(){
    this.greeting="hello";
}
Util.inherits(Greetr,eventHandle);
Greetr.prototype.greet = function(name)
{
    console.log(this.greeting);
    console.log (name);
    this.emit('greet');

}
var greet1 = new Greetr();
greet1.on('greet',function(){
    console.log("hello from greet");
})
greet1.greet('nagwa');
