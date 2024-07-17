function renderProjectCard(project) {
  return `
      <div class="project-box" id="${project.id}">
          <h3>${project.name}</h3>
          <p>${project.desc1}</p>
          <div class="links">
              <a href="${project.githublink}" target="_blank">
                  <div class="icon project-box-icon">
                      <i class="uil uil-github-alt"></i>
                  </div>
              </a>
              ${project.livedemo ? `
              <a href="${project.livedemo}" target="_blank">
                  <div class="icon demo-link material-symbols-outlined">
                      language
                  </div>
              </a>
              ` : ''}
              ${project.videolink ? `
                  <a id="modal-videolink" href="${project.videolink}" target="_blank">
                      <div class="icon material-symbols-outlined">
                          play_circle
                      </div>
                  </a>
              ` : ''}
          </div>
      </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      projectNo: 67,
      id: "Retail Genius",
      name: "Retail Genius",
      major: true,
      type: "NEXTJS",
      category: "FULL STACK",
      desc1: "This is Ecommerce Project using <b>NEXTJS</b> as frontend and MongoDB for Backend. Which facilate to <b>Add</b>, <b>Delete</b> and <b>Edit</b> item from database. In this i also implemented <b>Discount Coupen</b> facility enchance it's. After Item added into cart the add to cart button convert into <b>Added to cart</b>.",
      desc2: "This is Ecommerce Project using <b>NEXTJS</b> as frontend and MongoDB for Backend. Which facilate to <b>Add</b>, <b>Delete</b> and <b>Edit</b> item from database. In this i also implemented <b>Discount Coupen</b> facility enchance it's. After Item added into cart the add to cart button convert into <b>Added to cart</b>.",
      learned: [
        "Mastered the fundamental concepts of HTML and CSS.",
        "Successfully integrated HTML with CSS to create a cohesive design.",
        "Gained experience with img and table tags for better content presentation.",
        "This project has laid a strong foundation, and I'm eager to dive into more complex projects."
      ],
      features: [
        "Mastered the fundamental concepts of HTML and CSS.",
        "Successfully integrated HTML with CSS to create a cohesive design.",
        "Gained experience with img and table tags for better content presentation.",
        "This project has laid a strong foundation, and I'm eager to dive into more complex projects."
      ],
      CSS: "Tailwind",
      modules: ["Fontawsome", "Axios", "React Router Dom"],
      githublink: "https://github.com/jaiminb2512/Project-Solider/tree/main/Next/FullStack/Retail%20Genius",
      videolink: "",
      livedemo: ""
    },
    {
      projectNo: 75,
      id: "EventVault",
      name: "EventVault",
      major: true,
      type: "NEXTJS",
      category: "FULL STACK",
      desc1: "In this project i used react <b>Leaflet</b> for map and i also used popup and marker facility in map. In this as user select the category any one from selection option as marker position change in the map. User can save the it's favourite event from the map popup option.",
      desc2: "I utilized React Leaflet for mapping functionalities, incorporating popups and markers. The map dynamically updates marker positions based on the selected category, providing an interactive experience. Users can also save their favorite events directly from the map's popup option. Additionally, I leveraged <b>TypeScript</b> to ensure robust type-checking and improve code quality throughout the development process.",
      learned: [
        "Gained proficiency in React Leaflet for implementing dynamic mapping functionalities.",
        "Learned to incorporate interactive features like popups and markers on maps.",
        "Enhanced skills in handling dynamic data updates on maps based on user interactions.",
        "Developed the ability to integrate TypeScript into a React project, ensuring robust type-checking and improving overall code quality.",
        "Acquired experience in using Tailwind and SCSS for styling complex components."
      ],
      features: [
        "Dynamic map with category-based marker updates.",
        "Interactive popups for detailed event information.",
        "Ability for users to save favorite events directly from the map.",
        "TypeScript integration for enhanced code quality and type-checking.",
        "Responsive design using Tailwind and SCSS."
      ],
      CSS: ["Tailwind", "scss"],
      modules: ["leaflet"],
      githublink: "https://github.com/jaiminb2512/Project-Solider/tree/main/Next/FullStack/EventVault",
      videolink: "",
      livedemo: ""
    },
    {
      projectNo: 63,
      id: "Wanderlust Chronicles",
      name: "Wanderlust Chronicles",
      major: true,
      type: "REACT",
      category: "FULL STACK",
      desc1: "This is a <b>MERN</b> stack and authentication-facilitated project to save the trip journey with images. Users can add, edit, delete, save photos, and view each journey after login. This is adaptive for all devices.",
      desc2: "This is a <b>MERN</b> stack and authentication-facilitated project to save the trip journey with images. Users can add, edit, delete, save photos, and view each journey after login. This is adaptive for all devices.",
      learned: [
        "Gained proficiency in developing a full-stack application using the MERN stack.",
        "Enhanced understanding of implementing authentication and authorization in web applications.",
        "Developed skills in handling and storing images using MongoDB GridFS.",
        "Learned to create a responsive and adaptive design suitable for all devices."
      ],
      features: [
        "User authentication and authorization for secure access.",
        "CRUD functionalities for managing trips and associated images.",
        "Image upload, storage, and retrieval using MongoDB GridFS.",
        "Responsive design ensuring compatibility across various devices."
      ],
      CSS: [],
      modules: ["Axios", "Toastify", "React Router Dom"],
      githublink: "https://github.com/jaiminb2512/Project-Solider/tree/main/React/FullStack/Wanderlust%20Chronicles",
      videolink: "",
      livedemo: ""
    },
    {
      projectNo: 64,
      id: "React Ecommerce",
      name: "React Ecommerce",
      major: true,
      type: "REACT",
      category: "FULL STACK",
      desc1: "As the name suggests, this is a React <b>Ecommerce</b> website. On the product page, I implemented multiple types of sorting and provided <b>Grid</b> and <b>List</b> views.",
      desc2: "As the name suggests, this is a React <b>Ecommerce</b> website. On the product page, I implemented multiple types of sorting and provided <b>Grid</b> and <b>List</b> views. In this project, I fetch data from an API using Axios. I also created an Add to Cart page where users can see the items they have selected for purchase. I used React <b>Styled Components</b> for styling and implemented ,b>Context</b> and <b>Reducer</b> for state management.",
      learned: [
        "Learned the use of React for building dynamic web applications.",
        "Gained experience in fetching data from an API using Axios.",
        "Used React Styled Components for component-level styling.",
        "Implemented Context and Reducer for state management in React."
      ],
      features: [
        "Multiple types of sorting on the product page.",
        "Grid and List views for product display.",
        "Add to Cart page for managing user-selected items.",
        "Fetching data from an API using Axios."
      ],
      CSS: ["Styled Component"],
      modules: ["Styled Componet", "React Icons", "Axios", "Context", "React Router Dom"],
      githublink: "https://github.com/jaiminb2512/Project-Solider/tree/main/React/FullStack/React%20Ecommerce",
      videolink: "",
      livedemo: ""
    },
    {
      projectNo: 46,
      id: "AnimeAltas",
      name: "AnimeAltas",
      major: false,
      type: "REACT",
      category: "API",
      desc1: "In this I applied my concept of <b>API</b> and fetching the data. I also used <b>React Slick</b> to enable next and previous functionality. I facilitated searching, popular, and trending Anime. When a user clicks on an anime card, they are redirected through React <b>Router</b> to the next page, where they can get more info about the anime.",
      desc2: "In this I applied my concept of <b>API</b> and fetching the data. I also used <b>React Slick</b> to enable next and previous functionality. I facilitated searching, popular, and trending Anime. When a user clicks on an anime card, they are redirected through React <b>Router</b> to the next page, where they can get more info about the anime. Ther i make one video section for trailer of that anime and below that i listed all the character of anime using react slick",
      learned: [
        "Successfully integrated HTML with CSS to create a cohesive design.",
        "Implemented API integration in React to fetch dynamic data, enhancing real-time content capabilities.",
        "Utilized React Slick within the React framework for carousel navigation, improving user experience with seamless next and previous functionality."
      ]
      ,
      features: [
        "Implemented search, popular, and trending sections for easy navigation and discovery of anime content.",
        "Created a detailed anime information page with a video section for trailers and a character carousel using React Slick.",
      ],
      CSS: "",
      modules: ["React slick", "React Router Dom", "React Icon"],
      githublink: "https://github.com/jaiminb2512/Project-Solider/tree/main/React/API/AnimeAtlas",
      videolink: "",
      livedemo: ""
    },
    {
      projectNo: 35,
      id: "Sudoku",
      name: "Sudoku",
      major: false,
      type: "HTML CSS JS",
      category: "JS Games",
      desc1: "By making this project i sharpen my all <b>JavaScript</b> concept and improve my skill. As per name it is suduko game in which user have 2 choice <b>2x2</b> and <b>3x3</b> and three levels which is Easy, Maybe and Evil as per name it having complexity. I also implemented solve the game",
      desc2: "By making this project i sharpen my all <b>JavaScript</b> concept and improve my skill. As per name it is suduko game in which user have 2 choice <b>2x2</b> and <b>3x3</b> and three levels which is Easy, Maybe and Evil as per name it having complexity. I also implemented solve the game",
      learned: [
        "Sharpened JavaScript concepts and improved overall skills through implementation.",
        "Developed proficiency in creating Sudoku game logic for 2x2 and 3x3 grids.",
        "Enhanced problem-solving abilities by implementing difficulty levels: Easy, Medium, and Evil.",
        "Implemented game-solving algorithms to provide users with the option to solve the game."
      ],
      features: [
        "Offers two grid sizes (2x2 and 3x3) for varied gameplay experiences.",
        "Provides three difficulty levels (Easy, Medium, Evil) to challenge players with different complexities.",
        "Includes a solve feature that allows users to automatically complete the Sudoku game."
      ],
      CSS: "",
      modules: "",
      githublink: "https://github.com/jaiminb2512/Project-Solider/tree/main/HTML%20CSS%20JS/JS%20Games/Sudoku",
      videolink: "",
      livedemo: ""
    }
  ];

  const projectContainer = document.querySelector('.project-container');
  const modal = document.getElementById('modal');
  const modalName = document.getElementById('modal-name');
  const modalLearned = document.getElementById('modal-learned');
  const modalDescription = document.getElementById('modal-description');
  const modalFeatures = document.getElementById('modal-features');
  const modalGithubLink = document.getElementById('modal-githublink');
  const modalLiveDemo = document.getElementById('modal-demolink');

  projects.forEach(project => {
    projectContainer.innerHTML += renderProjectCard(project);
  });

  document.querySelectorAll('.project-box').forEach(projectBox => {
    projectBox.addEventListener('click', () => {
      const project = projects.find(p => p.id === projectBox.id);
      if (project) {
        modal.style.display = 'block';
        modalName.innerHTML = project.name;
        modalDescription.innerHTML = project.desc2;

        modalLearned.innerHTML = "";
        modalFeatures.innerHTML = "";

        // Populate "What I learned" section
        const learnedHeader = document.createElement('h3');
        learnedHeader.textContent = "What I learned";
        modalLearned.appendChild(learnedHeader);

        if (Array.isArray(project.learned)) {
          project.learned.forEach(point => {
            const pointBox = document.createElement('li');
            pointBox.innerHTML = point;
            modalLearned.appendChild(pointBox);
          });
        } else if (typeof project.learned === 'string') {
          const pointBox = document.createElement('li');
          pointBox.innerHTML = project.learned;
          modalLearned.appendChild(pointBox);
        }

        // Populate "Key features" section
        const featureHeader = document.createElement('h3');
        featureHeader.textContent = "Key features";
        modalFeatures.appendChild(featureHeader);

        if (Array.isArray(project.features)) {
          project.features.forEach(feature => {
            const featureBox = document.createElement('li');
            featureBox.innerHTML = feature;
            modalFeatures.appendChild(featureBox);
          });
        } else if (typeof project.features === 'string') {
          const featureBox = document.createElement('li');
          featureBox.innerHTML = project.features;
          modalFeatures.appendChild(featureBox);
        }

        modalGithubLink.href = project.githublink;

        if (project.livedemo === "") {
          modalLiveDemo.style.display = "none";
        } else {
          modalLiveDemo.style.display = "block";
          modalLiveDemo.href = project.livedemo;
        }
      }
    });
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
