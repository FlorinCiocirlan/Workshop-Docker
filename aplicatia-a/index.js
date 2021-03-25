const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => {
	res.send('Salut de la aplicatia A !!!!');
});

app.get('/find-app-b', (req, res) => {
	fetchData(res);
});

async function fetchData(res) {
	await axios.get('http://aplicatie-b:4001/get-message').then((response) => {
		res.send(response.data);
	});
}

app.listen(4000, () => {
	console.log('aplicatia a ruleaza pe portul 4000');
});
