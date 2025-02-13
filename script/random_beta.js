document.getElementById('randomForm').addEventListener('submit', function (event) {
	event.preventDefault();
	const minValue = parseFloat(document.getElementById('minValue').value);
	const maxValue = parseFloat(document.getElementById('maxValue').value);
	const count = parseInt(document.getElementById('count').value);
	const decimalPlaces = parseInt(document.getElementById('decimalPlaces').value);

	fetch('generate.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `min=${minValue}&max=${maxValue}&count=${count}&decimal=${decimalPlaces}`
	})
		.then(response => response.json())
		.then(data => {
			if (data.error) {
				alert(data.error);
			} else {
				const resultDiv = document.getElementById('result');
				resultDiv.innerHTML = `<span>${data.randomNumbers.join(', ')}</span>`;
			}
		})
		.catch(error => {
			console.error('Error:', error);
		});
});