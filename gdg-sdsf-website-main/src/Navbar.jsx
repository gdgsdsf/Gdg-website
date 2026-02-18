import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import banner from './assets/banner.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// --- ThemeToggle Component ---
const ThemeToggle = ({ isDark, setIsDark }) => {
    return (
        <div 
            onClick={() => setIsDark(!isDark)}
            className="theme-toggle-btn"
            style={{
                cursor: 'pointer',
                fontSize: '1.6rem',
                marginLeft: '20px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {isDark ? (
                <i className="bi bi-sun-fill" style={{ color: '#EA4335' }}></i>
            ) : (
                <i className="bi bi-moon-stars-fill" style={{ color: '#FBBC05' }}></i>
            )}
        </div>
    );
};

// --- Main Navbar Component ---
const Navbar = ({ isDark, setIsDark }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    useGSAP(() => {
        gsap.from(".navbar-brand img", { y: -50, opacity: 0, duration: 1, ease: "power3.out" });
        gsap.from(".nav-item", { y: -20, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power2.out" });
    }, []);

    const navStyle = {
        background: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
        transition: 'all 0.3s ease-in-out',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: scrolled ? '15px 0' : '25px 0', 
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : 'none',
    };

    return (
        <nav className={`navbar navbar-expand-md ${scrolled ? 'shadow-sm' : ''}`} style={navStyle}>
            <div className="container d-flex justify-content-between align-items-center">
                
                {/* Brand / Logo */}
                <Link className="navbar-brand" to="/">
                    <img src={banner} alt="GDG SDSF" 
                        className="nav-logo"
                        style={{
                            width: window.innerWidth < 768 ? '220px' : '350px',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: scrolled ? 'scale(0.85)' : 'scale(1)',
                            filter: 'var(--logo-filter)' 
                        }} 
                    />
                </Link>

                <div className="d-flex align-items-center">
                    <div className="d-md-none me-3">
                        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
                    </div>

                    <button
                        className={`navbar-toggler ${mobileMenuOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                    >
                        <span className="navbar-toggler-icon" style={{ filter: 'var(--toggler-filter)', width: '1.5em', height: '1.5em' }}></span>
                    </button>
                </div>

                <div className={`collapse navbar-collapse justify-content-end ${mobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        {['/', '/events', '/flashback', '/team','/contact-us'].map((path, index) => {
                            const labels = ['Home', 'Events', 'Flashback', 'Team', 'Contact Us'];
                            const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#34A853'];
                            return (
                                <li className="nav-item" key={path}>
                                    <Link 
                                        className={`nav-link px-4 ${location.pathname === path ? 'active' : ''}`} 
                                        to={path}
                                        style={{ 
                                            color: 'var(--nav-text)', 
                                            fontWeight: '600', 
                                            fontSize: '1.15rem',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => gsap.to(e.target, { color: colors[index], y: -2, duration: 0.2 })}
                                        onMouseLeave={(e) => gsap.to(e.target, { color: 'var(--nav-text)', y: 0, duration: 0.2 })}
                                    >
                                        {labels[index]}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="nav-item">
                            <a className="nav-link px-4" href="mailto:gdsc.sdsf@gmail.com" 
                                style={{ 
                                    color: 'var(--nav-text)', 
                                    fontWeight: '600', 
                                    fontSize: '1.15rem' 
                                }}>
                                Contact Us
                            </a>
                        </li>
                        
                        <li className="nav-item d-none d-md-block">
                            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;