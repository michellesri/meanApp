// the entry point for my app
const app = require('./lib/app');
const port = process.argv[2] || process.env.PORT || 9000;
require('./lib/setup-mongoose'); //initialize the connection to the mongodb.

app.listen(port, (err) => {
  if(err){
    return console.log(err);
  } else {
    console.log('server started at: ' + port);
  }
});
