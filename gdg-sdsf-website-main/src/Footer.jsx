import React from 'react'
import { Link } from 'react-router-dom';
import gdg_logo from './assets/gdg_logo.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
    useGSAP(() => {
        gsap.from(".footer-logo", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" });
        gsap.from(".footer-text", { y: 20, opacity: 0, duration: 0.8, delay: 0.2, ease: "power2.out" });
        gsap.from(".footer-social-icon", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5, delay: 0.4, ease: "back.out(1.7)" });
    }, []);

    return (
        <>
            <div className='position-relative main-footer-container'>
                <div className="container">
                    <footer className="py-5">
                        <div className="row gy-4">
                            <div className="col-12 col-md-5">
                                <div className="d-flex align-items-center mb-3">
                                    <Link to="/" className="me-3 footer-logo">
                                        <img src={gdg_logo} alt="GDG Logo" height="40"
                                            className="themed-logo"
                                            style={{
                                                filter: 'var(--logo-filter)',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => gsap.to(e.target, { scale: 1.1, duration: 0.3 })}
                                            onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.3 })}
                                        />
                                    </Link>
                                    <h5 className="mb-0 footer-heading">Google Developer Groups</h5>
                                </div>
                                <p className="footer-subtext">
                                    A community of developers interested in Google's developer technology.
                                </p>
                                <p className="footer-subtext" style={{ fontSize: '0.9rem' }}>
                                    © {new Date().getFullYear()} Google Developer Groups On Campus<br />School of Data Science and Forecasting
                                </p>
                            </div>

                            <div className="col-6 col-md-3">
                                <h5 className="footer-heading mb-3">Quick Links</h5>
                                <ul className="nav flex-column">
                                    {['Home', 'Events', 'Flashback', 'Team'].map((item) => (
                                        <li className="nav-item mb-2" key={item}>
                                            <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                                                  className="nav-link p-0 footer-link hover-link">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-6 col-md-4">
                                <h5 className="footer-heading mb-3">Connect With Us</h5>
                                <p className="footer-subtext mb-3">
                                    Follow us on social media to stay updated with our latest activities.
                                </p>
                                <div className="d-flex gap-3">
                                    <SocialIcon icon="instagram" color="#E1306C" link="https://instagram.com/gdgsdsf" />
                                    <SocialIcon icon="facebook" color="#1877F2" link="https://facebook.com/profile.php?id=100084530138056" />
                                    <SocialIcon icon="twitter-x" color="var(--text-color)" link="https://x.com/GdgDavv" />
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

                {/* Wave decoration - uses CSS variable for fill color */}
                <div className="footer-wave-container">
                    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="footer-wave-svg">
                        <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                    </svg>
                </div>
            </div>

            <style jsx="true">{`
                .main-footer-container {
                    background: var(--footer-bg-gradient);
                    border-top: 1px solid var(--nav-border);
                    transition: all 0.4s ease;
                }
                .footer-heading { color: var(--text-color); transition: color 0.4s ease; }
                .footer-subtext { color: var(--footer-text-muted); transition: color 0.4s ease; }
                .footer-link { color: var(--footer-text-muted) !important; }
                
                .footer-wave-container {
                    position: absolute; top: -50px; left: 0; width: 100%; height: 50px;
                    overflow: hidden; z-index: -1;
                }
                .footer-wave-svg { width: 100%; height: 100%; fill: var(--footer-wave-color); }

                .hover-link:hover { color: var(--blue-heading) !important; }
                
                .footer-social-icon i {
                    transition: all 0.3s ease;
                    display: inline-block;
                }
            `}</style>
        </>
    )
}

// Helper Component for Social Icons
const SocialIcon = ({ icon, color, link }) => (
    <a className="text-decoration-none footer-social-icon" href={link} target="_blank" rel="noopener noreferrer">
        <i className={`bi bi-${icon} fs-4`}
           style={{ color: color, filter: `drop-shadow(0 2px 3px ${color}44)` }}
           onMouseEnter={(e) => gsap.to(e.target, { scale: 1.2, y: -3, duration: 0.3 })}
           onMouseLeave={(e) => gsap.to(e.target, { scale: 1, y: 0, duration: 0.3 })}
        ></i>
    </a>
);

export default Footer;