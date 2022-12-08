const projects = [
  {
    title: "NCI iPath",
    dates: "Mar 2022 - Dec 2022",
    partners: "DALI Lab, Dartmouth College",
    img: "/images/NCIiPath.png",
    description: "NCI iPath is a mobile app that screens and connects cancer patients to depression treatments based on their criteria. The project is funded by the National Cancer Institute (NCI) and Dartmouth-Hitchcock Medical Center and built in collaboration with Dr. Paul J. Barr, researcher at the Geisel School of Medicine, patients from St. Johnsbury and clinicians. It is currently being beta tested at St. Johnsbury\n",
    techStack: ["https://img.shields.io/badge/react_native-191970.svg?style=for-the-badge&logo=react&logoColor=white",
      "https://img.shields.io/badge/firebase-%23007ACC.svg?style=for-the-badge&logo=firebase&logoColor=white",
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
    ],
    color: "#DFDFDF",
    key: 0
  },
  {
    title: "Search Engine in C",
    dates: "Jan 2022 - Mar 2022",
    partners: "CS50: Software Design & Implementation",
    img: "/images/NuggetsGame.png",
    description: "Built a 3 part system: crawler, indexer and querier in C to crawl web given a starter url and save the results in HTML files with 98% accuracy. It handles ‘and’, ‘or’ query operators. I also implemented a hashtable, set & counter data structures in C from scratch to support functions. View the reporsitory and further implementation details ",
    link: "https://github.com/nitya308/search-engine",
    techStack: ["https://img.shields.io/badge/c-191970.svg?style=for-the-badge&logo=c&logoColor=white",
      "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"],
    key: 1
  },
  {
    title: "Dart Schedule",
    dates: "Sep 2022 - Present",
    partners: "Personal Project, Dartmouth College",
    img: "/images/NuggetsGame.png",
    description: "A web application to automatically schedule team meetings/ lunches/ events for busy college students and reduce planning time by >70%. The backend fetches exsiting calendar availability using TCP/IP networking for the Google Calendar API. I wrote the search algorithm to compute the most recent available time block between groups and added functionality for creation, approval & invitation to Google Cal events. View the Github repository ",
    link: "https://github.com/nitya308/cal-schedule",
    techStack: ["https://img.shields.io/badge/c-191970.svg?style=for-the-badge&logo=c&logoColor=white",
      "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"],
    color: "#DFDFDF",
    key: 2
  },
  {
    title: "Nuggets Game",
    dates: "Jan 2022 - Mar 2022",
    partners: "CS50: Software Design & Implementation",
    img: "/images/NuggetsGame.png",
    description: "Nuggets is a multi-client game, in which players explore a set of rooms and passageways in search of gold nuggets. We designed the server and the client for this project in C. Players move around a map where each room is revealed to them when they enter it and collect gold nuggets by stepping on piles. If a player occupies another player’s spot they are swapped. Our code handles everything, from player joining, moving, leaving and winning to managing gold distribution. View the code ",
    link: "https://github.com/nitya308/nuggets-game",
    techStack: ["https://img.shields.io/badge/c-191970.svg?style=for-the-badge&logo=c&logoColor=white",
      "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"],
    key: 3
  },
  {
    title: "Student VolunteerMatch",
    dates: "Mar 2020 - Sep 2021",
    partners: "personal mid-quarantine project",
    img: "/images/StudentVolunteer.png",
    description: "A mid-lockdown project to help students at my school complete their community service requirements by matching them to projects in the neighborhood. I designed and coded this one myself. It’s a customisation engine with a quiz that takes in a student’s interests, skills and time frame and outputs resulting recommendations for volunteer projects. Deployed ",
    link: "https://nitya308.github.io/index.html",
    techStack: [
      "https://img.shields.io/badge/html5-%23007ACC.svg?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/css3-%234ea94b.svg?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"],
    color: "#F3F1FB",
    key: 4
  },
];

export default projects;