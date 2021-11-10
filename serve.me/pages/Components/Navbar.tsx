import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
  return(
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <Link href="/"><a class="navbar-brand" href="#">Serve.me</a></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span> 
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href="/"><a href="#" class="nav-link active" aria-current="page">Home</a></Link>
            </li>
            <li class="nav-item">
              <Link href="/"><a href="#" class="nav-link">Link</a></Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">action</a></li>
                <li><a class="dropdown-item" href="#">action</a></li>
              </ul>
            </li>
            
          </ul>
          <Link href="/Login"><a href="#" class="d-flex nav-item nav-link text-muted">Log in</a></Link>
          <Link href="/Register"><a href="#" class="d-flex nav-item nav-link">Sign in</a></Link>

        </div>
        
      </div>

    </nav>
    )
}
