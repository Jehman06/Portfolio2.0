import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoRedux, BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';
import { SiAmazondynamodb, SiGraphql, SiTypescript, SiJavascript } from 'react-icons/si';

export const skills = [
    {
        name: 'HTML',
        icon: <FaHtml5 />
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript />
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />
    },
    {
        name: 'Python',
        icon: <FaPython />
    },
    {
        name: 'React',
        icon: <FaReact />
    },
    {
        name: 'Redux',
        icon: <BiLogoRedux />
    },
    {
        name: 'PostgreSQL',
        icon: <BiLogoPostgresql />
    },
    {
        name: 'MongoDB',
        icon: <BiLogoMongodb />
    },
    {
        name: 'DynamoDB',
        icon: <SiAmazondynamodb />
    },
    {
        name: 'GraphQL',
        icon: <SiGraphql />
    },
    {
        name: 'Node.js',
        icon: <FaNodeJs />
    }
]

export const projects = [
    {
        name: 'HungryHub',
        images: [process.env.PUBLIC_URL + '/hungryhub.png', process.env.PUBLIC_URL + '/hungryhub.png', process.env.PUBLIC_URL + '/hungryhub.png',],
        type: 'Food Delivery',
        description: 'HungryHub is an app helping users find restaurants and get their food delivered. Built with React, AWS Amplify, AWS Cognito, DynamoDB and Material UI.',
        url: 'https://www.hungryhub.us',
        github: 'https://github.com/Jehman06/HungryHub.git'
    },
    {
        name: 'Fit by Me',
        images: [process.env.PUBLIC_URL + '/Fit-by-Me.png',],
        type: 'MERN',
        description: 'Fit by Me is a fitness and diet tracker. Find thousands of exercises and recipes and track them in one place. Built with React, Node, MongoDB, Express and Material UI.',
        url: 'https://github.com/sswift1995/myfitness_app.git',
        github: 'https://github.com/sswift1995/myfitness_app.git'
    },
    {
        name: 'Fit by Me',
        images: [process.env.PUBLIC_URL + '/Fit-by-Me.png',],
        type: 'MERN',
        description: 'Fit by Me is a fitness and diet tracker. Find thousands of exercises and recipes and track them in one place. Built with React, Node, MongoDB, Express and Material UI.',
        url: 'https://github.com/sswift1995/myfitness_app.git',
        github: 'https://github.com/sswift1995/myfitness_app.git'
    },
    {
        name: 'Fit by Me',
        images: [process.env.PUBLIC_URL + '/Fit-by-Me.png',],
        type: 'MERN',
        description: 'Fit by Me is a fitness and diet tracker. Find thousands of exercises and recipes and track them in one place. Built with React, Node, MongoDB, Express and Material UI.',
        url: 'https://github.com/sswift1995/myfitness_app.git',
        github: 'https://github.com/sswift1995/myfitness_app.git'
    },
]