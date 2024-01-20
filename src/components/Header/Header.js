import { useState, useEffect } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);

            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToServices = () => {
        const targetElement = document.getElementById('scrollToHomeServices');
        const navbarNav = document.getElementById('navbarNav');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            navbarNav.classList.remove("show");
        }
    };

    const scrollToPrice = () => {
        const targetElement = document.getElementById('scrollToHomePrice');
        const navbarNav = document.getElementById('navbarNav');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            navbarNav.classList.remove("show");
        }
    };

    const scrollToContact = () => {
        const targetElement = document.getElementById('scrollToHomeContact');
        const navbarNav = document.getElementById('navbarNav');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            navbarNav.classList.remove("show");
        }
    };

    const scrollToAboutUs = () => {
        const targetElement = document.getElementById('scrollToHomeAboutUs');
        const navbarNav = document.getElementById('navbarNav');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            navbarNav.classList.remove("show");
        }
    };

    return (
        <div>
            <div className={`${scrolling ? 'home-navbar-header-blur' : ''}`}></div>
            <nav className="navbar-dark navbar navbar-expand-xl">
                <div>
                    <div className='home-nav-background'></div>
                    <div className='home-nav-background-overlay'></div>
                </div>
                <div className='home-nav-bg-content-main'>
                    <div className='home-nav-bg-content'>
                        <h1>Aesthetic
                            Detail Studio</h1>
                        <h2>We have everything for your car's beauty.</h2>
                        <div className='home-nav-bg-btn'>
                            <button onClick={scrollToContact}>
                                Book an appointment</button>
                        </div>
                    </div>
                </div>
                <div className='home-nav-main'>
                    <div className={`container-fluid ${scrolling ? 'header-scroll' : ''}`}>
                        <a className='navbar-brand home-navbar-brand' href="/Carcarelt/">CARCARELT</a>
                        <button id='toggler' className="navbar-toggler home-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" className='home-nav-toggler-span' width="27" height="27" viewBox="0 0 23 16">
                                <g className='home-nav-toggler-svg' fillRule="evenodd" strokeLinecap="round" strokeWidth="1.6">
                                    <path d="M3.429.75h15M1.429 7.75h20M3.429 14.80h15" />
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="home-navbar-close-svg" viewBox="0 0 1024 1024" version="1.1">
                                <path d="M777.856 280.192l-33.92-33.952-231.872 231.872-231.84-231.872-33.984 33.888 231.872 231.904-231.84 231.84 33.888 33.984 231.904-231.904 231.84 231.872 33.952-33.888-231.872-231.904z" />
                            </svg>
                        </button>
                        <div className='collapse navbar-collapse home-navbar-link' id="navbarNav">
                            <ul className={`navbar-nav ${scrolling ? 'home-navbar-collapse-background' : ''}`}>
                                <li className="nav-item home-navbar-li">
                                    <button className='nav-link home-navbar-link' onClick={scrollToServices}>Our services</button>
                                </li>
                                <li className="nav-item home-navbar-li">
                                    <button className='nav-link home-navbar-link' onClick={scrollToPrice}>Prices</button>
                                </li>
                                <li className="nav-item home-navbar-li">
                                    <button className='nav-link home-navbar-link' onClick={scrollToAboutUs}>About us</button>
                                </li>
                            </ul>
                        </div>
                        <div className='home-nav-contact-svg'>
                            <button className='nav-link nav-link-svg' onClick={scrollToContact}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="23px" width="23px" version="1.1" id="Capa_1" viewBox="0 0 202.592 202.592">
                                    <g>
                                        <g>
                                            <path d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761    c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874    c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769    c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816    c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055    c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747    C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507    c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235    C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497    c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282    c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067    c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279    C193.5,169.446,193.31,173.537,190.683,176.164z" />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header;