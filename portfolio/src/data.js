export const skills = [
    {
        name: 'HTML',
        icon: 'https://img.icons8.com/color/48/000000/html-5.png'
    },
    {
        name: 'CSS',
        icon: 'https://img.icons8.com/color/48/000000/css3.png'
    },
    {
        name: 'JavaScript',
        icon: 'https://img.icons8.com/color/48/000000/javascript.png'
    },
    {
        name: 'React',
        icon: 'https://vikram-myportfolio.netlify.app/Images/reactjs.webp'
    },
    {
        name: 'Python',
        icon: process.env.PUBLIC_URL + '/python.png'
    },
    {
        name: 'Node.js',
        icon: 'https://img.icons8.com/color/48/000000/nodejs.png'
    },
    {
        name: 'Redux',
        icon: process.env.PUBLIC_URL + '/redux.png'
    },
    {
        name: 'PostgreSQL',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
    },
    {
        name: 'MongoDB',
        icon: process.env.PUBLIC_URL + '/mongodb.png'
    },
    {
        name: 'GraphQL',
        icon: process.env.PUBLIC_URL + '/graphql.png'
    },
    {
        name: 'Material UI',
        icon: 'https://mui.com/static/logo.png'
    },
    {
        name: 'Bootstrap',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png'
    },
    {
        name: 'Tailwind CSS',
        icon: process.env.PUBLIC_URL + '/tailwind.png'
    },
    {
        name: 'TypeScript',
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png'
    },
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
]