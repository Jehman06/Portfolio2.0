import React, { useState } from "react";
import './Projects.css';

import { projects } from "../../data";

import { motion } from "framer-motion";
import CancelIcon from '@mui/icons-material/Cancel';

function MoveInWhenVisibleTitle({ children }) {
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

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div id='projects' className='projects-container'>
            <MoveInWhenVisibleTitle>
                <div className='project-header'>
                    <div className='project-title'>PORTFOLIO</div>
                    <div className='project-underline'></div>
                </div>
            </MoveInWhenVisibleTitle>

            <div className='projects'>
                {projects.map((project) => (
                    <div
                        className='project'
                        style={{ backgroundImage: `url(${project.images[0]})` }}
                    >
                        <div className='project-text'>
                            <p className='project-name'><b>{project.name}</b></p>
                            <p className='project-type'><b>{project.type}</b></p>
                            <button className='learn-more' onClick={() => openModal(project)}>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                {selectedProject && (
                    <div className='modal-content'>
                        <div className='modal-images'>
                            {selectedProject.images.map((image, index) => (
                                <img key={index} src={image} alt={`${selectedProject.name} Image ${index}`} />
                            ))}
                        </div>
                        <div className='modal-text'>
                            <h2 className='modal-project-name'>{selectedProject.name}</h2>
                            <p className='modal-project-description'>{selectedProject.description}</p>
                            <div className='view-site'>
                                <form action={selectedProject.url} target='_blank'>
                                    <button type='submit'>
                                        View Site
                                    </button>
                                </form>
                            </div>
                            <CancelIcon className='close-modal' onClick={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}