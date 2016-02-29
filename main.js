// #1
function removeDuplicates(array){
	var remove = [];
	for (i = 0; i < array.length; i++){
		if ( i  === 0 || array[i] !== array[i-1] ){
			remove.push(array[i]);
		}
	}
	return remove
}


var secondGreatLow = function(numbers) {
  var array = removeDuplicates(numbers);
  array.sort(function(a,b) { 
  	return a-b; 
  });
  return array[1] + ' ' + array[array.length-2];
};

console.log(secondGreatLow([7,7,12,98,106]))

// #2 
function timeConvert(num){
	var hours = Math.floor(num/60);
	var minutes = num % 60;
	return hours + ":" + minutes
}

console.log(timeConvert(350))