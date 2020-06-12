"use strict";
/**
 * Returns First Element Of The Given Array.
	@param {array} var_array Array
	@returns {string} String
*/
module.exports.first = (var_array) => {
	if(Array.isArray(var_array)){
	  return var_array[0];
	}
	else{
	  return false;
	}
}

/**
 * Returns Last Element Of The Given Array.
	@param {array} var_array Array
	@returns {string} String
*/
module.exports.last = (var_array) => {
	if(Array.isArray(var_array)){
	  let arr_len = var_array.length;
	  return var_array[arr_len - 1];
	}
	else{
	  return false;
	}
}

/**
 * Returns A Sorted Array.
	@param {array} var_array Array
	@param {string} method - 'asc' | 'desc' => defaults to asc
	@returns {array} Array
*/
module.exports.sort = (var_array,method = false) => {
	if(Array.isArray(var_array)){
		if(method == 'desc'){
		  return var_array.sort(function(a, b){return b-a});
		}
		else{
		  return var_array.sort(function(a, b){return a-b});
		}
	}
	else{
	  return false;
	}
}

/**
 * Returns A Randomly Sorted Array.
	@param {array} var_array Array
	@returns {array} Array
*/
module.exports.randomSort = (var_array) => {
	if(Array.isArray(var_array)){
	let len = var_array.length - 1;
	let i,j,k = 0;
	for (i = len; i > 0; i--) {
	  j = Math.floor(Math.random() * i);
	  k = var_array[i];
	  var_array[i] = var_array[j];
	  var_array[j] = k;
	}
	  return var_array;
	}
	else{
	  return false;
	}
}

/**
 * Returns A Concatinated Array.
	@param {array} array1 Array
	@param {array} array2 Array
	@returns {array} Array
*/
module.exports.arrayJoin = (array1, array2) => {
	if(Array.isArray(array1) && Array.isArray(array2)){
	  return array1.concat(array2);
	}
	else{
	  return false;
	}
}

/**
 * Returns A Random Element From The Given Array.
	@param {array} var_array Array
	@returns {string} String
*/
module.exports.random = (var_array) => {
	if(Array.isArray(var_array)){
	  return var_array[Math.floor(Math.random() * var_array.length)];
	}
	else{
	  return false;
	}
}

/**
 * Returns The Lowest Element From The Given Array.
	@param {array} var_array Array
	@returns {string} String
*/
module.exports.min = (var_array) => {
	if(Array.isArray(var_array)){
	  var_array = var_array.sort(function(a, b){return a-b});
	  return var_array[0];
	}
	else{
	  return false;
	}
}

/**
 * Returns The Highest Element From The Given Array.
	@param {array} var_array Array
	@returns {string} String
*/
module.exports.max = (var_array) => {
	if(Array.isArray(var_array)){
	  var_array = var_array.sort(function(a, b){return b-a});
	  return var_array[0];
	}
	else{
	  return false;
	}
}