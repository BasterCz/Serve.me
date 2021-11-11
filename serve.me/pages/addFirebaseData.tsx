import db from "../utils/firebase"; 
import { collection, onSnapshot, DocumentData, doc, addDoc} from "@firebase/firestore";
import { useEffect, useState } from "react";

const AddData = async () =>{
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const FireAddData = () =>{
    return(
        <div>
            <button onClick={AddData}></button>
        </div>
    )
}
export default FireAddData;