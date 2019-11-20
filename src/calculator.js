class StringCalculator {

	add(numbers) {

		let results = 0;
		let negatives = this.negatives(numbers);

		numbers = numbers.split(/\D/);

		numbers.forEach(val => {
			// Convert to number
			let number = parseInt(val); 

			// Throw error of negative numbers
		 	if (negatives) {
		 		throw('Negative ' + negatives + ' not allowed');
			}

			// Reset number to 0 if greater than 1000
		 	if (number > 1000) {
		 		number = 0;
			}
			
		 	if (number) {
		 		// Accept value if it's a number
				results += number;
			}
		})

		return results;
	}

	// Return string of negative numbers
	negatives(string) {
		let str = '';
		let num = string.split(',');

		num.forEach(val => {			
			if (val.includes('-')) {
				str += val;
			}
		});

		return str;
	}

}

const calculator = new StringCalculator();

module.exports = { StringCalculator }