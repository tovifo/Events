const express = require('express');
const usersRouter = require('./routers/usersRouter');
const eventsRouter = require('./routers/eventsRouter');
var cors = require('cors')
const app = express();
app.use(cors())

app.use(express.json())


require('./database');

app.use('/api/users', usersRouter)
app.use('/api/events', eventsRouter)


app.listen(8000);