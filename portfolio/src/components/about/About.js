import React from "react";
import "./About.css";
import { skills } from "../../data";
import { motion } from "framer-motion";

function MoveInWhenVisibleBio({ children }) {
    return (
        <motion.div
            initial={{ x: -230 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
}

function MoveInWhenVisibleSkills({ children }) {
    return (
        <motion.div
            initial={{ x: 129 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    )
}

export default function About() {
    return (
        <div id='about' className='about-container'>

            <div className='about-title'>
                <MoveInWhenVisibleBio>
                    <div className='about'>ABOUT</div>
                    <div className='about-underline'></div>
                </MoveInWhenVisibleBio>
            </div>

            <div className='about-content'>
                <div className='bio'>
                    <MoveInWhenVisibleBio>
                        <p>I'm a passionate <span className='bio-color'>Full-Stack Developer</span> based in <span className='bio-color'>San Diego, California</span>. I enjoy building web applications that are dynamic, responsive, and user-friendly.</p>
                    </MoveInWhenVisibleBio>

                    <MoveInWhenVisibleBio>
                        <p>I found a passion in programming when I watched my first Python tutorial. Being able to write code and make small programs felt like an accomplishment. Then, I completed a Software Development Bootcamp with San Diego State University, which allowed me to gain valuable skills. I'm a fast learner and love learning new things! I'm currently learning Java.</p>
                    </MoveInWhenVisibleBio>

                    <MoveInWhenVisibleBio>
                        <p>When I'm not working, I love exploring my city with my dog Bentley, trying new restaurants, going to Six Flags and playing video games. Whether I look like a good fit for your team, or you have any questions, I'm happy to chat!</p>
                    </MoveInWhenVisibleBio>
                </div>
                <div className='skills'>
                    {skills.map((skill) => (
                        <MoveInWhenVisibleSkills>
                            <div className='skill'>
                                <p><b>{skill}</b></p>
                            </div>
                        </MoveInWhenVisibleSkills>
                    ))}
                </div>
            </div>
        </div>
    )
}