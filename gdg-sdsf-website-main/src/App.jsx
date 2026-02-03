import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './home/Home';
import Events from './events/Events';
import Flashback from './flashback/Flashback';
import Team from './team/Team';
import ContactUs from './contact-us/ContactUs';

// Scroll to top component
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    return null;
};

// Page transition component
const PageTransition = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Page transition animation
        gsap.to(".page-transition", {
            duration: 0,
            opacity: 1,
            y: 0
        });

        gsap.from(".page-transition", {
            duration: 0.5,
            opacity: 0,
            y: 20,
            ease: "power2.out"
        });
    }, [location]);

    return (
        <div className="page-transition" style={{ minHeight: '100%' }}>
            {children}
        </div>
    );
};

// App wrapper to use location
const AppContent = () => {
    const location = useLocation();

    useGSAP(() => {
        // Initial page load animation
        gsap.from("body", {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut"
        });
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <ScrollToTop />
            <Navbar />
            <main style={{ flex: 1, position: 'relative' }}>
                <Routes location={location}>
                    <Route path="/" element={
                        <PageTransition>
                            <Home />
                        </PageTransition>
                    } />
                    <Route path="/home" element={
                        <PageTransition>
                            <Home />
                        </PageTransition>
                    } />
                    <Route path="/events" element={
                        <PageTransition>
                            <Events />
                        </PageTransition>
                    } />
                    <Route path="/flashback" element={
                        <PageTransition>
                            <Flashback />
                        </PageTransition>
                    } />
                    <Route path="/team" element={
                        <PageTransition>
                            <Team />
                        </PageTransition>
                    } />
                    <Route path="/contact-us" element={
                        <PageTransition>
                            <ContactUs />
                        </PageTransition>
                    } />
                    <Route path="*" element={
                        <PageTransition>
                            <div className="container text-center py-5 my-5">
                                <h1 className="display-1 fw-bold" style={{ color: '#EA4335' }}>404</h1>
                                <h2 className="mb-4">Page Not Found</h2>
                                <p className="lead mb-4">The page you're looking for doesn't exist or has been moved.</p>
                                <a href="/" className="btn btn-primary px-4 py-2"
                                    style={{
                                        background: 'linear-gradient(45deg, #4285F4, #0F9D58)',
                                        border: 'none',
                                        borderRadius: '30px',
                                        boxShadow: '0 4px 15px rgba(66, 133, 244, 0.3)',
                                    }}>
                                    Back to Home
                                </a>
                            </div>
                        </PageTransition>
                    } />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App
