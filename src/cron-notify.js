// Load ENV
const cron = require('node-cron');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Load Function
const sendNotify = require('./notifyUtils');

// Send notify every 5 minutes
cron.schedule('*/5 * * * *', function () {
	sendNotify(process.env.MESSAGE);
});
