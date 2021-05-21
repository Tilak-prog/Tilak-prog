import fb from 'firebase/app';
import 'firebase/auth';

//firebase.apps.length prevents next.js from re-initalizing SDK when next.js hot reloads your application


if (typeof window !== 'undefined' && !fb.apps.length) {
  fb.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_ADMIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  });
  fb.auth().setPersistence(fb.auth.Auth.Persistence.SESSION);
}

export { fb as firebase };

