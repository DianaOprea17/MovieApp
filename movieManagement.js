let movies = [];

const getMovies = () => movies;

const addMovie = (movie) => {
    movie.id = movies.length + 1;
    movies.push(movie);
    return movie;
};

const deleteMovie = (id) => {
    const index = movies.findIndex((movie) => movie.id == id);
    if (index !== -1) {
        return movies.splice(index, 1)[0];
    }
    return { error: 'Movie not found' };
};

module.exports = { getMovies, addMovie, deleteMovie };