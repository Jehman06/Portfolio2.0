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
};

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
};

function downloadResume() {
    const resume = process.env.PUBLIC_URL + "/resume.pdf";

    const link = document.createElement('a');
    link.href = resume;

    link.download = 'Jeremy-Lehmann-Resume.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
};

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
                        <p>I found my passion for programming through a combination of curiosity and a desire to solve real-world problems. This journey led me to successfully complete a Software Development Bootcamp with San Diego State University, where I acquired valuable skills. I'm a fast learner and love learning new things! I recently started learning Java.</p>
                    </MoveInWhenVisibleBio>

                    <MoveInWhenVisibleBio>
                        <p>When I'm not working, I love exploring my city with my dog Bentley, trying new restaurants, going to Six Flags and playing video games. Whether I look like a good fit for your team, or you have any questions, I'm happy to chat!</p>
                    </MoveInWhenVisibleBio>
                    <MoveInWhenVisibleBio>
                        <div className='resume' onClick={downloadResume}>
                            <p><b>Download My Resume</b></p>
                        </div>
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

