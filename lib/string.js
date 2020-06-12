"use strict";
/**
 * Returns First Character From The Given String.
	@param {string} var_string String
	@returns {string} String
*/
module.exports.first = (var_string) => {
	return var_string.charAt(0);
}

/**
 * Returns Last Character From The Given String.
	@param {string} var_string String
	@returns {string} String
*/
module.exports.last = (var_string) => {
	return var_string.charAt(var_string.length - 1);
}

/**
 * Returns Length Of The Given String.
	@param {string} var_string String
	@returns {number} Number
*/
module.exports.strLength = (var_string) => {
	return var_string.length;
}

/**
 * Returns A Substring From The Given String.
	@param {number} var_start Number
	@param {number} var_end Number
 	@param {string} var_string String
	@returns {string} String
*/
module.exports.subString = (var_start, var_end, var_string) => {
	return var_string.substring(var_start, var_end);
}

/**
 * Returns Uppercased String.
	@param {string} var_string String
	@returns {string} String
*/
module.exports.uppercase = (var_string) => {
	return var_string.toUpperCase();
}

/**
 * Returns Lowercased String.
	@param {string} var_string String
	@returns {string} String
*/
module.exports.lowercase = (var_string) => {
	return var_string.toLowerCase();
}

/**
 * Returns Capitalized String.
 	@param {string} var_string String
	@returns {string} String
*/
module.exports.capitalize = (var_string) => {
	return var_string.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}

/**
 * Returns Number Of Words In A String.
	@param {string} var_string String
	@returns {number} Number
*/
module.exports.wordCount = (var_string) => {
	var_string = var_string.replace(/(^\s*)|(\s*$)/gi,"");
	var_string = var_string.replace(/[ ]{2,}/gi," ");
	var_string = var_string.replace(/\n /,"\n");
	return var_string.split(' ').length;
}

/**
 * Returns A Random Alpha Numeric String.
	@param {number} var_limit Number
	@returns {string} String
*/
module.exports.random = (var_limit) => {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for( var i = 0; i < var_limit; i++ ) {
	  result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}