const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kolya Sotnichenko | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Kolya Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Kolya Sotnichenko",
  logo_name: "Kolya Sotnichenko",
  resumeLink:
    "https://drive.google.com/file/d/1PUm5EDI46pdZfCuK2wKe10mnlrQQc8-e/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/KolyaSotnichenko",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/kolya_sotnichen1",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/rohan0301",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@rohankokkula",
    // },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/kolya-sotnichenko/",
    },
    // {
    //   siteName: "HashNode",
    //   iconifyClassname: "simple-icons:hashnode",
    //   style: {
    //     color: "#2962ff",
    //   },
    //   profileLink: "",
    // },
    {
      siteName: "Telegram",
      iconifyClassname: "simple-icons:telegram",
      style: {
        color: "#3390ec",
      },
      profileLink: "https://t.me/Kolya_Sotnichenko",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS",
        "⚡ Creating application backend in Node, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify,Heroku",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "YARN",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2d8ebb",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#2d8ebb",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        // {
        //   skillName: "Adobe Photoshop",
        //   fontAwesomeClassname: "simple-icons:adobephotoshop",
        //   style: {
        //     color: "#2fa3f7",
        //   },
        // },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "FIND MOVIE",
      img_path: "project-01.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "React",
          color: "#004782",
        },
        {
          lang: "HTML",
          color: "#820032",
        },
        {
          lang: "CSS",
          color: "#00a100",
        },
        {
          lang: "TypeScript",
          color: "#ff4b4b",
        },
        {
          lang: "OMDB API",
          color: "#3c0095",
        },
      ],
      // link: "https://teath.herokuapp.com ",
      code: "https://github.com/KolyaSotnichenko/Find-Movie",
      linkcolor: "white",
    },
    {
      title: "To Do App",
      img_path: "project-02.jpg",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "Adobe XD",
          color: "#004782",
        },
      ],
      link: "https://dribbble.com/shots/14733041-ToDo-App",
      // code: "https://github.com/KolyaSotnichenko/Find-Movie",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Junior Front-End Developer",
        subtitle: "N-Six",
        date: "Mart 2021 - present",
        content: [
          "Used T5 Transformer Model to build a Question Answering Model which generates questions based on Keywords extracted (WordNet, Sense2Vec) from studyshot notes.",
          "Built an MCQ Generation model using BERT",
          "Developed a personalized Chatbot using Rasa (Botfront.io).",
          "Created an Automatic Thumbnail Generator & Uploader for our youtube videos using Youtube v3 API",
          "Working on OpenAI's semantic search engine.",
          "Created a Clean MaterialUI Design for prototyping and design fixing before production-ready of APP",
          "Created FrontEnd components for StudyShot website",
          "Working on recommendation system for concept notes and questions based on student's behavior on our Flutter App(tracking)",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Information Technology",
          subtitle: "Vidyalankar Institute of Technology, Mumbai",
          date: "2017 - 2021",
          content: ["CGPA: 8.06/10"],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "Dr. Antonio Da Silva Technical Jr. College, Mumbai",
          date: "2014 - 2016",
          content: ["Precentage: 80%"],
        },
      ],
    },
    // {
    //   title: ["Ranks and Achivements"],
    //   data: [
    //     {
    //       title: "Ranks",
    //       content: [
    //         "#135/854 in Summer Analytics Kaggle Competition by IITG",
    //         "#113/5064 in CV-NLP Hackathon by HackerEarth",
    //       ],
    //     },
    //     {
    //       title: "Achievements",
    //       content: [
    //         "Designing Team Head at ACM-VIT",
    //         "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
    //         "Tableau Analyst & Consumer Badge by Tableau Official",
    //       ],
    //     },
    //   ],
    // },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Consultancy Website",
          subtitle: "kidsworldeducationconsultants.com",
          content: [
            "Created and hosted a website for consultancy providers in Kids Education Domain",
          ],
        },
        {
          title: "Portfolio Website",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Digital Skills: User Experience",
      subtitle: "Accenture",
      logo_path: "accenture.png",
      // certificate_link:
      //   "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Accenture",
      color_code: "#000000",
    },
    {
      title: "WEB UI",
      subtitle: "Prometheus",
      logo_path: "prometheus.png",
      certificate_link:
        "https://courses.prometheus.org.ua:18090/downloads/1056ad26bace46cbb3220495bffa70fd/Certificate.pdf",
      alt_name: "Prometheus",
      color_code: "#000000",
    },
    // {
    //   title: "Problem solving",
    //   subtitle: "HackerRank",
    //   logo_path: "problem-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Python",
    //   subtitle: "HackerRank",
    //   logo_path: "python-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Certificate of Merit",
    //   subtitle: "Summer Analytics | IIT Guwahati",
    //   logo_path: "iitg-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "IITG",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Desktop Qualified Associate",
    //   subtitle: "SimpliLearn",
    //   logo_path: "simplilearn-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Simplilearn",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Question Generation using Transformers",
    //   subtitle: "Udemy",
    //   logo_path: "udemy-01.png",
    //   certificate_link:
    //     "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
    //   alt_name: "Udemy",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "Stanford University",
    //   logo_path: "coursera-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Data Visualization",
    //   subtitle: "University of Michigan",
    //   logo_path: "coursera-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "University of Michigan",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Data Scientist Career Track",
    //   subtitle: "DataCamp",
    //   logo_path: "datacamp-01.png",
    //   certificate_link:
    //     "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
    //   alt_name: "DataCamp",
    //   color_code: "#000000",
    // },
    // {
    //   title: "PowerBI Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ukraine, Kiev",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+380 97 000 7552",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/KolyaSotnichenko",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kolya-sotnichenko/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kolya.sotnichenko0811@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Telegram",
    link: "https://t.me/Kolya_Sotnichenko",
    fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#3390ec", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
