// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Houda's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Houda Briwa Portfolio",
    type: "website",
    url: "https://houdabriwa.github.io/home/",
  },
};
// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Houda",
  middleName: "",
  lastName: "BRIWA",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/houdabriwa",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/houdabriwa",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/houdabriwa/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/houdabriwa/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/BRIWAhouda/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/houdabriwa.jpg"),
  imageSize: 300,
  message:
    "Data and knowledge state engineer and a recent Data science master graduate from polytechnic university of Madrid. I have a background in customer service, consulting and logistics. I'm interested in the application of machine learning and deep learning in the field of social science and ergonomics.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "houdabriwa", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Publications",
  message:
    "Mounia Mikram, Maryem Rhanoui, Siham Yousfi, and Houda Briwa, “Unit Load Devices (ULD) Demand Forecasting in the Air Cargo for Optimal Cost Management”, Journal of Automation, Mobile Robotics and Intelligent Systems, March 2020, vol. 14, no 3, p.71-80.",
  images: [
    { 
      img: require("../editable-stuff/houda.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/houda.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "SQL", value: 75 },
    { name: "R", value: 75 },
    { name: "Tableau", value: 70 },
    { name: "Deep learning", value: 70 },
    { name: "Machine Learning", value: 85 },
    { name: "Statistics", value: 85 },
    { name: "NLP", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 85 },
    { name: "Negociation", value: 75 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 80 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, please feel free to reach me to me",
  
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION

const blog = {
  show: true,
  heading: "Blog"
};

const contactInfo = {
  email: "briwahouda@gmail.com",
  phone: "+1 (914) - 233 - 4840",
  location: "Casablanca, Morocco"
}
export { settings, seo, navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog, contactInfo };
