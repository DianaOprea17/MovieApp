const admin = require('firebase-admin');

const serviceAccount = require('./db_credentials/movie-app-f2b71-firebase-adminsdk-yugax-7deac685ad.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://movie-app-f2b71.firebaseio.com'
});

const db = admin.firestore();

module.exports = db;
