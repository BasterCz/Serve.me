import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <link href="/" /><a className="navbar-brand" href="#">Serve.me</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" /> 
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <link href="/" /><a href="#" className="nav-link active" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <link href="/" /><a href="#" className="nav-link">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">action</a></li>
            <li><a className="dropdown-item" href="#">action</a></li>
          </ul>
        </li>
      </ul>
      <Link href="/login"><a href="#" className="d-flex nav-item nav-link text-muted">Log in</a></Link>
      <Link href="/register"><a href="#" className="d-flex nav-item nav-link">Sign in</a></Link>
    </div>
  </div>
</nav>

    )
}