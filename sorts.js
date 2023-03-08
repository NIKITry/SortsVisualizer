			var canvas = document.getElementById('canvas');
			var ctx=canvas.getContext('2d');
	
			function selectionSort (array) {
				for (let j = 0; j < array.length; j++ ) {
					let max = -Infinity;
					let index = null;

					 for (let i = 0; i<array.length - j; i++) {
					 	if (array[i] > max) {
					 		max = array[i];
					 		index = i;
					 	}
					 }

					 let changer = array[array.length - 1 - j];
					 array[array.length - 1 -j] = max;
					 array[index] = changer;
				}
				return(array);
			}




			function selectionSort1 (array) {
				for (let j = 0; j<array.length-1; j++) {
					let min = Infinity;
					let index = null;
      
					for (let i = j; i<array.length - 1; i++) {
						if (array[i]<min) {
							min = array[i];
							index = i;
						}
					}

					let changer = array[j];
					array[j] = min;
					array[index] = changer;
				}
				return(array);
			}
			


			function bubbleSort (array) {
				for (let j = 1; j<array.length-1; j++) {
					for (let i = 1; i<=array.length-j; i++) {
						if (array[i-1]>array[i]) {
							[array[i-1], array[i]] = [array[i], array[i-1]];
						}
					}
				}
				return(array);
			}


			
			
		
