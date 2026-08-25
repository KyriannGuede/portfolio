const CONFIG = {
  githubUsername: "KyriannGuede",
  displayName: "Kyriann Guede",
  initials: "KG",
  contactEmail: "kyriannguede@gmail.com",
  featuredRepoNames: ["OCR", "authapp"],
  demoRepoKeywords: {
    ocr: ["ocr", "wordsearch"]
  }
};

const state = {
  repos: [],
  projects: [],
  filter: "all",
  query: "",
  selectedImage: null,
  tesseractLoading: null
};

const els = {
  profileName: document.querySelector("#profile-name"),
  brandMark: document.querySelector(".brand-mark"),
  githubProfileLink: document.querySelector("#github-profile-link"),
  profileGithubLink: document.querySelector("#profile-github-link"),
  githubLogin: document.querySelector("#github-login"),
  githubBio: document.querySelector("#github-bio"),
  avatar: document.querySelector("#avatar"),
  metricRepos: document.querySelector("#metric-repos"),
  metricStars: document.querySelector("#metric-stars"),
  metricLanguages: document.querySelector("#metric-languages"),
  metricDemos: document.querySelector("#metric-demos"),
  featuredProjects: document.querySelector("#featured-projects"),
  allProjects: document.querySelector("#all-projects"),
  projectSearch: document.querySelector("#project-search"),
  projectEmpty: document.querySelector("#project-empty"),
  ocrFile: document.querySelector("#ocr-file"),
  dropzone: document.querySelector("#dropzone"),
  ocrCanvas: document.querySelector("#ocr-canvas"),
  ocrOutput: document.querySelector("#ocr-output"),
  ocrStatus: document.querySelector("#ocr-status"),
  runOcr: document.querySelector("#run-ocr"),
  clearOcr: document.querySelector("#clear-ocr"),
  copyOcr: document.querySelector("#copy-ocr")
};

function init() {
  els.profileName.textContent = CONFIG.displayName;
  els.brandMark.textContent = CONFIG.initials;
  document.querySelector(".profile-grid h1").textContent = CONFIG.displayName;
  document.querySelector('a[href^="mailto:"]').href = `mailto:${CONFIG.contactEmail}`;

  const githubUrl = `https://github.com/${CONFIG.githubUsername}`;
  els.githubProfileLink.href = githubUrl;
  els.profileGithubLink.href = githubUrl;

  bindNavigation();
  bindProjects();
  bindOcr();
  drawEmptyCanvas();
  loadGithub();
  buildProjects();

  const initialView = window.location.hash.replace("#", "");
  if (document.getElementById(initialView)) {
    setView(initialView);
  }
}

function bindNavigation() {
  document.querySelectorAll("[data-view], [data-view-trigger]").forEach((control) => {
    control.addEventListener("click", () => {
      const viewId = control.dataset.view || control.dataset.viewTrigger;
      setView(viewId);
    });
  });
}

function setView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.view === viewId);
  });

  window.history.replaceState(null, "", `#${viewId}`);
}

function bindProjects() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderProjects();
    });
  });

  els.projectSearch.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderProjects();
  });
}

async function loadGithub() {
  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${CONFIG.githubUsername}`),
      fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=100`)
    ]);

    if (!profileResponse.ok || !reposResponse.ok) {
      throw new Error("GitHub API indisponible");
    }

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    state.repos = repos
      .filter((repo) => !repo.fork)
      .map(normalizeGithubRepo);

    renderProfile(profile);
    buildProjects();
  } catch (error) {
    els.githubBio.textContent = "Profil GitHub non charge. Verifie le username dans app.js.";
    buildProjects();
  }
}

function renderProfile(profile) {
  els.githubLogin.textContent = `@${profile.login}`;
  els.githubBio.textContent = profile.bio || "Profil GitHub public";
  els.avatar.src = profile.avatar_url;
  els.avatar.alt = `Avatar GitHub de ${profile.login}`;
}

function buildProjects() {
  state.projects = state.repos;

  renderMetrics();
  renderFeatured();
  renderProjects();
}

function normalizeGithubRepo(repo) {
  const normalizedName = repo.name.toLowerCase();
  const featured = CONFIG.featuredRepoNames.some(
    (name) => name.toLowerCase() === normalizedName
  );
  const demo = Object.entries(CONFIG.demoRepoKeywords).find(([, keywords]) =>
    keywords.some((keyword) => normalizedName.includes(keyword.toLowerCase()))
  );

  return {
    name: repo.name,
    description: repo.description || "Depot public GitHub.",
    language: repo.language || "Non precise",
    topics: repo.topics || [],
    url: repo.html_url,
    homepage: repo.homepage,
    featured,
    demo: demo ? demo[0] : null,
    source: "github",
    stars: repo.stargazers_count || 0,
    updatedAt: repo.updated_at
  };
}

function renderMetrics() {
  const languages = new Set(state.projects.map((project) => project.language).filter(Boolean));
  const stars = state.projects.reduce((total, project) => total + (project.stars || 0), 0);
  const demos = state.projects.filter((project) => project.demo).length;

  els.metricRepos.textContent = state.repos.length;
  els.metricStars.textContent = stars;
  els.metricLanguages.textContent = languages.size;
  els.metricDemos.textContent = demos;
}

function renderFeatured() {
  const markedFeatured = state.projects.filter((project) => project.featured);
  const featured = (markedFeatured.length ? markedFeatured : state.projects).slice(0, 3);
  els.featuredProjects.innerHTML = featured.map(projectCard).join("");
  bindProjectDemoLinks(els.featuredProjects);
}

function renderProjects() {
  const projects = state.projects.filter((project) => {
    const text = [
      project.name,
      project.description,
      project.language,
      ...(project.topics || [])
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = !state.query || text.includes(state.query);
    const matchesFilter =
      state.filter === "all" ||
      (state.filter === "featured" && project.featured) ||
      (state.filter === "github" && project.source === "github") ||
      (state.filter === "demo" && project.demo);

    return matchesQuery && matchesFilter;
  });

  els.allProjects.innerHTML = projects.map(projectCard).join("");
  els.projectEmpty.hidden = projects.length > 0;
  bindProjectDemoLinks(els.allProjects);
}

function projectCard(project) {
  const tags = [project.language, ...(project.topics || []).slice(0, 4)]
    .filter(Boolean)
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");

  const demoLink = project.demo
    ? `<a href="#demos" data-demo-link="${project.demo}">Tester</a>`
    : "";
  const liveLink = project.homepage
    ? `<a href="${project.homepage}" target="_blank" rel="noreferrer">Live</a>`
    : "";
  const codeLink = project.url && project.url !== "#"
    ? `<a href="${project.url}" target="_blank" rel="noreferrer">Code</a>`
    : "";

  return `
    <article class="project-card">
      <div class="tag-row">${tags}</div>
      <h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="project-meta">
        <span>${project.stars || 0} star${project.stars === 1 ? "" : "s"}</span>
        <span>${project.source === "github" ? "GitHub public" : "Selection locale"}</span>
      </div>
      <div class="project-links">${codeLink}${liveLink}${demoLink}</div>
    </article>
  `;
}

function bindProjectDemoLinks(root) {
  root.querySelectorAll("[data-demo-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setView("demos");
      document.querySelector("#ocr-title").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function bindOcr() {
  els.ocrFile.addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (file) {
      loadImageFile(file);
    }
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    els.dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropzone.classList.add("is-dragging");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    els.dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropzone.classList.remove("is-dragging");
    });
  });

  els.dropzone.addEventListener("drop", (event) => {
    const [file] = event.dataTransfer.files;
    if (file && file.type.startsWith("image/")) {
      els.ocrFile.files = event.dataTransfer.files;
      loadImageFile(file);
    }
  });

  els.runOcr.addEventListener("click", runOcr);
  els.clearOcr.addEventListener("click", clearOcr);
  els.copyOcr.addEventListener("click", copyOcr);
}

function loadImageFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    const image = new Image();
    image.onload = () => {
      state.selectedImage = image;
      drawImageToCanvas(image);
      els.ocrOutput.value = "";
      setOcrStatus("Image chargee");
    };
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function drawEmptyCanvas() {
  const ctx = els.ocrCanvas.getContext("2d");
  ctx.fillStyle = "#fbfaf8";
  ctx.fillRect(0, 0, els.ocrCanvas.width, els.ocrCanvas.height);
  ctx.fillStyle = "#67615a";
  ctx.font = "22px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("Apercu de l'image OCR", els.ocrCanvas.width / 2, els.ocrCanvas.height / 2);
}

function drawImageToCanvas(image) {
  const canvas = els.ocrCanvas;
  const ctx = canvas.getContext("2d");
  const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
  const width = image.width * scale;
  const height = image.height * scale;
  const x = (canvas.width - width) / 2;
  const y = (canvas.height - height) / 2;

  ctx.fillStyle = "#fbfaf8";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, x, y, width, height);
}

async function runOcr() {
  if (!state.selectedImage) {
    setOcrStatus("Ajoute une image");
    return;
  }

  setOcrStatus("Chargement OCR");
  els.runOcr.disabled = true;

  try {
    await ensureTesseract();
    setOcrStatus("Analyse en cours");
    const result = await Tesseract.recognize(els.ocrCanvas, "eng+fra", {
      logger(message) {
        if (message.status === "recognizing text") {
          setOcrStatus(`${Math.round(message.progress * 100)}%`);
        }
      }
    });

    els.ocrOutput.value = result.data.text.trim() || "Aucun texte reconnu.";
    setOcrStatus("Termine");
  } catch (error) {
    els.ocrOutput.value =
      "Impossible de charger le moteur OCR navigateur. Verifie ta connexion ou branche le projet C via une API backend.\n\n" +
      "Fallback demo : l'image est bien chargee dans le canvas et prete a etre envoyee a un service OCR.";
    setOcrStatus("Mode demo");
  } finally {
    els.runOcr.disabled = false;
  }
}

function ensureTesseract() {
  if (window.Tesseract) {
    return Promise.resolve();
  }

  if (!state.tesseractLoading) {
    state.tesseractLoading = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    });
  }

  return state.tesseractLoading;
}

function clearOcr() {
  state.selectedImage = null;
  els.ocrFile.value = "";
  els.ocrOutput.value = "";
  drawEmptyCanvas();
  setOcrStatus("Pret");
}

async function copyOcr() {
  if (!els.ocrOutput.value.trim()) {
    return;
  }
  await navigator.clipboard.writeText(els.ocrOutput.value);
  setOcrStatus("Copie");
}

function setOcrStatus(text) {
  els.ocrStatus.textContent = text;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
