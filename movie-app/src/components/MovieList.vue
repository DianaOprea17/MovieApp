<template>
    <div>
      <h1>Movies</h1>
      <form @submit.prevent="addMovie">
        <input v-model="newMovie.title" placeholder="Movie title" required />
        <button type="submit">Add Movie</button>
      </form>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          {{ movie.title }}
          <button @click="deleteMovie(movie.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        newMovie: {
          title: '',
        },
      };
    },
    computed: {
      ...mapGetters(['movies']),
    },
    methods: {
      ...mapActions(['fetchMovies', 'addMovie', 'deleteMovie']),
    },
    mounted() {
      this.fetchMovies();
    },
  };
  </script>
  