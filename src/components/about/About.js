import React from "react";
import "./About.css";
import { skills } from "../../data";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoRedux, BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';
import { SiAmazondynamodb, SiGraphql, SiTypescript, SiJavascript } from 'react-icons/si';

function MoveInWhenVisibleBio({ children }) {
    return (
        <motion.div
            initial={{ x: -1000 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
        >
            {children}
        </motion.div>
    );
}

// TODO: Fix the alignment after animation. For some reason it doesn't go where it should and doesn't align well
function MoveInWhenVisibleSkills({ children }) {
    return (
        <motion.div
            initial={{ x: -1000 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
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
                        <p>
                            I'm <span className='bio-color'>Jeremy Lehmann</span>, a <span className='bio-color'>Software Developer</span> based in San Diego, California. I developed a passion for <span className='bio-color'>programming</span> when I watched my first Python tutorial video. Being able to write simple programs that worked was exciting. I decided to enroll in a bootcamp at <span className='bio-color'>San Diego State University</span>, where I learned various languages and technologies, both front-end and back-end.
                        </p>
                    </MoveInWhenVisibleBio>

                    <MoveInWhenVisibleBio>
                        <p>
                            I'm a tech enthusiast and really love <span className='bio-color'>learning new skills</span>. I aspire to build <span className='bio-color'>software</span> that makes the world a better place. I pick things up quickly and am not scared of <span className='bio-color'>hard work</span>.
                        </p>
                    </MoveInWhenVisibleBio>

                    <MoveInWhenVisibleBio>
                        <p>
                            When I'm not working, I'm likely spending time with <span className='bio-color'>friends</span>, at the park with my <span className='bio-color'>dog</span>, or playing <span className='bio-color'>video games</span>. One of my favorite place on Earth is <span className='bio-color'>Six Flags</span>.
                        </p>
                    </MoveInWhenVisibleBio>
                </div>

                <div className='skills'>
                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <FaHtml5 />
                                </div>
                            </div>
                            HTML
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <FaCss3Alt />
                                </div>
                            </div>
                            CSS
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <SiJavascript />
                                </div>
                            </div>
                            JavaScript
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <SiTypescript />
                                </div>
                            </div>
                            TypeScript
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <FaPython />
                                </div>
                            </div>
                            Python
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <FaReact />
                                </div>
                            </div>
                            React
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <BiLogoRedux />
                                </div>
                            </div>
                            Redux
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <BiLogoPostgresql />
                                </div>
                            </div>
                            PostgreSQL
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <BiLogoMongodb />
                                </div>
                            </div>
                            MongoDB
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <SiAmazondynamodb />
                                </div>
                            </div>
                            DynamoDB
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <SiGraphql />
                                </div>
                            </div>
                            GraphQL
                        </div>
                    </MoveInWhenVisibleSkills>

                    <MoveInWhenVisibleSkills>
                        <div className='skill'>
                            <div className='icon'>
                                <div className='icon-circle'>
                                    <FaNodeJs />
                                </div>
                            </div>
                            Node.js
                        </div>
                    </MoveInWhenVisibleSkills>
                </div>
            </div>
        </div>
    );
}