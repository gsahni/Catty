//This file contains all the configuration keys 
exports.port = process.env.PORT || 8085;
exports.apiKey = '87p9fwvhsh77xfj7fmz2ta5d';
exports.log_path = './log/cats/logs/';
exports.sentryDsn = 'https://3dd9d80c259e43b7b850f3f60a7c2450:14102794a13c4ae1b5366b950d040c89@app.getsentry.com/87330';
exports.newrelic = {
    appName: 'Catty',
    key: '77a9165865c5a6017406bb95b81f5c5038b09a4d'
}

