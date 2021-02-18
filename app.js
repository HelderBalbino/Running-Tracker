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

function weeklyHigh() {
	const high = Math.max(...userEntries);
	document.getElementById('high').innerText = high;
}

// todo
function calculateGoal() {
	const totalValue = userEntries.reduce(reducer).toFixed(1);
	const completedPercent = totalValue / (10 / 100);
	const progressCircle = document.querySelector('#progressCircle ');
	if (completedPercent > 100) {
		alert(`Well done you have achieved your weekly goal!`);
		return completedPercent === 100;
	}
	progressCircle.style.background = `conic-gradient(#70d ${completedPercent}%, rgba(133, 132, 132, 0.233) ${completedPercent}% 100%)`;
}
// first form
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
	weeklyHigh(userEntries);
	calculateGoal(userEntries);
	addWeeklyTotal(userEntries);
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);

// second form input value for weekly target

function addWeeklyTotal(userWeeklyTarget1) {
	console.log(userWeeklyTarget1);
	document.querySelector('#target').innerText = userWeeklyTarget1;
	return userWeeklyTarget1;
}

function handleWeeklyTarget(event) {
	event.preventDefault();
	const userWeeklyTarget1 = Number(document.querySelector('#userWeeklyTarget').value);
	if (!userWeeklyTarget1) {
		return;
	}
	document.querySelector('#secondForm').reset();
	addWeeklyTotal(userWeeklyTarget1);
}
const secondForm = document.querySelector('#secondForm').addEventListener('submit', handleWeeklyTarget);
