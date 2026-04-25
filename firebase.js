import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, increment } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyd3-u_uHofFbR49UGUUV5CiPDLRudXNI",
  authDomain: "m2mnm2ir.firebaseapp.com",
  projectId: "m2mnm2ir",
  storageBucket: "m2mnm2ir.firebasestorage.app",
  messagingSenderId: "329607977778",
  appId: "1:329607977778:web:373fd066dcb0e7c157552b",
  measurementId: "G-B9XGT1HZC8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const recordVisit = async () => {
    try {
        const statsRef = doc(db, 'stats_ir', 'visitors');
        await setDoc(statsRef, { count: increment(1) }, { merge: true });
        console.log("IR Visitor recorded!");
    } catch (e) {
        console.error("Error updating IR visitor count: ", e);
    }
};

recordVisit();

window.recordResultIR = async (category) => {
    try {
        const statsRef = doc(db, 'stats_ir', 'results');
        const updateData = {};
        updateData[category] = increment(1);
        
        await setDoc(statsRef, updateData, { merge: true });
        console.log(`IR Result recorded for: ${category}`);
    } catch (e) {
        console.error("Error updating IR result count: ", e);
    }
};
