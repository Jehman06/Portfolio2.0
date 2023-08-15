import React from "react";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
// import { ArrowDownward } from "@mui/icons-material";
import './Canvas.css';

export default function CanvasComponent() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        // This function should be called after particles are loaded
        console.log(container);
    };

    return (
        <div className='canvas-container'>
            <Particles
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: 'rgba(37,41,52,255)',
                    },
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 800
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
                                sync: false
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
                            distance: 100,
                            color: "#1bd1e3",
                            opacity: 1,
                            width: 3
                        },
                        move: {
                            enable: true,
                            speed: 2,
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
                <p>Hi, my name is <span className="red-text">Jeremy</span>.</p>
                <p>I'm a <span className="red-text">Full-Stack Developer</span> based in <span className="red-text">San Diego, California</span>.</p>
            </div>
        </div>
    )
}