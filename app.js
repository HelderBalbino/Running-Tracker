let userEntries = [];

const entriesWrapper = document.querySelector('#entries');

function addNewEntry(newEntry) {
	entriesWrapper.removeChild(entriesWrapper.firstElementChild);

	const listItem = document.createElement('li');
	const listValue = document.createTextNode(newEntry);
	listItem.appendChild(listValue);

	entriesWrapper.appendChild(listItem);
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
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);
