"use strict";
module.exports.first = (var_array) => {
	if(Array.isArray(var_array)){
	  return var_array[0];
	}
	else{
	  return false;
	}
}

module.exports.last = (var_array) => {
	if(Array.isArray(var_array)){
	  let arr_len = var_array.length;
	  return var_array[arr_len - 1];
	}
	else{
	  return false;
	}
}

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

module.exports.arrayJoin = (array1, array2) => {
	if(Array.isArray(array1) && Array.isArray(array2)){
	  return array1.concat(array2);
	}
	else{
	  return false;
	}
}

module.exports.random = (var_array) => {
	if(Array.isArray(var_array)){
	  return var_array[Math.floor(Math.random() * var_array.length)];
	}
	else{
	  return false;
	}
}

module.exports.min = (var_array) => {
	if(Array.isArray(var_array)){
	  var_array = var_array.sort(function(a, b){return a-b});
	  return var_array[0];
	}
	else{
	  return false;
	}
}

module.exports.max = (var_array) => {
	if(Array.isArray(var_array)){
	  var_array = var_array.sort(function(a, b){return b-a});
	  return var_array[0];
	}
	else{
	  return false;
	}
}