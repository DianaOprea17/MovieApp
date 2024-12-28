const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const movieRoutes = require('./routes/movies');
const db = require('./firebase');

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

//firebase
app.post('/add', async(req, res) => {
  try{
    console.log(req.body);
    const movieData = req.body;
    const movieRef = await db.collection('movies').add(movieData);
    res.status(201).json({id:movieRef.id});
  }catch(error){
    res.status(500).json({error: 'Failed to add movie', details: error});
  }
})

app.get('/movies', async (req, res) => {
  try {
    const snapshot = await db.collection('movies').get();
    const movies = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get movies', details: error });
  }
});

const movieRoute = require('./routes/movies');
