<template>
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <div class="input-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="input-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" class="signup-btn">Sign Up</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
      <p class="login-link">
        Already have an account? <router-link to="/login">Log in</router-link>
      </p>
    </div>
  </template>
  
  <script>

  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
  
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
      };
    },
    methods: {
      async signUp() {
        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Passwords do not match!';
          return;
        }
        const auth = getAuth();
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push('/dashboard'); 
        } catch (error) {
          this.errorMessage = 'Error creating account. Please try again.';
        }
      },
    },
  };
  </script>
  
  <style src="@/styles/Signup.css"></style>
  