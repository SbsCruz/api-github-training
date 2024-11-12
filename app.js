const API_URL = "https://api.github.com/orgs/stackbuilders/repos";

const stars = document.getElementById("stars");
const updated = document.getElementById("updated");
const allStars = document.getElementById("allStars");

const getRepoStars = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((repos) => {
      const fiveStars = repos.filter(({ stargazers_count }) => {
        return stargazers_count > 5;
      });
      fiveStars.map(({ name, stargazers_count, html_url }) => {
        const repoEl = document.createElement("li");
        repoEl.innerHTML = ` 
        <a href="${html_url}"> 
            ${name}  
        </a>
           tiene ${stargazers_count} estrellas `;
        stars.appendChild(repoEl);
      });
    });
};

const getRepoLastUpdated = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((repos) => {
      const updateDates = repos.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
      const orderedUpdates = updateDates.slice(0, 5);

      orderedUpdates.map(({ name, updated_at, html_url }) => {
        const dateEl = document.createElement("li");
        dateEl.innerHTML = `
        <a href="${html_url}"> 
            ${name}  
        </a>
        fue actualizado el ${updated_at.split("-")[1]} - ${
          updated_at.split("-")[0]
        } `;
        updated.appendChild(dateEl);
      });
    });
};

const getAllStars = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((repos) => {
      let starsCount = 0;
      repos.map((repo) => {
        starsCount += repo.stargazers_count;
    });
    const totalStars = document.createElement("p")
    totalStars.innerHTML = `
    StackBuilders tiene un total de
    <h2>${starsCount}</h2>
    estrellas
    `
    allStars.appendChild(totalStars)
    });
};

getRepoStars();
getRepoLastUpdated();
getAllStars();
