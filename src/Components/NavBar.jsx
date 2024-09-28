
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
     useEffect(() => {
        const handleNavToggle = () => {
          document.body.classList.toggle('noscroll');
        };
    
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
          navbarToggler.addEventListener('click', handleNavToggle);
        }
    
        return () => {
          if (navbarToggler) {
            navbarToggler.removeEventListener('click', handleNavToggle);
          }
        };
    }, []);
  return (

  
    <header id="site-header" className="fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
<h1><Link className="navbar-brand" to="">
                        Real<span className="sub-color">Houzing</span>
                    </Link></h1>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about.html">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service">Services</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="contact.html">Contact</Link>
                        </li>
                    </ul>

                    <button id="trigger-overlay" className="searchw3-icon me-xl-4 me-lg-3" type="button"><i className="fas fa-search"></i></button>
                    <div className="overlay overlay-slidedown">
                        <button type="button" className="overlay-close"><i className="fas fa-times"></i></button>
                        <nav className="w3l-formhny">
                            <h5 className="mb-3">Search here</h5>
                            <form action="#" method="GET" className="d-sm-flex search-header">
<input className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search" required />
                                <button className="btn btn-style btn-primary" type="submit">Search</button>
                            </form>
                        </nav>
                    </div>
                   
                </div>
           
                <div className="mobile-position">
                    <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div className="mode-container">
                                    <i className="gg-sun"></i>
                                    <i className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    </header>

      
   
  )
}
