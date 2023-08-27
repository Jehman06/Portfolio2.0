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