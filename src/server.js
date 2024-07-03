require('dotenv').config()

const app = require('./app');
app.listen(process.env.PORT, () => console.log('Running in port 3333'));