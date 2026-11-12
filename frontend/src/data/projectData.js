// src/data/projectsData.js
// import blogImg1 from '../assets/img/portfolio/blogImg1.jpg'
// import blogImg2 from '../assets/img/portfolio/blogImg2.jpg'
// import blogImg3 from '../assets/img/portfolio/blogImg3.jpg' 
// import blogImg4 from '../assets/img/portfolio/blogImg4.jpg'

// import netflixImg1 from '../assets/img/portfolio/netflixImg1.jpg'
// import netflixImg2 from '../assets/img/portfolio/netflixImg2.jpg'
// import netflixImg3 from '../assets/img/portfolio/netflixImg3.jpg'
// import netflixImg4 from '../assets/img/portfolio/netflixImg4.jpg'

// import amazonImg1 from '../assets/img/portfolio/amazonImg1.jpg'
// import amazonImg2 from '../assets/img/portfolio/amazonImg2.jpg'
// import amazonImg3 from '../assets/img/portfolio/amazonImg3.jpg'
// import amazonImg4 from '../assets/img/portfolio/amazonImg4.jpg'

// import forumImg1 from '../assets/img/portfolio/forumImg1.jpg'
// import forumImg2 from '../assets/img/portfolio/forumImg2.jpg'
// import forumImg3 from '../assets/img/portfolio/forumImg3.jpg'
// import forumImg4 from '../assets/img/portfolio/forumImg4.jpg'

import zoomImg1 from '../assets/img/portfolio/zoomImage1.jpg'
import zoomImg2 from '../assets/img/portfolio/zoomImg2.jpg'
import zoomImg3 from '../assets/img/portfolio/zoomImg3.jpg'
import zoomImg4 from '../assets/img/portfolio/zoomImg4.jpg'


export const projectsData = {
  "ai-blog": {
    title: "AI-Powered Blog Application",
    category: "AI-Powered Blog Application",
    // images: [blogImg1, blogImg2, blogImg3, blogImg4],

    projectUrl: "https://blog-ai-powered-app-devferehan.vercel.app/",
    techStack: "React, Node.js, AI API Integration",
    desc: "This is a full-stack AI blog built with React, Node.js, Express, and MongoDB. It integrates the OpenAI API to automatically generate blog posts, summarize articles, and suggest relevant tags based on user behavior.",
    desc2: "The project is built on React technology with a user-friendly front-end (Dynamic Routing), and a robust back-end system that processes data quickly. The product is currently in active development on Vercel."
  },
  "netflix-clone": {
    title: "Netflix Clone",
    category: "Frontend Web Development",
    // images: [netflixImg1, netflixImg2,netflixImg3,netflixImg4],

    projectUrl: "https://dev-ferehan.github.io/NetFlix-React-App/",
    techStack: "React, REST APIs (TMDB), CSS3, GitHub Pages",
    desc: "This is a responsive Netflix clone built with React that replicates the core user interface of the popular streaming service. It fetches live, real-time movie data, trending shows, and trailers from external movie APIs.",
    desc2: "The project showcases dynamic UI rendering using React components, smooth slider layouts, and mobile-responsive styling. It is successfully deployed and fully interactive on GitHub Pages."
  },
  "amazon-clone": {
    title: "Amazon Website Clone",
    category: "Full-Stack Web Development",
    // images: [amazonImg1, amazonImg2,amazonImg3,amazonImg4],

    projectUrl: "https://devferehan-amazonapp.netlify.app",
    techStack: "React, Node.js, Express, MongoDB",
    desc: "This is a functional full-stack e-commerce application inspired by Amazon. It features a complete shopping experience including user authentication, product catalog browsing, a fully functional shopping cart, and mock payment processing.",
    desc2: "The application utilizes React for dynamic state management on the front-end and a secure back-end API to handle cart calculations. The live build is currently deployed and hosted on Netlify."
  },
  "evangadi-forum": {
    title: "Evangadi Forum - Q&A Platform",
    category: "Full-Stack Web Development", 
    // images: [forumImg1, forumImg2,forumImg3,forumImg4],

    projectUrl: "https://evangadi-forum-frontend-sand.vercel.app/", 
    techStack: "React, Node.js, Express, MySQL", 
    desc: "A fully functional Q&A platform inspired by Evangadi, designed to foster community knowledge-sharing. It allows users to securely register accounts, ask technical questions with specific tags, and provide comprehensive answers to support fellow developers.",
    desc2: "The platform features dynamic state management for smooth navigation, a structured database layout to cross-reference questions and answers, and a clean user interface built with modern CSS practices for clear readability and responsive layouts."
  },
  "zoom-clone": {
    title: "Zoom Clone - Video Conferencing App",
    category: "Full-Stack Web Development / WebRTC",
    images: [zoomImg1, zoomImg2,zoomImg3,zoomImg4],


    projectUrl: "https://my-zoom-clone-3c04.onrender.com",
    techStack: "React, Node.js, Express, Socket.io, WebRTC",
    desc: "A real-time video conferencing application inspired by Zoom. It enables multiple users to join virtual meeting rooms with high-quality audio and video streaming, seamless peer-to-peer communication, and dynamic room management.",
    desc2: "The system features instant state updates for users joining or leaving rooms, robust handling of media streams (audio/video tracks), and a responsive user interface designed for smooth navigation during live video calls."
  }
};