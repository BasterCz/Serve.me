import React, { useState, useEffect } from "react"
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import{auth} from "../utils/firebase"
import Router from 'next/router'
import { async } from "@firebase/util"

const Register = () =>{
    const[registerEmail, SetRegisterEmail] = useState("");
    const[registerPassword, SetRegisterPassword] = useState("");
    
    const redirect = () => Router.push('/extendRegister');
    const register = async () =>{
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);

        }catch(error : any){
            console.log(error.message)
        }
        
    }
    const allRegister = () =>{
        register();
        redirect();
    }
    return(
        <div>
            <div>
                <h3>Register</h3>
                <input 
                    placeholder="Email..." 
                    onChange={(event)=>{
                        SetRegisterEmail(event.target.value)
                    }}
                required>

                </input>
                <input 
                    placeholder="Password..."
                    onChange={(event)=>{
                        SetRegisterPassword(event.target.value)
                    }}
                required>

                </input>
                

                <button onClick={allRegister}>CreateUser</button>
            </div>
        </div>
    )
}
export default Register;