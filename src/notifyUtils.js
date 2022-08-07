const axios = require('axios');
const FormData = require('form-data');

async function sendNotify(message) {
	const form = new FormData();
	form.append('message', message);

	try {
		const res = await axios.post(`https://notify-api.line.me/api/notify`, form, {
			headers: {
				Authorization: `Bearer ${process.env.LINE_TOKEN}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});

		console.log(res.data);
	} catch (error) {
		console.log(error.message);
	}
}

module.exports = sendNotify;
