const express = require ('express');
const routesApi = require ('./route');
const cors = require('cors');

const {logError, errorHandle, boomErrorHandle} = require("./middlewares/errorHandler")


const app = express();
const port = 3005;

// const whiteList = ['http://localHost:8080', 'http://127.0.0.1:5500']
// const optionsCors = {
//   origin: (origin, callback) => {
//     if(whiteList.includes(origin)) {
//       callback(null,true);
//     } else {
//       callback(new Error('No access'))
//     }
//   }
// };

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello this is my serve to express')
});

app.get('/route-new', (req, res) => {
  res.send('Hello this is my route')
});

routesApi(app);

app.use(logError);
app.use(boomErrorHandle);
app.use(errorHandle);

app.listen(port, () => {
  console.log('mi port ' + port)
});
