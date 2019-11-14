class StringCalculator {

	add(numbers) {

		let results = 0;
		let negatives = this.negatives(numbers);

		numbers = numbers.split(/\D/);

		for (var i = 0; i < numbers.length; i++) {
			// Convert to number
			let number = parseInt(numbers[i]); 

			// Throw error of negative numbers
		 	if (negatives) {
		 		throw('Negative ' + negatives + 'not allowed');
			}

			// Reset number to 0 if greater than 1000
		 	if (number > 1000) {
		 		number = 0;
			}
			
		 	if (number) {
		 		// Accept value if it's a number
				results += number;
			}
		}

		return results;
	}

	negatives(string) {
		let str = '';
		let numbers = string.split(/\D/);

		for (var i = 0; i < string.length; i++) {
			if (string[i] == '-' && !isNaN(string[i+1])) {
				str += numbers[i+1] +' ';
			}
		}

		return str;
	}

}

module.exports = { StringCalculator }