import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8vOYCPMBT4p-19dulNsZYJVDJeSoUT64",
  authDomain: "web-course-application.firebaseapp.com",
  projectId: "web-course-application",
  storageBucket: "web-course-application.appspot.com",
  messagingSenderId: "521883006848",
  appId: "1:521883006848:web:c592af4bc104eea66d3365",
  measurementId: "G-3141MB5H7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();