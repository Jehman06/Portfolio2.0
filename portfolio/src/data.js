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
        description: 'HungryHub is an app helping users find restaurants and request a delivery. React, AWS Amplify, AWS Cognito, DynamoDB, Material UI. This app does not facilitate any transaction and no food will be delivered. Demo purposes only.',
        url: 'https://www.hungryhub.us',
    },
    {
        name: 'Fit by Me',
        images: [process.env.PUBLIC_URL + '/Fit-by-Me.png', process.env.PUBLIC_URL + '/Fit-by-Me.png',],
        type: 'MERN',
        description: 'Fit by Me is a fitness and diet tracker. Find thousands of exercises and recipes and track them in one place. React, Node, MongoDB, Express, Material UI',
        url: 'https://www.hungryhub.us',
        image2: process.env.PUBLIC_URL + '/hungryhub.png',
    },
]