const express = require('express');
const app = express();

app.use((req, res, next) => {
    return res.send('Aws Test');
});

app.listen(3000, () => {
    console.log('Listening to port 3000...');
});