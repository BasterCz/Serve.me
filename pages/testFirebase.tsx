import db from "../utils/firebase"; 
import { collection, onSnapshot, DocumentData, addDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";

type Props = {
    stars : number, 
    review : string | undefined
}

const Firetest:React.FC<Props> = ({stars, review}) =>{

    const[ restaurant, SetRestaurant ] = useState<DocumentData>([]);

    const id = "bRJEievJ4E4VTWzlJpmW";

    useEffect(() => {
        onSnapshot(collection(db, "restaurants"), snapshot => {
            const data = snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id}));
            const oneData = data?.find(x => x.id === id);
            if(data){
                SetRestaurant(oneData);
            }
        })
        
    },[])

    const docRef = {
        stars: stars,
        review: review
    }
    console.log(docRef)
    
    return(
        <>
            {
                addDoc(collection(db, "stpatric"), docRef)
            }
        </>
    )
}
export default Firetest;