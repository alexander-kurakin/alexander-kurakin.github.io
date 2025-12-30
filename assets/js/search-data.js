// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-bio",
    title: "bio",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A glance into my projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-archero-clone-project",
          title: 'Archero-clone Project',
          description: "Early 2026.Final project for the advanced C# and architecture course. Skills, enemies, progression, and systemic combat to be included.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-gameplay-systems-amp-architecture",
          title: 'Gameplay Systems &amp;amp; Architecture',
          description: "2025-mid 2026.A series of progressively more complex gameplay systems focused on scalable architecture, decoupling, and practical implementation of design patterns.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-digital-hoarder",
          title: 'Digital Hoarder',
          description: "2024-Ongoing.Exploration-focused 3d action adventure",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-applied-prototypes-and-tools",
          title: 'Applied prototypes and Tools',
          description: "2019-2024Original Unity prototypes and tools focused on interaction, UX, asset integration, and small gameplay loops.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-structured-learning-amp-engine-mastery",
          title: 'Structured Learning &amp;amp; Engine Mastery',
          description: "2018–2022Structured learning through faithful reproduction of classic mechanics and gameplay loops.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-5yearsapp2d",
          title: '5yearsApp2D',
          description: "2018A mobile-friendly reflective diary app. Long-term personal retrospection through the 5 year intervals.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-parking-master-low-poly",
          title: 'Parking Master Low-Poly',
          description: "2016-2018A casual low-poly clicker game focused on timing and spatial awarenes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-merlock",
          title: 'Merlock',
          description: "2004-2006A narrative-driven 2D platformer combining traversal challenges with environmental storytelling.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-cpt-jones",
          title: 'Cpt. Jones',
          description: "2001An early 2D platformer game focused on classic arcade mechanics and linear level progression.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
