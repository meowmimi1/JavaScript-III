/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: In the scope value of "this" will be in window console object
* 2. Implicit: Called by dot the object left of dot gets "this"
* 3. New: When constructor is used, it refers to specific instance of object thats created and returned
* 4. Explicit: Binds to what it's told to do
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
var MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
 
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
 
  var obj = new MyObject();
 
  obj.doStuff('cool'); // prints 'MyObjectName is awesome!'
// code example for Implicit Binding

// Principle 3
function bike() {
    var name = "Ninja";
    this.maker = "Kawasaki";
    console.log(this.name + " " + maker); 
  }
  
  var name = "Pulsar";
  var maker = "Bajaj";
  
  obj = new bike();
  console.log(obj.maker);      
// code example for New Binding

// Principle 4
var runner = { name: 'John', myFavoriteActivity: 'running' };
  MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity);
// code example for Explicit Binding