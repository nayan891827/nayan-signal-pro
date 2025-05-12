import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebaseConfig";

const db = getFirestore(app);

export async function fetchSignals(mode) {
  const querySnapshot = await getDocs(collection(db, "signals"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((signal) => signal.mode === mode);
}