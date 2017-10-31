import * as express from 'express';
import {Application} from 'express';

import {initRestApi} from './api/api';
import {apiErrorHandler} from './apiErrorHandler';

const app: Application = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

initRestApi(app);

app.use(apiErrorHandler);


app.listen(8090, () => {
   console.log(`Server is running on port: ${8090}`);
});





// const p = findAllCourses();
// p.then(results => console.log(JSON.stringify(results)));

