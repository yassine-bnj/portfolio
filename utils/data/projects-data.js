import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
    id: 7,
    name: 'Way2Gym SaaS Platform',
    description: "I contributed to the development of Way2Gym, a SaaS platform for gym management connecting gym owners, trainers, and users. The platform includes class scheduling, membership management, and real-time communication.",
    tools: ['Next.js', 'MongoDB', 'Node.js', 'Express.js', 'Tailwind CSS', 'AWS S3'],
    role: 'Full Stack Developer',
    code: '',
    demo: 'https://www.way2gym.com/',
    image: "way2gymApp",
},
    {
    id: 6,
    name: 'LinkedFishers Website Enhancement',
    description: "I collaborated with a team to enhance the LinkedFishers website, focusing on improving functionality, performance, and user experience. My contributions included developing new features, optimizing both front-end and back-end, and integrating key tools to ensure a smooth and responsive platform.",
    tools: ['Angular', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'Nodemailer'],
    role: 'Full Stack Developer',
    code: '',
    demo: 'https://www.linkedfishers.com/',
    image: "linkedFishersApp",
}

    ,
    {
    id: 5,
    name: 'E-commerce Website for Clothing Brand',
    description: "I developed a complete e-commerce website for a clothing brand, including a customer-facing store and an admin dashboard. Customers can browse products, manage their carts, and place orders, while administrators can manage products, orders, and customers from the dashboard. The platform also integrates email notifications using Nodemailer. The website is live and accessible at https://nekmando.tn/.",
    tools: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Nodemailer'],
    role: 'Full Stack Developer',
    code: '',
    demo: 'https://nekmando.tn/',
    image: "ecommerceApp",
    link : 'https://nekmando.tn/',
},

{
    id: 4,
    name: 'Fitness Mobile App',
    description: "I developed an Android fitness application that manages workout categories and exercises. The app includes a BMI (Body Mass Index) calculator to help users track their health and integrates Google Maps to locate nearby gyms and fitness centers. It provides a user-friendly interface for planning and organizing fitness routines.",
    tools: ['Android', 'Java', 'SQLite', 'Google Maps API'],
    role: 'Mobile Developer',
    code: '',
    demo: '',
    image: "fitnessApp",
    github_repo: 'https://github.com/yassine-bnj/app_fitness_android',
    // link : 'https://github.com/yassine-bnj/app_fitness_android',
},

    {
    id: 3,
    name: 'Irrigation Management System',
    description: "I developed an irrigation management system with both web and mobile applications. The web app (Spring Boot + Angular) manages licenses, clients, irrigation programs, and electrovalves with necessary validations. It integrates weather data from OpenWeather API to optimize irrigation schedules and includes role-based access control with permissions. Additionally, I built the mobile version using Ionic, enabling clients to monitor and manage irrigation directly from their smartphones.",
    tools: ['Spring Boot', 'Angular', 'Ionic', 'MySQL', 'REST API', 'OpenWeather API', 'JWT Authentication'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: "irrigationApp",
},

{
    id: 2,
    name: 'Irrigation Mobile App',
    description: "I developed the mobile version of the irrigation management system using Ionic. The app allows clients to monitor and control irrigation programs, manage electrovalves, and view weather forecasts from OpenWeather API directly on their smartphones. It provides an intuitive interface with secure authentication and role-based access, enabling users to manage irrigation anytime and anywhere.",
    tools: ['Ionic', 'Angular', 'REST API', 'OpenWeather API', 'JWT Authentication'],
    role: 'Mobile Developer',
    code: '',
    demo: '',
    image: "irrigationMobile",
},

,
    {
    id: 1,
    name: 'Form Management System',
    description: "I developed a form management web application similar to Google Forms using Spring Boot and Angular. The system allows users to create and customize forms, view submitted responses, and generate statistics for multiple-choice questions. It provides an intuitive interface for form creation and powerful data visualization for analyzing results.",
    tools: ['Spring Boot', 'Angular', 'MySQL', 'REST API', 'Chart.js'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: "formApp",
},
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },