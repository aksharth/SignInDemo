import React, { useEffect, useState } from 'react';

function Header() {



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow">
            <div className="container-fluid">
                <a className="navbar-brand logo ms-4" href="#">Company Name</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="assets/img/menu1.png"/>
                </button>
                <div className="collapse navbar-collapse" id="main_nav">

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link menu" href="#"> SIGN IN </a></li>
                        <li className="nav-item"><a className="nav-link menu" href="#"> PROGRAM </a></li>
                        <li className="nav-item"><a className="nav-link menu" href="#"> CONTACT </a></li>
                        <li className="nav-item"><a className="nav-link menu" href="#"> BECOME A PARTNER </a></li>

                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;
