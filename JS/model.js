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
      major: false,
      type: "NEXTJS",
      category: "",
      desc1: "This is Ecommerce Project using <b>NEXTJS</b> as frontend and MongoDB for Backend. Which facilate to add, delete and edit item from database. In this i also implemented discount coupen facility enchance it's. After Item added into cart the add to cart button convert into added to cart",
      learned: [
        "Mastered the fundamental concepts of HTML and CSS.",
        "Successfully integrated HTML with CSS to create a cohesive design.",
        "Gained experience with img and table tags for better content presentation.",
        "This project has laid a strong foundation, and I'm eager to dive into more complex projects."
      ],
      feature: [
        "Mastered the fundamental concepts of HTML and CSS.",
        "Successfully integrated HTML with CSS to create a cohesive design.",
        "Gained experience with img and table tags for better content presentation.",
        "This project has laid a strong foundation, and I'm eager to dive into more complex projects."
      ],
      modules: "",
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
      category: "",
      desc1: "In this project i used react <b>Leaflet</b> for map and i also used popup and marker facility in map. In this as user select the category any one from selection option as marker position change in the map. User can save the it's favourite event from the map popup option. Even if user reload the page the data will not lost",
      learned: [],
      features: [],
      modules: "",
      githublink: "https://github.com/jaiminb2512/Project-Solider/tree/main/Next/FullStack/EventVault",
      videolink: "",
      livedemo: ""
    },
    {
      projectNo: 63,
      id: "Wanderlust Chronicles",
      name: "Wanderlust Chronicles",
      major: false,
      type: "REACT",
      category: "",
      desc1: "This is a <b>MERN</b> stack and authentication-facilitated project to save the trip journey with images. Users can add, edit, delete, save photos, and view each journey after login. This is adaptive for all devices.",
      learned: [],
      features: [],
      modules: "",
      githublink: "https://github.com/jaiminb2512/Project-Solider/tree/main/React/FullStack/Wanderlust%20Chronicles",
      videolink: "",
      livedemo: ""
    },
    {
      projectNo: 64,
      id: "React Ecommerce",
      name: "React Ecommerce",
      major: false,
      type: "REACT",
      category: "",
      desc1: "As the name suggests, this is a React <b>Ecommerce</b> website. On the product page, I implemented multiple types of sorting and provided <b>Grid</b> and <b>List</b> views.",
      learned: [],
      features: [],
      modules: "",
      githublink: "",
      videolink: "",
      livedemo: ""
    },
    {
      projectNo: 46,
      id: "AnimeAltas",
      name: "AnimeAltas",
      major: false,
      type: "REACT",
      category: "",
      desc1: "In this I applied my concept of <b>API</b> and fetching the data. I also used React <b>Slick</b> to enable next and previous functionality. I facilitated searching, popular, and trending Anime. When a user clicks on an anime card, they are redirected through React <b>Router</b> to the next page, where they can get more info about the anime.",
      learned: [],
      features: [],
      modules: "",
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
      category: "JS GAME",
      desc1: "",
      learned: [],
      features: [],
      modules: "",
      githublink: "",
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
        modalDescription.innerHTML = project.desc1;

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

        if (Array.isArray(project.feature)) {
          project.feature.forEach(feature => {
            const featureBox = document.createElement('li');
            featureBox.innerHTML = feature;
            modalFeatures.appendChild(featureBox);
          });
        } else if (typeof project.feature === 'string') {
          const featureBox = document.createElement('li');
          featureBox.innerHTML = project.feature;
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