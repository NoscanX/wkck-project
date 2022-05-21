import { ref } from 'vue'
import { doc, setDoc, getFirestore, addDoc, collection, query, where, getDocs, deleteDoc, updateDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { async } from '@firebase/util';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwPHrwxBLTpw3wuKkwRzsyvMk9ZNc3Kiw",
  authDomain: "wkck-project.firebaseapp.com",
  projectId: "wkck-project",
  storageBucket: "wkck-project.appspot.com",
  messagingSenderId: "593452784250",
  appId: "1:593452784250:web:a20ca7b8c051d27325f9c3"
};

const isLoggedIn = ref(false);
const currentUserName = ref('');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

const registerUser = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log('Rejestracja pomyslna');
    })
    .catch((error) => {
        console.log('rejestracja error');
        console.log(error);
    })
}

const loginUser = async (email, password) => {
    const userc = await signInWithEmailAndPassword(auth, email, password);
    dataCurrentEmail.value = email;
    isLoggedIn.value = true;
    currentUserName.value = email;
}

const signOutUser = () => {
    signOut(auth).then(()=>{
        isLoggedIn.value = false;
        console.log("signout success");
    })
    .catch((error)=>{
        console.log("singnout error")
        console.log(error);
    });
}

function getUserName() {
    return currentUserName;
}

function getIsLoggedIn(){
    return isLoggedIn;
}

const data = ref({songs:[], books:[], others:[]})

const dataCurrentEmail = ref('');

async function setItem(item, setting){
    await addDoc(collection(db, setting), 
        {...item, email: dataCurrentEmail.value}
    );
}

async function getItem(settings) {
    const q = query(collection(db, settings), where("email", "==", dataCurrentEmail.value));
    const arr = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arr.push({id: doc.id, ...doc.data()})
    });
    return arr;
}

async function deleteItemGlobal(id, settings) {
    await deleteDoc(doc(db, settings, id));
}

async function updateFavGlobal(id, settings, item) {
    await updateDoc(doc(db, settings, id),
        {isFav: item.isFav}
    )
}

export {setItem, getItem, loginUser, deleteItemGlobal, updateFavGlobal, getIsLoggedIn, getUserName, signOutUser, registerUser};