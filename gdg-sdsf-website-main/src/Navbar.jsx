import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import banner from './assets/banner.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // GSAP animations
    useGSAP(() => {
        gsap.from(".navbar-brand img", {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(".nav-item", {
            y: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out"
        });
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`navbar navbar-expand-md ${scrolled ? 'shadow-sm' : ''}`}
            style={{
                background: scrolled ? 'rgba(33, 37, 41, 0.95)' : 'transparent',
                transition: 'all 0.3s ease-in-out',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backdropFilter: scrolled ? 'blur(10px)' : 'none'
            }}>
            <div className="container d-flex justify-content-between">
                {/* The GDG OC SDSF banner will be displayed on screens larger than 768px */}
                <div className="d-none d-md-block justify-content-start">
                    <Link className="navbar-brand" to="/">
                        <img src={banner} alt="GDG SDSF" width="350"
                            style={{
                                transition: 'all 0.3s ease',
                                transform: scrolled ? 'scale(0.9)' : 'scale(1)'
                            }} />
                    </Link>
                </div>
                {/* The GDG OC SDSF banner will be displayed on screens smaller than 768px */}
                <div className="d-block d-md-none">
                    <Link className="navbar-brand" to="/">
                        <img src={banner} alt="GDG SDSF" width="220"
                            style={{
                                transition: 'all 0.3s ease',
                                transform: scrolled ? 'scale(0.9)' : 'scale(1)'
                            }} />
                    </Link>
                </div>
                {/* Toggle button will be displayed on screens smaller than 768px */}
                <button
                    className={`navbar-toggler ${mobileMenuOpen ? '' : 'collapsed'}`}
                    type="button"
                    onClick={toggleMobileMenu}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    style={{
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none'
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${mobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link px-3 position-relative ${location.pathname === '/' ? 'active' : ''}`} to="/"
                                style={{
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        color: '#4285F4',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        color: '',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                            >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link px-3 position-relative ${location.pathname === '/events' ? 'active' : ''}`} to="/events"
                                style={{
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        color: '#EA4335',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        color: '',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                            >Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link px-3 position-relative ${location.pathname === '/flashback' ? 'active' : ''}`} to="/flashback"
                                style={{
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        color: '#FBBC05',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        color: '',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                            >Flashback</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link px-3 position-relative ${location.pathname === '/team' ? 'active' : ''}`} to="/team"
                                style={{
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        color: '#34A853',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        color: '',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                            >Team</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 position-relative" href="mailto:gdsc.sdsf@gmail.com" target='_blank'
                                style={{
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        color: '#4285F4',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        color: '',
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }}
                            >Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar