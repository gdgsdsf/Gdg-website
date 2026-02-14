import React, { useRef, useEffect } from 'react';
import hero from '../assets/hero.png';
import red from '../assets/red.png';
import blue from '../assets/blue.png';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

const Home = () => {
const heroRef = useRef(null);
const section1Ref = useRef(null);
const section2Ref = useRef(null);
const section3Ref = useRef(null);
const floatingElementsRef = useRef([]);
const textRevealRef = useRef(null);

useGSAP(() => {
// Enhanced Hero section animation with more sophisticated effects
const heroTl = gsap.timeline();

// Hero image with 3D rotation and scale
heroTl.from(".hero-image", {
x: 150,
y: 50,
rotationY: 45,
scale: 0.8,
opacity: 0,
duration: 1.5,
ease: "power3.out"
});

// IMPROVED HERO TYPE ANIMATION
// We ensure the element is visible, then type the text with a "stepped" ease for a more mechanical feel
heroTl.set(".hero-title", { opacity: 1 })
.to(".hero-title", {
duration: 2,
text: "Hello, Programmers!",
ease: "none", // Mechanical typing usually looks best with linear ease
}, "-=1");

// Animate the gradient background position
gsap.to(".hero-title", {
backgroundPosition: "200% 50%",
duration: 3,
ease: "none",
repeat: -1,
yoyo: true
});

// Text with staggered word animation
heroTl.from(".hero-text", {
y: 40,
opacity: 0,
duration: 0.8,
ease: "power2.out"
}, "-=0.5");

// Button with bounce and glow effect
heroTl.from(".hero-button", {
scale: 0.5,
rotation: 10,
opacity: 0,
duration: 0.8,
ease: "elastic.out(1, 0.5)"
}, "-=0.6");

// Add continuous floating animation to hero image (with performance optimization)
gsap.to(".hero-image", {
y: "+=20",
duration: 3,
ease: "power1.inOut",
repeat: -1,
yoyo: true,
force3D: true // Enable hardware acceleration
});

// Smooth Section animations with ScrollTrigger
// Section 1 animations + Typewriter
gsap.to(".section1-content h1", {
scrollTrigger: {
trigger: section1Ref.current,
start: "top 80%",
toggleActions: "play none none reverse"
},
duration: 1.2,
text: "What we do!",
ease: "power1.in"
});

gsap.from(".section1-image", {
scrollTrigger: {
trigger: section1Ref.current,
start: "top 80%",
toggleActions: "play none none reverse"
},
x: -80,
opacity: 0,
duration: 1.2,
ease: "power3.out"
});

gsap.from(".section1-content p", {
scrollTrigger: {
trigger: section1Ref.current,
start: "top 80%",
toggleActions: "play none none reverse"
},
y: 40,
opacity: 0,
duration: 1,
ease: "power3.out"
});

// Section 2 animations + Typewriter
gsap.to(".section2-content h1", {
scrollTrigger: {
trigger: section2Ref.current,
start: "top 80%",
toggleActions: "play none none reverse"
},
duration: 1.5,
text: "What we have done!",
ease: "power1.in"
});

gsap.from(".section2-image", {
scrollTrigger: {
trigger: section2Ref.current,
start: "top 80%",
toggleActions: "play none none reverse"
},
x: 80,
opacity: 0,
duration: 1.2,
ease: "power3.out"
});

gsap.from(".section2-content p", {
scrollTrigger: {
trigger: section2Ref.current,
start: "top 80%",
toggleActions: "play none none reverse"
},
y: 40,
opacity: 0,
duration: 1,
ease: "power3.out"
});

// Set transform origins for hover effects
gsap.set(".section1-image, .section2-image", { transformOrigin: "center center" });

// Floating background elements (optimized for performance)
gsap.to(".floating-element", {
y: "random(-20, 20)",
x: "random(-10, 10)",
rotation: "random(-5, 5)",
duration: "random(3, 6)",
ease: "power1.inOut",
repeat: -1,
yoyo: true,
stagger: 0.5,
force3D: true,
willChange: "transform"
});

// Add continuous rotation to floating elements (optimized)
gsap.to(".floating-element", {
rotation: 360,
duration: 20,
ease: "none",
repeat: -1,
force3D: true,
willChange: "transform"
});

// Mobile optimization - reduce animations on smaller screens
if (window.innerWidth < 768) {
gsap.set(".floating-element", { scale: 0.7 });
gsap.set(".hero-image", { scale: 0.9 });
}
}, []);

return (
<>
{/* Hero Section with Parallax */}
<div className="position-relative overflow-hidden" ref={heroRef}>
<div className="parallax-bg" data-speed="0.2"
style={{
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
background: 'radial-gradient(circle at 10% 20%, rgba(66, 133, 244, 0.05) 0%, rgba(234, 67, 53, 0.05) 90%)',
zIndex: -1
}}></div>

{/* Floating background elements */}
<div className="floating-element" style={{
position: 'absolute',
top: '10%',
left: '10%',
width: '60px',
height: '60px',
background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.1), rgba(234, 67, 53, 0.1))',
borderRadius: '50%',
zIndex: -1
}}></div>
<div className="floating-element" style={{
position: 'absolute',
top: '20%',
right: '15%',
width: '40px',
height: '40px',
background: 'linear-gradient(45deg, rgba(52, 168, 83, 0.1), rgba(251, 188, 5, 0.1))',
borderRadius: '50%',
zIndex: -1
}}></div>
<div className="floating-element" style={{
position: 'absolute',
bottom: '20%',
left: '20%',
width: '80px',
height: '80px',
background: 'linear-gradient(45deg, rgba(234, 67, 53, 0.1), rgba(251, 188, 5, 0.1))',
borderRadius: '50%',
zIndex: -1
}}></div>
<div className="floating-element" style={{
position: 'absolute',
bottom: '30%',
right: '10%',
width: '50px',
height: '50px',
background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.1), rgba(52, 168, 83, 0.1))',
borderRadius: '50%',
zIndex: -1
}}></div>

<div className="container col-xxl-8">
<div className="row flex-lg-row-reverse align-items-center g-5 py-5" style={{ minHeight: "100vh" }}>
<div className="col-10 col-sm-8 col-lg-6">
<img src={hero} className="d-block mx-lg-auto img-fluid hero-image" alt="Hero" height="488" width="488" loading="lazy"
style={{
filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
transform: 'perspective(1000px) rotateY(-5deg)',
transition: 'transform 0.5s ease',
}}
onMouseEnter={(e) => {
gsap.to(e.target, {
rotationY: '5deg',
duration: 0.5,
ease: 'power2.out'
});
}}
onMouseLeave={(e) => {
gsap.to(e.target, {
rotationY: '-5deg',
duration: 0.5,
ease: 'power2.out'
});
}}
/>
</div>
<div className="col-lg-6">
{/* FIX: Increased line-height and added padding-bottom to prevent 'g' from clipping */}
<h1 className="display-4 fw-bold text-body-emphasis mb-4 hero-title"
style={{
background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent',
backgroundSize: '300% 100%',
animation: 'gradient 6s ease infinite',
opacity: 0,
lineHeight: '1.4',
paddingBottom: '15px'
}}>
</h1>
<p className="lead hero-text" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
Google Developer Groups are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
</p>
<div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
<a href="https://gdg.community.dev/gdg-on-campus-school-of-data-science-and-forecasting-indore-india/" target='_blank' rel="noreferrer" className="hero-button">
<button type="button" className="btn btn-primary btn-lg px-4 me-md-2"
style={{
background: 'linear-gradient(45deg, #4285F4, #0F9D58)',
border: 'none',
borderRadius: '30px',
padding: '12px 30px',
boxShadow: '0 4px 15px rgba(66, 133, 244, 0.3)',
transition: 'all 0.3s ease'
}}
onMouseEnter={(e) => {
gsap.to(e.target, {
scale: 1.05,
boxShadow: '0 6px 20px rgba(66, 133, 244, 0.4)',
duration: 0.3
});
}}
onMouseLeave={(e) => {
gsap.to(e.target, {
scale: 1,
boxShadow: '0 4px 15px rgba(66, 133, 244, 0.3)',
duration: 0.3
});
}}>
Know More
</button>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="container">
<hr className="my-0" style={{ height: '2px', background: 'linear-gradient(to right, transparent, rgba(66, 133, 244, 0.5), transparent)' }} />
</div>

{/* What we do section */}
<div className="position-relative overflow-hidden" ref={section1Ref}>
<div className="parallax-bg" data-speed="0.1"
style={{
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
background: 'radial-gradient(circle at 90% 10%, rgba(52, 168, 83, 0.05) 0%, rgba(251, 188, 5, 0.05) 90%)',
zIndex: -1
}}></div>
<div className="container col-xxl-8">
<div className="row flex-lg-row-reverse align-items-center g-5 py-5" style={{ minHeight: "100vh" }}>
<div className="col-lg-6 section1-content">
<h1 className="display-5 fw-bold text-body-emphasis mb-4 text-reveal"
style={{
color: '#4285F4',
position: 'relative',
lineHeight: '1.4',
paddingBottom: '10px'
}}>
<span style={{
position: 'absolute',
bottom: '-10px',
left: '0',
width: '80px',
height: '4px',
background: '#4285F4',
borderRadius: '2px'
}}></span>
</h1>
<p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
Google Developer Groups on Campus at the School of Data Science and Forecasting, DAVV, is a student-led technical club dedicated to fostering a vibrant community of tech enthusiasts. Our club empowers students to explore the latest advancements in computer technology, collaborate with like-minded peers and develop valuable skills through hands-on learning and engaging events.
</p>
</div>
<div className="col-10 col-sm-8 col-lg-6">
<img src={blue} className="d-block mx-lg-auto img-fluid section1-image" alt="What we do" height="488" width="488" loading="lazy"
style={{
filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
borderRadius: '20px',
transform: 'perspective(1000px) rotateY(5deg)'
}}
onMouseEnter={(e) => {
gsap.to(e.target, {
rotationY: '-5deg',
duration: 0.5,
ease: 'power2.out'
});
}}
onMouseLeave={(e) => {
gsap.to(e.target, {
rotationY: '5deg',
duration: 0.5,
ease: 'power2.out'
});
}}
/>
</div>
</div>
</div>
</div>

<div className="container">
<hr className="my-0" style={{ height: '2px', background: 'linear-gradient(to right, transparent, rgba(234, 67, 53, 0.5), transparent)' }} />
</div>

{/* What we have done section */}
<div className="position-relative overflow-hidden" ref={section2Ref}>
<div className="parallax-bg" data-speed="0.15"
style={{
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
background: 'radial-gradient(circle at 10% 90%, rgba(234, 67, 53, 0.05) 0%, rgba(251, 188, 5, 0.05) 90%)',
zIndex: -1
}}></div>
<div className="container col-xxl-8">
<div className="row flex-lg-row-reverse align-items-center g-5 py-5" style={{ minHeight: "100vh" }}>
<div className="col-10 col-sm-8 col-lg-6">
<img src={red} className="d-block mx-lg-auto img-fluid section2-image" alt="What we have done" height="488" width="488" loading="lazy"
style={{
filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
borderRadius: '20px',
transform: 'perspective(1000px) rotateY(-5deg)'
}}
onMouseEnter={(e) => {
gsap.to(e.target, {
rotationY: '5deg',
duration: 0.5,
ease: 'power2.out'
});
}}
onMouseLeave={(e) => {
gsap.to(e.target, {
rotationY: '-5deg',
duration: 0.5,
ease: 'power2.out'
});
}}
/>
</div>
<div className="col-lg-6 section2-content">
<h1 className="display-5 fw-bold text-body-emphasis mb-4 text-reveal"
style={{
color: '#EA4335',
position: 'relative',
lineHeight: '1.4',
paddingBottom: '10px'
}}>
<span style={{
position: 'absolute',
bottom: '-10px',
left: '0',
width: '80px',
height: '4px',
background: '#EA4335',
borderRadius: '2px'
}}></span>
</h1>
<p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
As Google Developer Groups, we've hosted meetups, hands-on workshops and hackathons to explore technologies like AI, cloud and mobile development. From networking events to collaborative coding sessions, we've connected developers, shared knowledge and built impactful solutions, fostering innovation and growth within our community.
</p>
</div>
</div>
</div>
</div>

{/* Enhanced CSS animations */}
<style jsx="true">{`
@keyframes gradient {
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
}

@keyframes float {
0%, 100% { transform: translateY(0px) rotate(0deg); }
50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes glow {
0%, 100% { box-shadow: 0 4px 15px rgba(66, 133, 244, 0.3); }
50% { box-shadow: 0 8px 25px rgba(66, 133, 244, 0.6); }
}

@keyframes blink {
from, to { opacity: 1; }
50% { opacity: 0; }
}

.hero-title::after, .text-reveal::after {
content: "|";
animation: blink 1s step-end infinite;
margin-left: 5px;
color: #4285F4;
vertical-align: middle;
}

.floating-element {
animation: float 6s ease-in-out infinite;
will-change: transform;
backface-visibility: hidden;
}

.hero-button button {
animation: glow 3s ease-in-out infinite;
will-change: transform, box-shadow;
}

.text-reveal {
overflow: visible; /* Prevent clipping */
will-change: transform, opacity;
}

.section1-image, .section2-image {
will-change: transform, filter;
backface-visibility: hidden;
transition: all 0.5s ease;
}

.section1-image:hover, .section2-image:hover {
transform: perspective(1000px) rotateY(0deg) scale(1.05) !important;
filter: drop-shadow(0 15px 30px rgba(0,0,0,0.2));
}

.hero-image {
will-change: transform;
backface-visibility: hidden;
}

@media (prefers-reduced-motion: reduce) {
.floating-element, .hero-image, .hero-button button {
animation: none !important;
}
}
`}</style>
</>
);
}

export default Home;