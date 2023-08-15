import React from "react";
import './About.css';
import { Animator, ScrollPage } from "react-scroll-motion";

export default function About() {
    return (
        <ScrollPage>
            <Animator>
                <div>
                    <p className='youbitch'>Well well well. Hello there! Welcome!</p>
                </div>
            </Animator>
        </ScrollPage>
    )
}