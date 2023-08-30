import React from "react";
import './Contact.css';
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

function MoveInWhenVisible({ children }) {
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

function PopInWhenVisible({ children }) {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                duration: 3,
            }}
        >
            {children}
        </motion.div>
    );
}

export default function Contact() {

    const [state, handleSubmit] = useForm("xwkjgkje");

    if (state.succeeded) {
        return (
            <div id='contact' className='contact-container'>
                <MoveInWhenVisible>
                    <div className='contact-header'>
                        <div className='contact-title'>CONTACT</div>
                        <div className='contact-underline'></div>
                    </div>
                </MoveInWhenVisible>
                <div className='contact-content'>
                    <div className='contact-submit'>
                        <p className='contact-message'>
                            Thank you! I will contact you shortly.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id='contact' className='contact-container'>
            <MoveInWhenVisible>
                <div className='contact-header'>
                    <div className='contact-title'>CONTACT</div>
                    <div className='contact-underline'></div>
                </div>
            </MoveInWhenVisible>
            <div className='contact-content'>
                <MoveInWhenVisible>
                    <p className='contact-content-p'>Have a question or want to talk? I'm always up for a chat!</p>
                </MoveInWhenVisible>

                <PopInWhenVisible>
                    <form className='form' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            id='name'
                            className='form-name'
                            placeholder='Name'
                        />
                        <ValidationError
                            prefix='Name'
                            field='name'
                            errors={state.errors}
                        />

                        <input
                            type='text'
                            id='email'
                            className='form-email'
                            placeholder='Email'
                        />
                        <ValidationError
                            prefix='Email'
                            field='email'
                            errors={state.errors}
                        />

                        <textarea
                            id='message'
                            name='message'
                            className='form-message'
                            placeholder='Message'
                            required
                        />
                        <ValidationError
                            prefix='Message'
                            field='message'
                            errors={state.errors}
                        />
                        <button
                            type='submit'
                            disabled={state.submitting}
                            className='message-button'
                        >
                            Submit
                        </button>
                    </form>
                </PopInWhenVisible>
            </div>
        </div>
    )
}