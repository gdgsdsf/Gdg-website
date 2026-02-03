import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Cards = ({ session, teamData }) => {
    const containerRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        if (cardsRef.current.length > 0) {
            // Set initial state for cards
            gsap.set(cardsRef.current, {
                y: 50,
                opacity: 0,
                scale: 0.9
            })

            // Animate cards in with stagger
            gsap.to(cardsRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)"
            })
        }
    }, [teamData])

    const handleCardHover = (index, isHovering) => {
        const card = cardsRef.current[index]
        if (card) {
            gsap.to(card, {
                y: isHovering ? -10 : 0,
                scale: isHovering ? 1.05 : 1,
                duration: 0.3,
                ease: "power2.out"
            })

            // Animate image on hover
            const img = card.querySelector('.card-img-top')
            gsap.to(img, {
                scale: isHovering ? 1.1 : 1,
                duration: 0.3,
                ease: "power2.out"
            })

            // Animate social icons
            const socialIcons = card.querySelectorAll('.social-icon')
            gsap.to(socialIcons, {
                scale: isHovering ? 1.2 : 1,
                duration: 0.2,
                stagger: 0.05,
                ease: "power2.out"
            })
        }
    }

    const handleIconHover = (icon, isHovering) => {
        gsap.to(icon, {
            scale: isHovering ? 1.3 : 1,
            rotation: isHovering ? 5 : 0,
            duration: 0.2,
            ease: "power2.out"
        })
    }

    return (
        <div ref={containerRef}>
            <h1 className='text-center my-5'>{session}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 gap-5 justify-content-center">
                {teamData.map((member, index) => {
                    return (
                        <div
                            className="card p-3"
                            style={{ width: "18rem" }}
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            onMouseEnter={() => handleCardHover(index, true)}
                            onMouseLeave={() => handleCardHover(index, false)}
                        >
                            <div className="overflow-hidden rounded-circle" style={{ width: 256, height: 256, margin: '0 auto' }}>
                                <img
                                    src={member["image"]}
                                    className="card-img-top rounded-circle"
                                    style={{ objectFit: "cover", width: 256, height: 256 }}
                                    alt={member["name"]}
                                />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{member["name"]}</h5>
                                <p className="card-text">{member["role"]}</p>
                                <div className="d-flex justify-content-center gap-3">
                                    {member["github"] === "" ? null : (
                                        <a
                                            href={member["github"]}
                                            className="text-body-secondary social-icon"
                                            target='_blank'
                                            onMouseEnter={(e) => handleIconHover(e.currentTarget, true)}
                                            onMouseLeave={(e) => handleIconHover(e.currentTarget, false)}
                                        >
                                            <i className="bi bi-github fs-4"></i>
                                        </a>
                                    )}
                                    {member["linkedin"] === "" ? null : (
                                        <a
                                            href={member["linkedin"]}
                                            className="text-body-secondary social-icon"
                                            target='_blank'
                                            onMouseEnter={(e) => handleIconHover(e.currentTarget, true)}
                                            onMouseLeave={(e) => handleIconHover(e.currentTarget, false)}
                                        >
                                            <i className="bi bi-linkedin fs-4"></i>
                                        </a>
                                    )}
                                    {member["instagram"] === "" ? null : (
                                        <a
                                            href={member["instagram"]}
                                            className="text-body-secondary social-icon"
                                            target='_blank'
                                            onMouseEnter={(e) => handleIconHover(e.currentTarget, true)}
                                            onMouseLeave={(e) => handleIconHover(e.currentTarget, false)}
                                        >
                                            <i className="bi bi-instagram fs-4"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards