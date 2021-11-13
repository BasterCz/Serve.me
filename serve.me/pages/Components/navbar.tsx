import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavBar className="navbar navbar-expand-md navbar-dark bg-nav fixed-top rounded-manual">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link href="/">
            <a className="navbar-brand">Serve.me</a>
          </Link>
          <Link href="/">
            <a className="navbar-brand"></a>
          </Link>
        <InnerContainer className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 center-me">
              <li className="nav-item justify-content-center">
                <Link href="/">
                  <a
                    href="#"
                    className="nav-link active nav-text"
                    aria-current="page"
                  >
                    RESTAURACE
                  </a>
                </Link>
              </li>
              <li className="nav-item justify-content-center">
                <Link href="/">
                  <a href="#" className="nav-link active nav-text">
                    OBJEDNÁVKY
                  </a>
                </Link>
              </li>
              <li className="nav-item justify-content-center">
                <Link href="/">
                  <a href="#" className="nav-link active nav-text">
                    PROFIL
                  </a>
                </Link>
              </li>
            </ul>
            <User className="center">
              <Link href="/login">
              <a href="#" className="d-flex nav-item nav-link white">
                <button type="button" className="btn btn-light btn-lg">
                  Log in
                </button>
              </a>
            </Link>
            <Link href="/register">
              <a href="#" className="d-flex nav-item nav-link white">
                <button type="button" className="btn btn-light btn-lg">
                  Sign in
                </button>
              </a>
            </Link>
            </User>
            
        </InnerContainer>
          
        </div>
    </NavBar>
  );
}

const NavBar = styled.nav`
padding-bottom:0px;
.container-fluid {
  padding-left:0px;
  padding-right: 0px;
}
.container-fluid button{
  margin-left :5vw;

}
.navbar-brand {
  margin-right: 2.2 rem;
}
.show {
  height: 85vh;
};
  border-radius: 0% 0% 5vw 5vw;

`;
const InnerContainer = styled.div`
background-color:white;
border-radius: 5vw;
.nav-text {
  color: red !important;
}

.center-me {
  justify-content:center;
  align-items: center;
  height:60%;
}
`;
const User = styled.div`
margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
    bottom: 10vw;
  a button{
    margin-left: 0px !important;
    background-color:white;
    color: red;
    box-shadow: 0 3px 10px -5px rgba(0,0,0,0.8);
    
  }
  
`;
