module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `http://www.matrisciano.site/`,
    // Your Name
    name: 'Aniello Matrisciano',
    // Main Site Title
    title: `Aniello Matrisciano | Computer Engineer`,
    // Description that goes under your name in main bio
    description: `Computer and Software Engineer`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/nello0503`,
    // Optional: LinkedIn account URL
    linkedin: `www.linkedin.com/in/aniello-matrisciano`,
    // Content of the About Me section
    about: `Hi there! Welcome to my portfolio. I'm a Computer Engineer with a Bachelor's degree. During my studies, I've learned how to work well in teams and collaborate effectively. The main skills I've picked up include making software, automating processes, and using math to solve problems. I love using the latest tech to make things easier and better. Whether it's writing software, setting up automation, or tackling tough math challenges, I'm all in. What makes me stand out is my focus on teamwork. I know that working together gets the best results. I'm always ready to learn and pay attention to the details.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ASP-NET Core MVC Internship Project',
        description:
          'A web application build to perform CRUD operations based on user role',
        link: 'https://github.com/nello0503/ASP.NET-Core-MVC-Internship-Project',
      },
      {
        name: 'RESTful Web API ASP-NET Core',
        description:
          'An API build to back-end a social media application',
        link: 'https://github.com/nello0503/ASP-NET-Core-API-Project',
      },
      {
        name: 'ASP-NET Core MVC Project',
        description:
          'a Web Application to manage a general porpose shop',
        link: 'https://github.com/nello0503/ASP-NET-Core-MVC-Project',
      },
      {
        name: 'Web portfolio',
        description: 'Personal portfolio built with React on GatsbyJS and TailwindCSS',
        link : 'https://github.com/nello0503/webfolio'

      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'ALTEN Naples',
        description: 'ERTMS/ETCS V&V Engineer, March 2024 - Present',
        link : 'https://www.alten.it/'
       
      },
      {
        name: 'ASL Caserta',
        description: 'ASP.NET Core Developer, September 2023 - November 2023',
        link : 'https://www.aslcaserta.it/'
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'ASP.NET Core, C, Python, Java',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL, MSSQL, SQLite',
      },
      {
        name: 'Tools & Softwares',
        description:
          'GitHub, Visual Studio, PostMan, VSCode, Intellij IDEA',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
