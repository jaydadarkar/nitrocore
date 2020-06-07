"use strict";
module.exports.first = (var_string) => {
	return var_string.charAt(0);
}

module.exports.last = (var_string) => {
	return var_string.charAt(var_string.length - 1);
}

module.exports.strLength = (var_string) => {
	return var_string.length;
}

module.exports.subString = (var_start, var_end, var_string) => {
	return var_string.substring(var_start, var_end);
}

module.exports.uppercase = (var_string) => {
	return var_string.toUpperCase();
}

module.exports.lowercase = (var_string) => {
	return var_string.toLowerCase();
}

module.exports.capitalize = (var_string) => {
	return var_string.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}

module.exports.wordCount = (var_string) => {
	var_string = var_string.replace(/(^\s*)|(\s*$)/gi,"");
	var_string = var_string.replace(/[ ]{2,}/gi," ");
	var_string = var_string.replace(/\n /,"\n");
	return var_string.split(' ').length;
}

module.exports.random = (var_limit) => {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for( var i = 0; i < var_limit; i++ ) {
	  result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}