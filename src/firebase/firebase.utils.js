import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

const config = {
	apiKey: "AIzaSyCWdRpAyfAcGVcSydVWFe8cRbMyvA2HfJM",
	authDomain: "crwn-clothing-29de8.firebaseapp.com",
	projectId: "crwn-clothing-29de8",
	storageBucket: "crwn-clothing-29de8.appspot.com",
	messagingSenderId: "438605294418",
	appId: "1:438605294418:web:a4e921b92d5ef26f02e88b",
	measurementId: "G-LTPCNKNMVM",
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();
	if(!snapShot.exists){
		const { displayName, email} = userAuth;
		const createdAt = new Date();
		
		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additonalData
			})
		} catch (error) {
			console.log('error creating user',error);
		}
	}
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;