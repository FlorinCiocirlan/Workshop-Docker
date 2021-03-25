const express = require('express');
const app = express();

app.get('/get-message', (req, res) => {
	res.send('Salut, aplicatie A!');
});

app.listen(4001, () => {
	console.log('aplicatia b ruleaza pe portul 4001');
});
