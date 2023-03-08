window. addEventListener('load', main, false);
function main () {

	var canvas = document.getElementById('canvas');	
	var ctx=canvas.getContext('2d');
	var h = canvas.height = 550;
	var w = canvas.width = 550;
	var array = [];
	var selection = document.getElementById('selectSort').options.selectedIndex;
	var plenty = [];
	var plentyValue = [];
	var plentyIndex = [];
	var k = 0;
	var z = 0;
	var check = true;
	// var i1 = null
	// var i2 = null


	function createArray() {
		for (let i = 0; i < 100; i++) {
			array[i] = Math.floor(Math.random() * 100 + 1);
		}
	} 


	function buildArray(array) {
		ctx.clearRect(0, 0, w, h);
		ctx.strokeStyle = 'green';
		ctx.lineWidth = 4;

		for (let i = 1; i <= array.length; i++) {
			ctx.beginPath();
			ctx.moveTo((w/100*(i-1) + w/100*i)/2 + 3, h);
			ctx.lineTo((w/100*(i-1) + w/100*i)/2 + 3, h - array[i] * 5,9);
			ctx.stroke();
		}
	}

	function bubbleSort (array) {
		for (let j = 1; j<array.length-1; j++) {
			for (let i = 1; i<=array.length-j; i++) {
				if (array[i-1]>array[i]) {
					[array[i-1], array[i]] = [array[i], array[i-1]];
					plenty.push([...array]);
					plentyIndex.push(i-1);
					plentyValue.push(array[i-1])
				}
			}
		}
	}

	function selectionSort (array) {
				for (let j = 0; j < array.length; j++ ) {
					let max = -Infinity;
					let index = null;

					for (let i = 0; i<array.length - j; i++) {
					 	if (array[i] > max) {
					 		max = array[i];
					 		index = i;
					 	}
					 	plenty.push([...array]);
						plentyIndex.push(i-1);
						plentyValue.push(array[i-1])
					}
					let changer = array[array.length - 1 - j];
					array[array.length - 1 -j] = max;
					array[index] = changer;
					
				}
				return(array);
			}

	function drawSorted () {
		k++
		ctx.clearRect(0, 0, w, h);
		ctx.strokeStyle = 'green';
		ctx.lineWidth = 4;

		for (let i = 1; i < array.length; i++) {
			ctx.beginPath();
			ctx.strokeStyle = 'green';
			ctx.moveTo((w/100*(i-1) + w/100*i)/2 + 3, h);
			ctx.lineTo((w/100*(i-1) + w/100*i)/2 + 3, h - plenty[k-1][i-1] * 5,5);
			ctx.stroke();

			// ctx.beginPath();
			// ctx.strokeStyle = 'red';
			// ctx.moveTo((w/100*(plentyIndex[z-1]) + w/100*(plentyIndex[z]))/2 + 3, h);
			// ctx.lineTo((w/100*(plentyIndex[z-1]) + w/100*(plentyIndex[z]))/2 + 3, h - plentyValue[k] * 5,5);

			// ctx.moveTo((w/100*(plentyIndex[z]) + w/100*(plentyIndex[z+1]))/2 + 3, h);
			// ctx.lineTo((w/100*(plentyIndex[z]) + w/100*(plentyIndex[z+1]))/2 + 3, h - plentyValue[k+1] * 5,5);


			ctx.stroke();
			if (k > plenty.length-1) {
				clearInterval(id);
			}
		}
		// z++
	}	


	newArray.onclick = function () {
		ctx.clearRect(0, 0, w, h);
		array = []
		check=true 
		createArray();
		console.log(array, 'New array')
		buildArray(array);
	}


	Sort.onclick = function () {
		if (check===true) {
			if (document.getElementById('selectSort').options.selectedIndex === 0) {
				selectionSort(array);
				console.log(array, 'Sorted array');
				id = setInterval(drawSorted,100/60);
				check=false;
			} else {
				bubbleSort(array);
				console.log(array, 'Sorted array');
				id = setInterval(drawSorted,100/60);
			}
		} else {   
			alert('Press New array');
		}
	}

	clear.onclick = function () {
		check === false;
		clearInterval(id);
		ctx.clearRect(0, 0, w, h);
		
	}


	

	
	


	
	
	























}