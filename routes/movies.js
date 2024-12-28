const express = require('express');
const router = express.Router();
const MovieManager = require('../movieManagement');
const db = require('../firebase');

//obtine lista de filme
router.get('/movies', async(req, res) => {
    try {
        const movieData = req.body;
        const movieRef = await db.collection('movies').add(movieData);  // Folosește 'movies'
        res.status(201).json({ id: movieRef.id });
      } catch (error) {
        res.status(500).json({ error: 'Failed to add movie', details: error });
      }
});

//adauga un nou film
router.post('/add', async(req, res) => {
    try {
        const movieData = req.body;
        const movieRef = await db.collection('movies').add(movieData);
        res.status(201).json({ id: movieRef.id });
      } catch (error) {
        res.status(500).json({ error: 'Failed to add movie', details: error });
      }
});

//sterge un film
router.delete('/:id', (req, res) => {
    const deletedMovie = MovieManager.deleteMovie(req.params.id);
    res.status(200).send(deletedMovie);
});

module.exports = router;
