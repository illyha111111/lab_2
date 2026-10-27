const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages,
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency ?? "Недоступно",
    deviceMemory: navigator.deviceMemory ?? "Недоступно",
    screenWidth: screen.width,
    screenHeight: screen.height,
    colorDepth: screen.colorDepth,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

function renderStorageInfo() {
    const container = document.getElementById("storageInfo");
    const storedData = {};

    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        const value = localStorage.getItem(key);

        try {
            storedData[key] = JSON.parse(value);
        } catch {
            storedData[key] = value;
        }
    }

    container.textContent = JSON.stringify(storedData, null, 2);
}

try {
    localStorage.setItem("systemInfo", JSON.stringify(systemInfo));
    renderStorageInfo();
} catch (error) {
    document.getElementById("storageInfo").textContent =
        "Не вдалося отримати доступ до localStorage.";

    console.error(error);
}
async function fetchComments() {
    const container = document.getElementById("comments");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/3/comments"
        );

        if (!response.ok) {
            throw new Error(`Помилка сервера: ${response.status}`);
        }

        const comments = await response.json();

        container.replaceChildren();
        container.classList.add("comments-list");

        for (const comment of comments) {
            const card = document.createElement("article");
            card.className = "comment-card";

            const title = document.createElement("h3");
            title.textContent = comment.name;

            const email = document.createElement("p");
            email.className = "comment-email";
            email.textContent = `Email: ${comment.email}`;

            const body = document.createElement("p");
            body.className = "comment-body";
            body.textContent = comment.body;

            card.append(title, email, body);
            container.appendChild(card);
        }

        if (comments.length === 0) {
            container.textContent = "Коментарів поки немає.";
        }
    } catch (error) {
        container.textContent =
            "Не вдалося завантажити коментарі. Перевірте інтернет і оновіть сторінку.";

        console.error(error);
    }
}

fetchComments();
const modal = document.getElementById("contactModal");
const closeModalButton = document.getElementById("closeModal");

setTimeout(() => {
    modal.showModal();
}, 60000);

closeModalButton.addEventListener("click", () => {
    modal.close();
});
const themeToggleButton = document.getElementById("themeToggle");

function getAutomaticTheme() {
    const hour = new Date().getHours();

    return hour >= 7 && hour < 21 ? "light" : "dark";
}

function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);

    themeToggleButton.textContent = isDark
        ? "Увімкнути світлу тему"
        : "Увімкнути темну тему";

    themeToggleButton.setAttribute("aria-pressed", String(isDark));
}

themeToggleButton.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");

    applyTheme(isDark ? "light" : "dark");
});

// Початкова тема визначається за місцевим часом.
applyTheme(getAutomaticTheme());