import db from "../utils/firebase"; 
import { collection, onSnapshot, DocumentData, doc, } from "@firebase/firestore";
import { useEffect, useState } from "react";

const Firetest = () =>{
    const[restaurants,SetRestaurant] = useState<DocumentData>([]);

    useEffect(() => {
        onSnapshot(collection(db, "restaurants"), snapshot => {
            const data = snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id}));
            if(data){
                SetRestaurant(data);
            }
        })
        
    },[])
    return(
        <>
            {
                Object.keys(restaurants).map((key,index)=> {
                    const name = restaurants[key].name;
                    console.log(name);
                })
            }
        </>
    )
}
export default Firetest;