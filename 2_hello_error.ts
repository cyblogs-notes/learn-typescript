/**
 * TS Hello World Error
 */
(function() {
	function sayHello(person: string) {
		return 'Hello, ' + person;
	}
	
	let user = [1, 2, 3];
	console.dir(sayHello(user));
})();