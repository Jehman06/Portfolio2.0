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
    'REST API',
    'GraphQL API',
    'Express',
    'Material UI',
    'Responsive Design',
    'Bootstrap',
    'TypeScript',
]

export const projects = [
    {
        name: 'HungryHub',
        images: [
            process.env.PUBLIC_URL + '/hungryhub1.png',
            process.env.PUBLIC_URL + '/hungryhub2.png',
            process.env.PUBLIC_URL + '/hungryhub3.png',
        ],
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
    {
        name: 'Formify',
        images: [
            process.env.PUBLIC_URL + '/formify-login.png',
            process.env.PUBLIC_URL + '/formify-doc.png',
            process.env.PUBLIC_URL + '/formify-sub.png'
        ],
        type: 'API',
        description: "Formify is a backend API for HTML and Javascript forms. It's a simple way to embed custom contact us forms, without having to build a backend. Use your frontend code, submit to Formify and view your form submissions on the app.",
        url: 'https://www.formifyapp.com',
        github: 'https://github.com/Jehman06/form-api.git'
    }
]