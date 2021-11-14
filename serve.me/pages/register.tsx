import React, { useState, useEffect } from "react"
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import{auth} from "../utils/firebase"
import Router from 'next/router'
import { async } from "@firebase/util"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'  
import Navbar from "./Components/navbar"
import styled from "styled-components"

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
          <Head>
                <title>Serve.me</title>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
                <meta charSet="utf-8" />
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                <link rel="icon" href="/favicon.ico" /> 
            </Head>
            <Navbar/>
            <section className="vh-100">
          <Container className="container-fluid h-100">
          <style jsx global>{`
          body {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url('/pexels-daria-shevtsova-3596688.jpg');
          }
        `}</style>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3 h1 title-me">Registrace</p>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0" />
                </div>
                <div className="form-outline mb-4 input">
                  <input type="email" id="form3Example3" className="input-field"  onChange={(event)=>{
                        SetRegisterEmail(event.target.value)
                    }}
                required/>
                  <label className="form-label input-label" htmlFor="form3Example3">Email address</label>
                </div>
                <div className="form-outline mb-3 input">
                  <input type="password" id="form3Example4" className="input-field"  onChange={(event)=>{
                        SetRegisterPassword(event.target.value)
                    }}
                required/>
                  <label className="form-label input-label" htmlFor="form3Example4">Password</label>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2 d-grid gap-2">
                  <button type="button" className="btn btn-danger btn-lg boton" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}} onClick={allRegister}>Register</button>
                </div>
              </form>
            </div>
          </div>
        </Container>
        
      </section>
        </div> 
    )
}
export default Register;

const Container = styled.div`
.title-me {
  color:white;
  font-size: 2rem;
}`;
