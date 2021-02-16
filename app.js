let userEntries = [];

const entriesWrapper = document.querySelector('#entries');

function addNewEntry(newEntry) {
	entriesWrapper.removeChild(entriesWrapper.firstElementChild);

	const listItem = document.createElement('li');
	const listValue = document.createTextNode(newEntry.toFixed(1));
	listItem.appendChild(listValue);

	entriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue) {
	return total + currentValue;
}

function calculateTotal(userEntries) {
	const totalValue = userEntries.reduce(reducer).toFixed(1);
	document.getElementById('total').innerText = totalValue;
	document.getElementById('progressTotal').innerText = totalValue;
}

function calculateAverage() {
	const average = (userEntries.reduce(reducer) / userEntries.length).toFixed(1);
	document.getElementById('average').innerText = average;
}

function handleSubmit(event) {
	event.preventDefault();
	const entry = Number(document.querySelector('#numberInput').value);
	if (!entry) {
		return;
	}
	document.querySelector('form').reset();
	userEntries.push(entry);
	addNewEntry(entry);
	calculateTotal(userEntries);
	calculateAverage(userEntries);
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);
