import axios from "axios";
import { app, db } from "../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
export const empcolref = collection(db, "employees");

function manageDataReducer(state = [], action) {
  switch (action.type) {
    case "GET_DATA":
      return (state = action.payload);

    case "POST_DATA":
      addDoc(empcolref, action.payload);
      return state;
    case "PUT_DATA":
      var empspref = doc(db, "employees", action.payload.id);
      updateDoc(empspref, action.payload.dataObj);
      return state;
    case "DELETE_DATA":
      var empspref = doc(db, "employees", action.payload.id);
      console.log(action.payload.id);
      deleteDoc(empspref);
      return state;
    default:
      return state;
  }
}

export default manageDataReducer;
