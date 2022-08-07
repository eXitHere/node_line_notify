const cron = require('node-cron');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Load Function
const sendNotify = require('./notifyUtils');

(async () => {
	await sendNotify(process.env.MESSAGE);
})();
