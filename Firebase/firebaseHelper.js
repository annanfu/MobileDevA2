import { database } from "./firebaseSetup";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export async function writeToDB(data, collectionName) {
  try {
    const docRef = await addDoc(collection(database, collectionName), data);
    // addDoc takes two arguments: a reference to the collection and the data to be added
    // collection takes two arguments: a reference to the database and the name of the collection
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log("Write to db", err);
  }
}

export async function updateData(data, collectionName, id) {
  try {
    await updateDoc(doc(database, collectionName, id), data);
    console.log("Document updated");
  } catch (err) {
    console.log("Update data", err);
  }
}

export async function deleteData(collectionName, id) {
  try {
    await deleteDoc(doc(database, collectionName, id));
    console.log("Document deleted");
  } catch (err) {
    console.log("Delete data", err);
  }
}