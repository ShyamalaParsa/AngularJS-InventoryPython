// app.factory('Mailto', [function() {
// 	var api = {};

// 	/**
// 	 * Returns a URL for a mailto-link
// 	 * @param  {String} recepient    - Recepient email address
// 	 * @param  {Object} opts         - Options to construct the URL
// 	 * @param  {String} opts.cc      - Cc recepient email address (optional)
// 	 * @param  {String} opts.bcc     - Bcc recepient email address (optional)
// 	 * @param  {String} opts.subject - Email subject (optional)
// 	 * @param  {String} opts.body    - Email body (optional). Separate lines with the newline character (\n)
// 	 * @return {String}              - Returns the URL to put into the href-attribute of a mailto link
// 	 */
// 	api.url = function(recepient, opts) {
// 		var link = "mailto:";
// 		link += window.encodeURIComponent(recepient);
// 		var params = [];
// 		angular.forEach(opts, function(value, key) {
// 			params.push(key.toLowerCase() + "=" + window.encodeURIComponent(value));
// 		});
// 		if (params.length > 0) {
// 			link += "?" + params.join("&");
// 		}
// 		return link;
// 	};

// 	return api;
// }]);


// href="mailto:viswanath.sanagaram@ojas-it.com?cc=&bcc=&subject=&body=Hi%20Viswa%2C%0AThis%20is%20an%20email%20pre-populated%20from%20angular-mailto."