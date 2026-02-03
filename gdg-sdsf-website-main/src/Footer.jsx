import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import gdg_logo from './assets/gdg_logo.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
    useGSAP(() => {
        gsap.from(".footer-logo", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        gsap.from(".footer-text", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out"
        });

        gsap.from(".footer-social-icon", {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            delay: 0.4,
            ease: "back.out(1.7)"
        });
    }, []);

    return (
        <>
            <div className='position-relative' style={{
                background: 'linear-gradient(180deg, rgba(33, 37, 41, 0.8) 0%, rgba(33, 37, 41, 1) 100%)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <div className="container">
                    <footer className="py-5">
                        <div className="row gy-4">
                            <div className="col-12 col-md-5">
                                <div className="d-flex align-items-center mb-3">
                                    <Link to="https://gdg.community.dev/gdg-on-campus-school-of-data-science-and-forecasting-indore-india/" className="me-3 footer-logo">
                                        <img src={gdg_logo} alt="GDG Logo" height="40"
                                            style={{
                                                filter: 'drop-shadow(0 2px 5px rgba(66, 133, 244, 0.3))',
                                                transition: 'transform 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                gsap.to(e.target, {
                                                    scale: 1.1,
                                                    duration: 0.3
                                                });
                                            }}
                                            onMouseLeave={(e) => {
                                                gsap.to(e.target, {
                                                    scale: 1,
                                                    duration: 0.3
                                                });
                                            }}
                                        />
                                    </Link>
                                    <h5 className="mb-0 footer-text" style={{ color: '#f8f9fa' }}>Google Developer Groups</h5>
                                </div>
                                <p className="text-muted footer-text" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    A community of developers interested in Google's developer technology.
                                </p>
                                <p className="text-muted footer-text" style={{ fontSize: '0.9rem' }}>
                                    © 2025 Google Developer Groups On Campus<br />School of Data Science and Forecasting
                                </p>
                            </div>

                            <div className="col-6 col-md-3">
                                <h5 className="text-white mb-3 footer-text">Quick Links</h5>
                                <ul className="nav flex-column footer-text">
                                    <li className="nav-item mb-2">
                                        <Link to="/" className="nav-link p-0 text-muted hover-link">Home</Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="/events" className="nav-link p-0 text-muted hover-link">Events</Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="/flashback" className="nav-link p-0 text-muted hover-link">Flashback</Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="/team" className="nav-link p-0 text-muted hover-link">Team</Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="https://gdg.community.dev/gdg-on-campus-school-of-data-science-and-forecasting-indore-india/" className="nav-link p-0 text-muted hover-link">Community Page</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4">
                                <h5 className="text-white mb-3 footer-text">Connect With Us</h5>
                                <p className="text-muted mb-3 footer-text" style={{ fontSize: '0.95rem' }}>
                                    Follow us on social media to stay updated with our latest events and activities.
                                </p>
                                <div className="d-flex gap-3">
                                    <a className="text-decoration-none footer-social-icon" href="https://instagram.com/gdgsdsf" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-instagram fs-4"
                                            style={{
                                                color: '#E1306C',
                                                filter: 'drop-shadow(0 2px 3px rgba(225, 48, 108, 0.3))',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                gsap.to(e.target, {
                                                    scale: 1.2,
                                                    y: -3,
                                                    duration: 0.3
                                                });
                                            }}
                                            onMouseLeave={(e) => {
                                                gsap.to(e.target, {
                                                    scale: 1,
                                                    y: 0,
                                                    duration: 0.3
                                                });
                                            }}
                                        ></i>
                                    </a>
                                    <a className="text-decoration-none footer-social-icon" href="https://www.facebook.com/profile.php?id=100084530138056" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-facebook fs-4"
                                            style={{
                                                color: '#1877F2',
                                                filter: 'drop-shadow(0 2px 3px rgba(24, 119, 242, 0.3))',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                gsap.to(e.target, {
                                                    scale: 1.2,
                                                    y: -3,
                                                    duration: 0.3
                                                });
                                            }}
                                            onMouseLeave={(e) => {
                                                gsap.to(e.target, {
                                                    scale: 1,
                                                    y: 0,
                                                    duration: 0.3
                                                });
                                            }}
                                        ></i>
                                    </a>
                                    <a className="text-decoration-none footer-social-icon" href="https://x.com/GdgDavv" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-twitter-x fs-4"
                                            style={{
                                                color: '#ffffff',
                                                filter: 'drop-shadow(0 2px 3px rgba(255, 255, 255, 0.3))',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                gsap.to(e.target, {
                                                    scale: 1.2,
                                                    y: -3,
                                                    duration: 0.3
                                                });
                                            }}
                                            onMouseLeave={(e) => {
                                                gsap.to(e.target, {
                                                    scale: 1,
                                                    y: 0,
                                                    duration: 0.3
                                                });
                                            }}
                                        ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

                {/* Wave decoration at the top of the footer */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: 0,
                    width: '100%',
                    height: '50px',
                    overflow: 'hidden',
                    zIndex: -1
                }}>
                    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
                        <path fill="rgba(33, 37, 41, 0.8)" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                    </svg>
                </div>
            </div>

            {/* Add hover effect styles */}
            <style jsx="true">{`
                .hover-link {
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .hover-link:before {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1px;
                    bottom: 0;
                    left: 0;
                    background-color: #4285F4;
                    visibility: hidden;
                    transition: all 0.3s ease-in-out;
                }
                
                .hover-link:hover {
                    color: #f8f9fa !important;
                }
                
                .hover-link:hover:before {
                    visibility: visible;
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default Footer