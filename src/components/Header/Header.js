import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="header-container container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top  d-flex justify-content-end align-items-center">
                    <div className="container w-50 ms-0 ps-3">
                    </div>
                    <button
                        className="navbar-toggler navbar-toggler-right bg-light me-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse hamburger-custom-navbar" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder fs-6">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Service & Package</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>

        </>
    );
};

export default Header;