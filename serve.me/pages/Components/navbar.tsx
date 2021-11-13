import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-md navbar-dark bg-nav fixed-top">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" /> 
    </button>
    <Link href="/"><a className="navbar-brand">Serve.me</a></Link>
    <Link href="/"><a className="navbar-brand"></a></Link>

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item justify-content-center">
          <Link href="/" ><a href="#" className="nav-link active nav-text" aria-current="page">RESTAURACE</a></Link>
        </li>
        <li className="nav-item justify-content-center">
          <Link href="/" ><a href="#" className="nav-link active nav-text">OBJEDNAVADKY</a></Link>
        </li>
        <li className="nav-item justify-content-center">
          <Link href="/" ><a href="#" className="nav-link active nav-text">PROFIL</a></Link>
        </li>
      </ul>
      <Link href="/login"><a href="#" className="d-flex nav-item nav-link white"><button type="button" className="btn btn-light btn-lg">Log in</button></a></Link>
      <Link href="/register"><a href="#" className="d-flex nav-item nav-link white"><button type="button" className="btn btn-light btn-lg">Sign in</button></a></Link>

      
      
    </div>
  </div>
</nav>

    )
}