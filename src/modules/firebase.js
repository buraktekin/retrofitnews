import firebase from 'firebase';
// Initialize Firebase
var config = {
	apiKey: "AIzaSyAnvhti4sRGXLwsALGX_AXBkOuCYop8j5s",
	authDomain: "vuenews-8437b.firebaseapp.com",
	databaseURL: "https://vuenews-8437b.firebaseio.com",
	projectId: "vuenews-8437b",
	storageBucket: "vuenews-8437b.appspot.com",
	messagingSenderId: "1009792955903"
};

const fb = firebase.initializeApp(config);

export default {
	Firebase: fb,
	Database: fb.database()
}