const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const movieRoutes = require('./routes/movies');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
    res.send('Movie app');
  });  

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Serverul ruleaza pe portul ${PORT}`);
});

