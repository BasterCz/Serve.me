import db from "../utils/firebase"; 
import {addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { EmailAuthCredential } from "@firebase/auth";
import PhoneInput from 'react-phone-number-input/input'
import { E164Number } from "libphonenumber-js/min";

const ExtendRegister = () =>{

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[nickname, setNickname] = useState("");
    const[phone, setPhone] = useState<E164Number | null>();
    console.log(phone);
    const AddData = async () =>{
        try {
            const docRef = await addDoc(collection(db, "users"), {
                email: "zemca@email.cz",
                email_verified: true,
                firstname: firstName,
                lastname: lastName,
                nickname: nickname,
                password: "zemca123",
                phone: phone,
            });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return(
        <div>
            <input 
                placeholder="First name..." 
                onChange={(event)=>{
                    setFirstName(event.target.value)
                }}
            required>

            </input>
            <input 
                placeholder="Last name..." 
                onChange={(event)=>{
                        setLastName(event.target.value)
                }}
            required>

            </input>
            <input 
                placeholder="Nickname..." 
                onChange={(event)=>{
                    setNickname(event.target.value)
                }}
            required>

            </input>
            <PhoneInput
                placeholder="Phone..." 
                onChange={setPhone}
            required>

            </PhoneInput>

            <button onClick={AddData}></button>
        </div>
    )
}
export default ExtendRegister;