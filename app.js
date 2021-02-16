function handleSubmit(event) {
	event.preventDefault();
	const entry = Number(document.querySelector('#numberInput').value);
	console.log(entry);
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);
