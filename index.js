import express from 'express'
import initApp from './src/modules/app.router.js';
const app = express();
const port = 3000;
initApp(app,express);
app.listen(port, () => console.log(`Listening on port ${port}!`))