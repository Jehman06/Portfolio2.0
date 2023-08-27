import React, { useState } from "react";
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function Footer() {
    const [linkedinIsAnimating, setLinkedinIsAnimating] = useState(false);
    const [githubIsAnimating, setGithubIsAnimating] = useState(false);
    const [emailIsAnimating, setEmailIsAnimating] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='footer-container'>
            <div className='scroll-up' onClick={() => scrollToSection('home')}>
                <KeyboardDoubleArrowUpIcon
                    className='scroll-up-icon'
                    fontSize='large'
                />
            </div>

            <div className='links'>
                <a href='https://www.linkedin.com/in/jeremy-lehmann/' className='social-link'>
                    <LinkedInIcon
                        className={`social-icon ${linkedinIsAnimating ? 'animate' : ''}`}
                        onMouseEnter={() => {
                            setLinkedinIsAnimating(true);
                            setTimeout(() => {
                                setLinkedinIsAnimating(false);
                            }, 300);
                        }}
                    />
                </a>

                <a href='https://github.com/Jehman06' className='social-link'>
                    <GitHubIcon
                        className={`social-icon ${githubIsAnimating ? 'animate' : ''}`}
                        onMouseEnter={() => {
                            setGithubIsAnimating(true);
                            setTimeout(() => {
                                setGithubIsAnimating(false);
                            }, 300);
                        }}
                    />
                </a>

                <a href='mailto:jeremy.lehmann06@icloud.com' className='social-link'>
                    <EmailIcon
                        className={`social-icon ${emailIsAnimating ? 'animate' : ''}`}
                        onMouseEnter={(() => {
                            setEmailIsAnimating(true);
                            setTimeout(() => {
                                setEmailIsAnimating(false);
                            }, 300);
                        })}
                    />
                </a>
            </div>
            <p className='copyright'>JEREMY LEHMANN <span className='copyright-color'>©2023</span></p>
        </div>
    )
}