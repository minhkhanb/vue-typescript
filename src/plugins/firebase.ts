import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import FirebaseConfig from '@/config/firebase';

firebase.initializeApp(FirebaseConfig);
export const Firestore = firebase.firestore();
export const Auth = firebase.auth();
export const Storage = firebase.storage();
