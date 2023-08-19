import React from "react";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import './Canvas.css';

export default function CanvasComponent() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (particles) => {
        console.log(particles)
    }

    return (
        <div id='home' className='canvas-container'>
            <Particles
                id='tsparticles'
                loaded={particlesLoaded}
                init={particlesInit}
                options={{
                    background: {
                        color: 'rgba(37,41,52,255)',
                    },
                    particles: {
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value_area: 1200
                            }
                        },
                        color: {
                            value: '#e31b6d'
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            }
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 100,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 110,
                            color: "#1bd1e3", // amber: "#FFBF00" | turquoise: "#1bd1e3"
                            opacity: 1,
                            width: 3
                        },
                        move: {
                            enable: true,
                            speed: 1.5,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "grab"
                            },
                            onclick: {
                                enable: true,
                                mode: "push"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 250,
                                line_linked: {
                                    opacity: 2
                                }
                            },
                            bubble: {
                                distance: 100,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: true
                }}
            />
            <div className='text-content'>
                <p>Hello, my name is <span className="red-text">Jeremy</span>.</p>
                <p>I'm a  <span className="red-text">Full-Stack Developer</span>.</p>
            </div>
        </div>
    )
}