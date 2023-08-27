import React from "react";
import "./About.css";
import { skills } from "../../data";
import { motion } from "framer-motion";

function MoveInWhenVisibleBio({ children }) {
    return (
        <motion.div
            initial={{ x: -250 }}
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
            initial={{ x: -190 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
            {children}
        </motion.div>
    )
}

export default function About() {
    return (
        <div id='about' className='about-container'>
            <MoveInWhenVisibleBio>
                <div className='about-title'>
                    <div className='about'>ABOUT</div>
                    <div className='about-underline'></div>
                </div>
            </MoveInWhenVisibleBio>

            <div className='about-content'>
                <div className='bio'>
                    <MoveInWhenVisibleBio>
                        <p>I'm a passionate <span className='bio-color'>Full-Stack Developer</span> based in San Diego, California. I have experience <span className='bio-color'>building web applications</span> using a variety of technologies, including:</p>
                    </MoveInWhenVisibleBio>
                    <div className='skills-container'>
                        {skills.map((skill) => (
                            <div className='skill-item' key={skill.name}>
                                <MoveInWhenVisibleBio>
                                    <img className='skill-icon' src={skill.icon} alt={skill.name} />
                                </MoveInWhenVisibleBio>

                                <MoveInWhenVisibleBio>
                                    <p className='skill-name'>{skill.name}</p>
                                </MoveInWhenVisibleBio>
                            </div>
                        ))}
                    </div>
                    <p>I enjoy creating <span className='bio-color'>intuitive</span> and visually <span className='bio-color'>appealing UI</span> using <span className='bio-color'>React</span>. Crafting seamless <span className='bio-color'>user experiences</span> that leave a <span className='bio-color'>lasting impression</span> is my goal. My proficiency extends to architecting <span className='bio-color'>powerful</span> server-side systems. I have experience developing <span className='bio-color'>REST</span> and <span className='bio-color'>GraphQL</span> APIs. I'm knowledgeable about both <span className='bio-color'>SQL</span> and <span className='bio-color'>NoSQL</span> databases, employing technologies like <span className='bio-color'>PostgreSQL</span>, <span className='bio-color'>MongoDB</span> and <span className='bio-color'>DynamoDB</span> to unsure <span className='bio-color'>data integrity</span> and <span className='bio-color'>efficient querying</span>.</p>
                </div>
            </div>
        </div>
    )
}