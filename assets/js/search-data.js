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
          description: "",
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
          section: "News",},{id: "projects-action-roguelike-prototype-archero-inspired",
          title: 'Action roguelike prototype (Archero-inspired)',
          description: "Early 2026.Action roguelike prototype focused on systemic combat, modular skills, and scalable progression systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-gameplay-systems-and-architecture",
          title: 'Gameplay systems and architecture',
          description: "2025-mid 2026.A series of progressively more complex gameplay systems focused on scalable architecture, decoupling, and practical implementation of design patterns.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-digital-hoarder",
          title: 'Digital Hoarder',
          description: "2024-Ongoing.Exploration-focused 3d action adventure",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-applied-prototypes-and-tools",
          title: 'Applied prototypes and tools',
          description: "2019-2024Original Unity prototypes and tools with focus on complex middleware integration and original UX experiments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-structured-learning-and-engine-mastery",
          title: 'Structured learning and engine mastery',
          description: "2018–2022Deconstructing industry-standard architectures, mastering Unity physics/UI, and reproducing classic game loops",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-mobile-and-full-stack-development",
          title: 'Mobile and full-stack development',
          description: "2016-2018Mobile application lifecycle, backend integration, and performance optimization for limited-resource devices.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-origins-and-engineering-foundations",
          title: 'Origins and engineering foundations',
          description: "2001–2015A 15-year journey transforming early passion into engineering discipline. From shipping complete arcade games in the early 2000s to mastering algorithms and unit testing during formal Computer Science studies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
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
