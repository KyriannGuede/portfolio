const PROFILE = {
  githubUsername: "KyriannGuede",
  email: "kyriannguede@gmail.com"
};

const PROJECTS = [
  {
    id: "ping",
    title: "PING",
    subtitle: "Backend produit sécurisé",
    domain: "Backend / Produit",
    signal: "Java · Quarkus · PostgreSQL",
    categories: ["Backend", "Sécurité"],
    pitch:
      "Le socle backend d’un produit complet : identité, droits d’accès, persistance, fichiers, journalisation et déploiement reproductible.",
    tech: ["Java 21", "Quarkus", "PostgreSQL", "REST", "JWT", "Docker", "Maven"],
    learned: [
      "Concevoir une API autour de contrats clairs et de statuts HTTP cohérents.",
      "Relier authentification, autorisation, persistance et accès au système de fichiers.",
      "Packager un service avec sa base de données pour reproduire le même environnement partout."
    ],
    work: [
      "Collaborer avec un frontend à partir d’un contrat d’API partagé.",
      "Intégrer la sécurité et l’observabilité dans le flux normal de développement.",
      "Livrer un service testable, configurable et exploitable hors de la machine du développeur."
    ],
    principle:
      "Un backend utile ne se limite pas à répondre : il doit refuser correctement, expliquer ses erreurs et rester déployable.",
    capabilities: ["Architecture", "API design", "Sécurité", "Observabilité", "Déploiement", "Travail d’équipe"]
  },
  {
    id: "eplace",
    title: "E/PLACE",
    subtitle: "Canvas collaboratif temps réel",
    domain: "Web / Temps réel",
    signal: "JavaScript · Vite · Socket.IO",
    categories: ["Web", "Concurrence"],
    pitch:
      "Un client web collaboratif où l’interface reste synchronisée avec un serveur temps réel, tout en gérant identité, limites d’usage et reprise sur erreur.",
    tech: ["JavaScript", "HTML/CSS", "Vite", "OIDC", "REST", "Socket.IO", "Canvas"],
    learned: [
      "Construire un flux d’authentification et renouveler une session sans casser le parcours.",
      "Combiner requêtes HTTP et événements temps réel dans une même interface.",
      "Maintenir un état visuel cohérent malgré les événements asynchrones et les limites serveur."
    ],
    work: [
      "Déboguer une intégration distribuée avec les outils du navigateur et des contrats externes.",
      "Concevoir une UX résiliente : erreurs explicites, reprise, feedback et prévention des doubles actions.",
      "Faire évoluer l’interface sans casser les points d’intégration existants."
    ],
    principle:
      "Dans une interface temps réel, le vrai défi n’est pas l’animation : c’est la cohérence entre ce que voit l’utilisateur et ce que sait le serveur.",
    capabilities: ["Frontend", "Temps réel", "Authentification", "Résilience", "UX technique", "Debugging"]
  },
  {
    id: "tigros",
    title: "TIGROS",
    subtitle: "Chaîne de compilation",
    domain: "Compilateurs / C++",
    signal: "C++ · RE/Flex · Bison",
    categories: ["Systèmes", "Tooling"],
    pitch:
      "Une chaîne de compilation complète pour un langage réduit : analyse lexicale, syntaxe, arbre abstrait, vérifications sémantiques et génération de C.",
    tech: ["C++", "RE/Flex", "Bison", "AST", "C", "Autotools"],
    learned: [
      "Transformer une grammaire en représentations intermédiaires manipulables.",
      "Séparer les passes : parsing, liaison des symboles, typage et génération de code.",
      "Produire des diagnostics précis avec localisation et codes d’erreur cohérents."
    ],
    work: [
      "Décomposer un pipeline complexe en étapes vérifiables indépendamment.",
      "Lire et adapter une base de code existante avant d’ajouter de nouvelles abstractions.",
      "Raisonner sur les invariants plutôt que corriger uniquement les symptômes."
    ],
    principle:
      "Chaque passe réduit l’incertitude : la qualité du résultat final dépend surtout de la clarté des représentations intermédiaires.",
    capabilities: ["Parsing", "Architecture", "Modélisation", "Diagnostic", "C++", "Rigueur"]
  },
  {
    id: "libzork",
    title: "LIBZORK",
    subtitle: "Moteur narratif composable",
    domain: "C++ / Bibliothèque",
    signal: "C++20 · CMake · YAML",
    categories: ["Tooling", "Systèmes"],
    pitch:
      "Une bibliothèque de récits interactifs modélisés comme des graphes, avec plusieurs modes d’exécution et un état de partie évolutif.",
    tech: ["C++20", "CMake", "YAML", "Polymorphisme", "Smart pointers", "Graphes"],
    learned: [
      "Préserver une API publique stable tout en cachant les détails d’implémentation.",
      "Gérer explicitement la propriété des objets et le cycle de vie des ressources.",
      "Modéliser transitions, conditions et historique sans coupler le moteur à une seule interface."
    ],
    work: [
      "Concevoir une bibliothèque utilisable par plusieurs consommateurs.",
      "Choisir des abstractions extensibles plutôt qu’une succession de cas particuliers.",
      "Documenter les contrats d’une API et respecter une compilation stricte."
    ],
    principle:
      "Une bonne bibliothèque rend les cas simples évidents et laisse les cas avancés possibles sans modifier son contrat.",
    capabilities: ["C++", "API design", "Architecture", "Gestion mémoire", "Modélisation", "Extensibilité"]
  },
  {
    id: "creeps",
    title: "CREEPS",
    subtitle: "Automatisation multi-agents",
    domain: "Java / Concurrence",
    signal: "Java · HTTP/JSON · Threads",
    categories: ["Concurrence", "Backend"],
    pitch:
      "Un client autonome pilotant plusieurs agents dans un environnement distant, avec décisions asynchrones, coordination et retours différés du serveur.",
    tech: ["Java", "HTTP", "JSON", "Jackson", "Unirest", "CompletableFuture", "BlockingQueue"],
    learned: [
      "Orchestrer des tâches concurrentes sans bloquer inutilement les threads.",
      "Transformer des réponses différées en décisions exploitables par plusieurs agents.",
      "Observer un système parallèle grâce à des journaux isolés et des états explicites."
    ],
    work: [
      "Gérer délais, erreurs et disponibilité comme des états normaux du système.",
      "Faire évoluer une stratégie sans rendre l’exécution imprévisible.",
      "Diagnostiquer un comportement distribué à partir de traces plutôt que d’intuitions."
    ],
    principle:
      "La concurrence utile demande moins de threads que de règles claires sur qui possède l’état et quand il peut changer.",
    capabilities: ["Concurrence", "Résilience", "API design", "Observabilité", "Java", "Stratégie"]
  },
  {
    id: "42sh",
    title: "42SH",
    subtitle: "Interpréteur de commandes POSIX",
    domain: "UNIX / C",
    signal: "C99 · POSIX · Autotools",
    categories: ["Systèmes", "Tooling"],
    pitch:
      "Un interpréteur de commandes de type shell : parsing, exécution de processus, redirections, pipelines, variables et structures de contrôle.",
    tech: ["C99", "POSIX", "fork/exec", "Pipes", "Autotools", "Tests différentiels"],
    learned: [
      "Comprendre la création des processus et la circulation des descripteurs de fichiers.",
      "Parser un langage où l’ordre des expansions change le résultat.",
      "Préserver mémoire, codes de sortie et signaux sur une grande surface fonctionnelle."
    ],
    work: [
      "Partager un projet volumineux en modules intégrables par une équipe.",
      "Écrire une testsuite qui compare des comportements et couvre les cas limites.",
      "Lire une norme, arbitrer les ambiguïtés et produire un comportement reproductible."
    ],
    principle:
      "Les outils système paraissent simples à l’usage parce qu’ils absorbent une quantité considérable de cas limites.",
    capabilities: ["C", "UNIX", "Parsing", "Processus", "Tests", "Travail d’équipe"]
  },
  {
    id: "httpd",
    title: "HTTPD",
    subtitle: "Serveur HTTP/1.1",
    domain: "Réseau / C",
    signal: "C99 · Sockets · RFC",
    categories: ["Systèmes", "Backend"],
    pitch:
      "Un serveur HTTP/1.1 modulaire fonctionnant comme un service UNIX : configuration, parsing des requêtes, connexions persistantes, journalisation et arrêt propre.",
    tech: ["C99", "TCP sockets", "HTTP/1.1", "Signaux", "Daemon", "Make", "Pytest"],
    learned: [
      "Passer d’octets reçus sur une socket à une réponse conforme au protocole.",
      "Gérer les requêtes malformées, lectures partielles et fermetures de connexion.",
      "Structurer un service long-vivant avec configuration, logs et arrêt contrôlé."
    ],
    work: [
      "Implémenter à partir d’une spécification technique et vérifier les écarts avec des outils réseau.",
      "Prioriser les scénarios de défaillance dans une architecture modulaire.",
      "Construire de l’observabilité avant que le débogage en production ne devienne nécessaire."
    ],
    principle:
      "Un protocole n’est pas seulement son chemin heureux : sa robustesse se mesure surtout à la façon dont il traite l’incomplet et l’invalide.",
    capabilities: ["Réseau", "C", "Protocoles", "Résilience", "Observabilité", "Tests"]
  },
  {
    id: "malloc",
    title: "MALLOC",
    subtitle: "Allocateur mémoire",
    domain: "Mémoire / C",
    signal: "C · mmap · pthread",
    categories: ["Systèmes", "Concurrence"],
    pitch:
      "Une réimplémentation d’allocateur dynamique compatible avec l’API standard, attentive à la réutilisation des blocs, la fragmentation et la concurrence.",
    tech: ["C", "mmap/munmap", "pthread", "LD_PRELOAD", "GDB", "Make"],
    learned: [
      "Construire et préserver les invariants d’une structure de mémoire mutable.",
      "Arbitrer entre vitesse, fragmentation, métadonnées et sécurité des accès concurrents.",
      "Tester une bibliothèque en la préchargeant dans de vrais programmes."
    ],
    work: [
      "Diagnostiquer des corruptions difficiles à reproduire avec des outils bas niveau.",
      "Mesurer avant d’optimiser et identifier les coûts cachés d’une abstraction.",
      "Concevoir pour les cas limites : débordements, tailles nulles, réallocation et contention."
    ],
    principle:
      "Plus une abstraction est fondamentale, plus ses invariants doivent être simples à expliquer et difficiles à violer.",
    capabilities: ["C", "Gestion mémoire", "Performance", "Concurrence", "Debugging", "Rigueur"]
  },
  {
    id: "minimake",
    title: "MINIMAKE",
    subtitle: "Moteur de build incrémental",
    domain: "Tooling / C",
    signal: "C99 · Parsing · Processus",
    categories: ["Tooling", "Systèmes"],
    pitch:
      "Une version réduite d’un moteur de build : lecture de règles, expansion de variables, résolution des dépendances et exécution incrémentale.",
    tech: ["C99", "Parsing", "Graphes", "fork/exec", "Timestamps", "Make"],
    learned: [
      "Modéliser les dépendances et déterminer ce qui doit réellement être recalculé.",
      "Distinguer parsing, expansion et exécution pour éviter les effets de bord.",
      "Exécuter des recettes dans des processus séparés et propager correctement les erreurs."
    ],
    work: [
      "Construire un outil fiable à partir de comportements utilisateurs très compacts.",
      "Optimiser un workflow en évitant les opérations inutiles.",
      "Écrire des messages d’erreur qui accélèrent réellement le diagnostic."
    ],
    principle:
      "Un bon outil de build sait surtout ne rien faire quand tout est déjà à jour.",
    capabilities: ["C", "Tooling", "Parsing", "Graphes", "Processus", "Tests"]
  }
];

const CAPABILITIES = {
  Architecture: "Découper un système, expliciter les responsabilités et préserver des interfaces stables.",
  "API design": "Définir des contrats prévisibles, des erreurs utiles et des frontières nettes entre services.",
  Sécurité: "Intégrer identité, permissions, validation et confinement dès la conception.",
  Observabilité: "Rendre un système compréhensible grâce aux journaux, états et signaux de diagnostic.",
  Déploiement: "Reproduire l’environnement d’exécution et livrer un service configurable.",
  "Travail d’équipe": "Partager les contrats, isoler les responsabilités et rendre les intégrations vérifiables.",
  Frontend: "Transformer l’état métier en une interface lisible, accessible et réactive.",
  "Temps réel": "Synchroniser interface et serveur malgré l’asynchronisme, les délais et les événements concurrents.",
  Authentification: "Gérer le cycle de vie d’une session, le renouvellement et les chemins d’échec.",
  Résilience: "Traiter erreurs, indisponibilité et reprise comme des états normaux du système.",
  "UX technique": "Donner un retour clair sur des opérations complexes sans masquer leur état réel.",
  Debugging: "Réduire l’espace du problème à partir de traces, invariants et expériences contrôlées.",
  Parsing: "Transformer un texte en structures fiables tout en conservant le contexte des erreurs.",
  Modélisation: "Choisir les représentations qui rendent les règles du domaine explicites.",
  Diagnostic: "Produire des erreurs localisées, actionnables et cohérentes avec le pipeline.",
  "C++": "Maîtriser propriété, polymorphisme, compilation stricte et conception d’interfaces.",
  Rigueur: "Préserver les invariants et vérifier les cas limites avant l’optimisation.",
  "Gestion mémoire": "Raisonner sur propriété, durée de vie, fragmentation et corruption.",
  Extensibilité: "Ajouter de nouveaux comportements sans fragiliser le contrat existant.",
  Concurrence: "Coordonner plusieurs unités d’exécution avec un état partagé maîtrisé.",
  Java: "Construire des composants typés, asynchrones et intégrés à des services distants.",
  Stratégie: "Transformer les informations partielles d’un environnement en décisions progressives.",
  C: "Travailler près du système avec un contrôle explicite des ressources et des erreurs.",
  UNIX: "Comprendre processus, descripteurs, signaux et conventions POSIX.",
  Processus: "Créer, coordonner et observer l’exécution de programmes et pipelines.",
  Tests: "Construire des preuves reproductibles et explorer les cas limites avec méthode.",
  Réseau: "Raisonner sur les connexions, buffers, états partiels et défaillances distantes.",
  Protocoles: "Implémenter un contrat normé en respectant syntaxe, état et comportements d’erreur.",
  Performance: "Mesurer les coûts, cibler les goulots et arbitrer débit, mémoire et contention.",
  Tooling: "Créer des outils qui automatisent un workflow sans ajouter de friction inutile.",
  Graphes: "Représenter dépendances et transitions pour calculer un ordre ou un chemin cohérent."
};

const CATEGORY_ORDER = ["Tous", "Systèmes", "Backend", "Web", "Tooling", "Concurrence", "Sécurité"];

const els = {
  projectIndex: document.querySelector("#project-index"),
  projectSearch: document.querySelector("#project-search"),
  projectFilters: document.querySelector("#project-filters"),
  projectEmpty: document.querySelector("#project-empty"),
  dialog: document.querySelector("#project-dialog"),
  dialogContent: document.querySelector("#dialog-content"),
  dialogIndex: document.querySelector("#dialog-index"),
  dialogClose: document.querySelector("#dialog-close"),
  capabilityCloud: document.querySelector("#capability-cloud"),
  capabilityName: document.querySelector("#capability-name"),
  capabilityDescription: document.querySelector("#capability-description"),
  capabilityProjects: document.querySelector("#capability-projects"),
  repoList: document.querySelector("#repo-list"),
  githubStatus: document.querySelector("#github-status"),
  themeToggle: document.querySelector("#theme-toggle"),
  localTime: document.querySelector("#local-time"),
  copyEmail: document.querySelector("#copy-email"),
  toast: document.querySelector("#toast"),
  progress: document.querySelector("#scroll-progress"),
  currentYear: document.querySelector("#current-year")
};

const state = {
  category: "Tous",
  query: "",
  capability: "Architecture",
  lastProjectTrigger: null,
  toastTimer: null
};

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function projectSearchText(project) {
  return normalize(
    [
      project.title,
      project.subtitle,
      project.domain,
      project.signal,
      project.pitch,
      ...project.categories,
      ...project.tech,
      ...project.capabilities,
      ...project.learned,
      ...project.work
    ].join(" ")
  );
}

function visibleProjects() {
  const query = normalize(state.query.trim());
  return PROJECTS.filter((project) => {
    const categoryMatch = state.category === "Tous" || project.categories.includes(state.category);
    const queryMatch = !query || projectSearchText(project).includes(query);
    return categoryMatch && queryMatch;
  });
}

function renderFilters() {
  els.projectFilters.innerHTML = CATEGORY_ORDER.map(
    (category) => `
      <button
        class="lens-button${state.category === category ? " is-active" : ""}"
        type="button"
        data-category="${escapeHTML(category)}"
        aria-pressed="${state.category === category}"
      >${escapeHTML(category)}</button>`
  ).join("");

  els.projectFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const projects = visibleProjects();
  els.projectIndex.innerHTML = projects
    .map((project) => {
      const projectNumber = String(PROJECTS.indexOf(project) + 1).padStart(2, "0");
      return `
        <button class="project-row" type="button" data-project="${escapeHTML(project.id)}">
          <span class="project-title-wrap">
            <span class="project-number">${projectNumber}</span>
            <span class="project-title">${escapeHTML(project.title)} — ${escapeHTML(project.subtitle)}</span>
          </span>
          <span class="project-domain">${escapeHTML(project.domain)}</span>
          <span class="project-stack">${escapeHTML(project.signal)}</span>
          <span class="project-arrow" aria-hidden="true">↗</span>
        </button>`;
    })
    .join("");

  els.projectEmpty.hidden = projects.length > 0;
  els.projectIndex.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project, button));
  });
}

function listMarkup(items) {
  return `<ul>${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function openProject(projectId, trigger = null) {
  const project = PROJECTS.find((item) => item.id === projectId);
  if (!project) return;

  state.lastProjectTrigger = trigger || document.activeElement;
  const projectNumber = String(PROJECTS.indexOf(project) + 1).padStart(2, "0");
  els.dialogIndex.textContent = `PROJECT / ${projectNumber}`;
  els.dialogContent.innerHTML = `
    <div class="dialog-lead">
      <span class="dialog-label">${escapeHTML(project.domain)} / étude confidentielle</span>
      <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
      <p class="dialog-pitch">${escapeHTML(project.pitch)}</p>
      <div class="stack-line">${project.tech.map((tech) => `<span>${escapeHTML(tech)}</span>`).join("")}</div>
      <p class="confidential-note">
        Présentation volontairement synthétique. Aucun énoncé, code source, jeu de tests ou détail
        permettant de reconstituer le sujet académique n’est publié.
      </p>
    </div>
    <div class="dialog-details">
      <section class="detail-block">
        <h3>Ce que le projet m’a appris</h3>
        ${listMarkup(project.learned)}
      </section>
      <section class="detail-block">
        <h3>Transfert vers le monde du travail</h3>
        ${listMarkup(project.work)}
      </section>
      <section class="detail-block">
        <h3>Principe retenu</h3>
        <p>${escapeHTML(project.principle)}</p>
      </section>
    </div>`;

  if (typeof els.dialog.showModal === "function") {
    els.dialog.showModal();
  } else {
    els.dialog.setAttribute("open", "");
  }
  history.replaceState(null, "", `#project-${project.id}`);
}

function closeProject() {
  if (els.dialog.open && typeof els.dialog.close === "function") {
    els.dialog.close();
  } else {
    els.dialog.removeAttribute("open");
  }
  history.replaceState(null, "", "#work");
  state.lastProjectTrigger?.focus?.();
}

function capabilityCounts() {
  return Object.keys(CAPABILITIES)
    .map((name) => ({ name, count: PROJECTS.filter((project) => project.capabilities.includes(name)).length }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "fr"));
}

function renderCapabilities() {
  els.capabilityCloud.innerHTML = capabilityCounts()
    .map(
      ({ name, count }) => `
        <button
          class="capability-button${state.capability === name ? " is-active" : ""}"
          type="button"
          data-capability="${escapeHTML(name)}"
          aria-pressed="${state.capability === name}"
        >${escapeHTML(name)} <span>${String(count).padStart(2, "0")}</span></button>`
    )
    .join("");

  els.capabilityCloud.querySelectorAll("[data-capability]").forEach((button) => {
    button.addEventListener("click", () => {
      state.capability = button.dataset.capability;
      renderCapabilities();
      renderCapabilityReadout();
    });
  });
}

function renderCapabilityReadout() {
  const related = PROJECTS.filter((project) => project.capabilities.includes(state.capability));
  els.capabilityName.textContent = state.capability;
  els.capabilityDescription.textContent = CAPABILITIES[state.capability] || "Compétence mobilisée en contexte projet.";
  els.capabilityProjects.innerHTML = related.map((project) => `<li>${escapeHTML(project.title)} — ${escapeHTML(project.subtitle)}</li>`).join("");
}

function repoRow(repo) {
  const updated = repo.updated_at
    ? new Intl.DateTimeFormat("fr-FR", { month: "short", year: "numeric" }).format(new Date(repo.updated_at))
    : "public";
  return `
    <a class="repo-row" href="${escapeHTML(repo.html_url)}" target="_blank" rel="noreferrer">
      <strong>${escapeHTML(repo.name)}</strong>
      <p>${escapeHTML(repo.description || "Projet public — documentation disponible sur GitHub.")}</p>
      <span class="repo-meta">${escapeHTML(repo.language || "multi")} / ${escapeHTML(updated)}</span>
      <span aria-hidden="true">↗</span>
    </a>`;
}

function fallbackRepositories() {
  return [
    {
      name: "portfolio",
      description: "Le code source de ce site et son système d’exploration de projets.",
      language: "JavaScript",
      html_url: `https://github.com/${PROFILE.githubUsername}/portfolio`
    },
    {
      name: "OCR",
      description: "Travail public autour de la reconnaissance de caractères et du traitement d’image.",
      language: "C",
      html_url: `https://github.com/${PROFILE.githubUsername}/OCR`
    },
    {
      name: "authapp",
      description: "Application publique centrée sur l’authentification et la gestion d’accès.",
      language: "JavaScript",
      html_url: `https://github.com/${PROFILE.githubUsername}/authapp`
    }
  ];
}

async function loadGitHub() {
  try {
    const response = await fetch(`https://api.github.com/users/${PROFILE.githubUsername}/repos?sort=updated&per_page=100`);
    if (!response.ok) throw new Error(`GitHub ${response.status}`);
    const repos = (await response.json())
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 5);

    els.repoList.innerHTML = repos.map(repoRow).join("");
    els.githubStatus.textContent = `${repos.length} dépôts publics récents — synchronisés avec GitHub.`;
  } catch (error) {
    const repos = fallbackRepositories();
    els.repoList.innerHTML = repos.map(repoRow).join("");
    els.githubStatus.textContent = "Sélection locale — l’API GitHub est momentanément indisponible.";
  }
}

function updateTheme() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  document.querySelector('meta[name="theme-color"]').content = nextTheme === "dark" ? "#11110f" : "#f1eee5";
  els.themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "Activer le thème clair" : "Activer le thème sombre");
}

function updateClock() {
  const parisTime = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date());
  els.localTime.textContent = `PAR — ${parisTime}`;
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
  els.progress.style.width = `${progress * 100}%`;
}

function showToast(message) {
  clearTimeout(state.toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  state.toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(PROFILE.email);
    showToast("Adresse copiée dans le presse-papiers.");
  } catch (error) {
    window.location.href = `mailto:${PROFILE.email}`;
  }
}

function handleInitialHash() {
  const match = window.location.hash.match(/^#project-(.+)$/);
  if (match) openProject(match[1]);
}

function bindEvents() {
  els.projectSearch.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProjects();
  });

  els.dialogClose.addEventListener("click", closeProject);
  els.dialog.addEventListener("click", (event) => {
    if (event.target === els.dialog) closeProject();
  });
  els.dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeProject();
  });

  els.themeToggle.addEventListener("click", updateTheme);
  els.copyEmail.addEventListener("click", copyEmail);
  window.addEventListener("scroll", updateScrollProgress, { passive: true });

  document.addEventListener("keydown", (event) => {
    const isTyping = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
    if (event.key === "/" && !isTyping && !els.dialog.open) {
      event.preventDefault();
      els.projectSearch.focus();
      document.querySelector("#work").scrollIntoView({ behavior: "smooth" });
    }
  });
}

function init() {
  renderFilters();
  renderProjects();
  renderCapabilities();
  renderCapabilityReadout();
  bindEvents();
  loadGitHub();
  updateClock();
  updateScrollProgress();
  handleInitialHash();

  els.currentYear.textContent = new Date().getFullYear();
  setInterval(updateClock, 30_000);
}

init();
