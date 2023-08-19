import React, { useRef, useEffect } from "react";
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
                            I'm Jeremy Lehmann, a Software Developer based in San Diego, California. I developed a passion for programming when I watched my first Python tutorial video. Being able to write simple programs that worked was exciting. I decided to enroll in a bootcamp at San Diego State University, where I learned various languages and technologies, both front-end and back-end.
                        </p>
                    </MoveInWhenVisibleBio>

                    <MoveInWhenVisibleBio>
                        <p>
                            I'm a tech enthusiast and really love learning new skills. I aspire to build software that makes the world a better place. I pick things up quickly and am not scared of hard work.
                        </p>
                    </MoveInWhenVisibleBio>

                    <MoveInWhenVisibleBio>
                        <p>
                            When I'm not working, I'm likely spending time with friends, at the park with my dog, or playing video games. I love roller coasters and plan a trip to the nearest Six Flags at least once a year!
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