import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import {auth} from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const app = createApp(App);
app.use(router).use(store).mount('#app');

onAuthStateChanged(auth, (user) =>{
    if(user){
        console.log('User is signed in: ', user.email);
        router.push('/home');
    }else{
        console.log('No user is signed in');
        router.push('/login');
    }
});
