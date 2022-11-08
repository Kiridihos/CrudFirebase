// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCD1j4qei8tnlSAMA83SSzc5RaLtAAn3ik",
    authDomain: "javascriptcrud-62533.firebaseapp.com",
    projectId: "javascriptcrud-62533",
    storageBucket: "javascriptcrud-62533.appspot.com",
    messagingSenderId: "1001501927388",
    appId: "1:1001501927388:web:2dd1f137d559ee91b39119"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback);

export const saveTask = (title, description) => addDoc(collection(db, "tasks"), { title, description });

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);

