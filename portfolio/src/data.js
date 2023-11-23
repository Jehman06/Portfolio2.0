export const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'React',
    'Redux',
    'Flask',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'REST',
    'Express',
    'Material UI',
    'Responsive Design',
    'Bootstrap',
    'TypeScript',
]

export const projects = [
    {
        name: 'HungryHub',
        images: [process.env.PUBLIC_URL + '/hungryhub1.png', process.env.PUBLIC_URL + '/hungryhub2.png', process.env.PUBLIC_URL + '/hungryhub3.png',],
        type: 'Food Delivery App',
        description: 'HungryHub is an app helping users find restaurants and get their food delivered. Built with React, AWS Amplify, AWS Cognito, DynamoDB and Material UI.',
        url: 'https://www.hungryhub.us',
        github: 'https://github.com/Jehman06/HungryHub.git'
    },
    {
        name: 'Fit by Me',
        images: [process.env.PUBLIC_URL + '/Fit-by-Me.png',],
        type: 'MERN Stack Fitness App',
        description: 'Fit by Me is a fitness and diet tracker. Find thousands of exercises and recipes and track them in one place. Built with React, Node, MongoDB, Express and Material UI.',
        url: 'https://github.com/sswift1995/myfitness_app.git',
        github: 'https://github.com/sswift1995/myfitness_app.git'
    },
]