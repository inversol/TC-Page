    // Import the functions you need from the SDKs you need
    import { initializeApp } from  'firebase/app';
    import { getAuth } from  "firebase/auth";

    

    const firebaseConfig = {
      apiKey: "AIzaSyCEI-rVAAJwzMklQbhB3WAWWpatjsXOkHo",
      authDomain: "preciosinversol.firebaseapp.com",
      projectId: "preciosinversol",
      storageBucket: "preciosinversol.appspot.com",
      messagingSenderId: "1045771161708",
      appId: "1:1045771161708:web:b31f49735fb99877440849",
      measurementId: "G-KC8RZN18X6",
    };




    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    