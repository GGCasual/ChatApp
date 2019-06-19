let express = require('express');
let app = express();
let port = 3000;
let session = require('express-session');
let bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(require('./routes/categories.js'))





app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

