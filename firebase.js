
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
//import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  collectionGroup,
  query,
  where,
  getDocs,
  onSnapshot,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  // Put you credentials here
apiKey: "AIzaSyC7toNkMv-wUJiasgVlPy42MQrymuah96o",
  authDomain: "integrarte-db8c0.firebaseapp.com",
  projectId: "integrarte-db8c0",
  storageBucket: "integrarte-db8c0.appspot.com",
  messagingSenderId: "131854706929",
  appId: "1:131854706929:web:2192579afe3f4c5515e150"
};

console.log('hola')
export const app = initializeApp(firebaseConfig);


export const db = getFirestore();

export const auth = getAuth(app);





  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  

var userID = localStorage.getItem("UserID");
var destination = localStorage.getItem("destino");

console.log("users/"+userID)

//var holaperfil = "/users/"+userID+"negocio";


var pruebas = "/users/nOQszCqK8vUqRZ08RkheqwDibgy2/tareas"

//console.log(holaperfil)


var hola = "/users";
//console.log(holaperfil)



// Initialize Firebase





//esto va a funcionar para obtener todos los usuarios
//const querySnapshot = await getDocs(collection(db, "users"));
//querySnapshot.forEach((collection) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(collection.id, " => ", collection.data());
 //query(collectionGroup(db, "tareas"), where("uid", "==", collection.id)); 
 //console.log(query);

 //console.log(collection.data().count);


//});


      const holas = "/users/"+userID+"/"+destination;
console.log(holas)

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 * @param {string} cantidad the description of the Task
 * @param {string} uid the description of the Task
 * @param {string} email the description of the Task
 * @param {string} password the description of the Task
 */
//export const saveTask = (title, description) =>
  //addDoc(collection(db,  'users'), { title, description });


  export const aver = createUserWithEmailAndPassword(auth, email, password) => 
  {
  then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};
  export const saveTask = (title, description, cantidad, uid) =>
  addDoc(collection(db,  holas),  { title, description, cantidad, uid });

  export const onGetTasks = (callback) =>
  onSnapshot(collection(db, holas), callback); 



  export const onGetTasks21 = (callback) =>
  onSnapshot(collectionGroup(db, "tareas"), callback);

 // query(collectionGroup(db, "tareas"), where("uid", "==", collection.id)); 

  export const onGetTareas = (callback) =>
  onSnapshot(collection(db, "users"), callback); 

  export const onGetTareas2 = (callback) =>
  onSnapshot(collectionGroup(db, destination), callback); 

  

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, holas, id));

export const getTask = (id) => getDoc(doc(db, holas, id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, holas, id), newFields);

export const getTasks = () => getDocs(collection(db, userID));






