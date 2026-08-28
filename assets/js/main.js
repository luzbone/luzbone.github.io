const THEME_KEY = "luzbone-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    const isDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    const icon = toggle.querySelector(".theme-toggle__icon");
    if (icon) icon.textContent = isDark ? "☀️" : "🌙";
  }
}

function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored ?? (prefersDark ? "dark" : "light"));

  const toggle = document.getElementById("theme-toggle");
  toggle?.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

function initCounter() {
  const value = document.getElementById("counter-value");
  const inc = document.getElementById("increment");
  const dec = document.getElementById("decrement");
  if (!value || !inc || !dec) return;

  let count = 0;
  const render = () => {
    value.textContent = String(count);
  };
  inc.addEventListener("click", () => {
    count += 1;
    render();
  });
  dec.addEventListener("click", () => {
    count -= 1;
    render();
  });
}

const PROJECTS = [
  {
    name: "luzbone.github.io",
    description: "This personal website, served from GitHub Pages.",
    url: "https://github.com/luzbone/luzbone.github.io",
  },
  {
    name: "More coming soon",
    description: "Placeholder card — swap in real projects any time.",
    url: "https://github.com/luzbone",
  },
];

function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) return;
  list.innerHTML = "";
  for (const project of PROJECTS) {
    const li = document.createElement("li");
    li.className = "card";
    const link = project.url
      ? `<a href="${project.url}">${project.name}</a>`
      : project.name;
    li.innerHTML = `<h3>${link}</h3><p>${project.description}</p>`;
    list.appendChild(li);
  }
}

function initYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

initTheme();
initCounter();
renderProjects();
initYear();
