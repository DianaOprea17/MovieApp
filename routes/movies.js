const express = require('express');
const router = express.Router();
const MovieManager = require('../movieManagement');

//obtine lista de filme
router.get('/', (req, res) => {
    res.status(200).send(MovieManager.getMovies());
});

//adauga un nou film
router.post('/', (req, res) => {
    const movie = req.body;
    const addedMovie = MovieManager.addMovie(movie);
    res.status(201).send(addedMovie);
});

//sterge un film
router.delete('/:id', (req, res) => {
    const deletedMovie = MovieManager.deleteMovie(req.params.id);
    res.status(200).send(deletedMovie);
});

module.exports = router;
