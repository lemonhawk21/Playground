/***************************************************/

var counter = 10; // Current Value Is:

function add(num) {
  counter = counter + num; // counter = 150
	console.log(num); // Logs: 50
}

add(20);
add(30);

console.log(counter); // Logs:60

add(40);
add(50);

console.log(counter); // Logs: 150

/***************************************************/

function log10() {
  var num = 10;
  console.log(num);
}

function callMe(fn) {
  fn();
}

callMe( log10 );
callMe(10); // ITS A TARP!!!!

/***************************************************/


function log10() {
  var num = 10;
  console.log(num);
}

var trevor = {
  name: 'Trevor Foehl',
  yellANumber(fn) {
    if (typeof fn !== 'function') {
      console.log('Silly Trevor, tricks are for kids!');
      return;
    }
    fn();
  }
};

trevor.yellANumber(log10);
trevor.yellANumber('not a function!');

/***************************************************/
