import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
	apiKey: 'AIzaSyDukw0-Nw1EgSc70ZKQepJqCT8mXp-Tf_0',
	authDomain: 'redux-firebase-60394.firebaseapp.com',
	databaseURL: 'https://redux-firebase-60394.firebaseio.com',
	projectId: 'redux-firebase-60394',
	storageBucket: 'redux-firebase-60394.appspot.com',
	messagingSenderId: '1011764918118',
	appId: '1:1011764918118:web:10935dbc2a72171dac7aa7'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection('favs');

export function getFavs(uid) {
	return db.doc(uid).get().then((snap) => {
		return snap.data().array;
	});
}

export function updateDB(array, uid) {
	return db.doc(uid).set({ array });
}

export function signOutGoogle() {
	firebase.auth().signOut();
}

export function logginWithGoogle() {
	let provider = new firebase.auth.GoogleAuthProvider();
	return firebase.auth().signInWithPopup(provider).then((snap) => snap.user);
}
