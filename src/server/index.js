import express from 'express';
import ejs from 'ejs';

const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  // res.send('Hello Express');
  res.render('index');
});

app.listen(8000, function() {
  console.log('server is running...');
});
