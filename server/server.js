import Express from 'express';
import GraphHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import path from 'path';

import Schema from './schema';


const APP_PORT = 4000;

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.end();
  }
  next();
});
app.use('/graphql', GraphHTTP({
  schema: Schema,
  graphiql: true,
  pretty: true,
}));
app.use(Express.static('public'));

app.get('/', (req, res) => {
  res.sendfile(path.resolve(__dirname, './../public', 'index.html'));
});


app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`); // eslint-disable-line no-console
});
