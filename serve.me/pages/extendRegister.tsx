import db from "../utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { EmailAuthCredential } from "@firebase/auth";
import PhoneInput from 'react-phone-number-input/input'
import { E164Number } from "libphonenumber-js/min";
import Head from 'next/head'
const ExtendRegister = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [phone, setPhone] = useState<E164Number | null>();
    console.log(phone);
    const AddData = async () => {
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

    return (
        <div>
            <Head>
                <title>Serve.me</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="vh-100">
                <div className="container-fluid h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Register</p>
                                </div>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0" />
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example3" className="form-control form-control-lg" placeholder="First Name..." onChange={(event) => {
                                        setFirstName(event.target.value)
                                    }}
                                        required />
                                    <label className="form-label" htmlFor="form3Example3">First name</label>
                                </div>
                                <div className="form-outline mb-3">
                                    <input type="texts" id="form3Example4" className="form-control form-control-lg" placeholder="Last name..." onChange={(event) => {
                                        setLastName(event.target.value)
                                    }}
                                        required />
                                    <label className="form-label" htmlFor="form3Example4">Second name</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example3" className="form-control form-control-lg" placeholder="Nickname..."
                                        onChange={(event) => {
                                            setNickname(event.target.value)
                                        }}
                                        required/>
                                    <label className="form-label" htmlFor="form3Example3">Nickname</label>
                                </div>
                                <div className="form-outline mb-3">
                                    <PhoneInput id="form3Example4" className="form-control form-control-lg" placeholder="Phone..."
                                        onChange={setPhone}
                                        required />
                                    <label className="form-label" htmlFor="form3Example4">Phone number</label>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }} onClick={AddData}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>
                </div>
            </section>
        </div>




        // <div>
        //     <input 
        //         placeholder="First name..." 
        //         onChange={(event)=>{
        //             setFirstName(event.target.value)
        //         }}
        //     required>

        //     </input>
        //     <input 
        //         placeholder="Last name..." 
        //         onChange={(event)=>{
        //                 setLastName(event.target.value)
        //         }}
        //     required>

        //     </input>
        //     <input 
        //         placeholder="Nickname..." 
        //         onChange={(event)=>{
        //             setNickname(event.target.value)
        //         }}
        //     required>

        //     </input>
        //     <PhoneInput
        //         placeholder="Phone..." 
        //         onChange={setPhone}
        //     required>

        //     </PhoneInput>

        //     <button onClick={AddData}></button>
        // </div>
    )
}
export default ExtendRegister;