// 1. Firebase 설정값 넣기
const firebaseConfig = {
  apiKey: "",
  authDomain: "sabodo-82fa8.firebaseapp.com",
  projectId: "sabodo-82fa8",
  storageBucket: "sabodo-82fa8.firebasestorage.app",
  messagingSenderId: "411843694800",
  appId: "1:411843694800:web:94e40d6ec9f05cdd60ced5",
  measurementId: "G-CKBERJMFMG"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

