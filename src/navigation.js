const menus = [...document.querySelectorAll(".mobile-menu")];

function setMenuOpen(menu, toggle, isOpen) {
    menu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

for (const menu of menus) {
    const toggle = menu.querySelector(".mobile-menu-toggle");

    if (!(toggle instanceof HTMLButtonElement)) {
        continue;
    }

    toggle.addEventListener("click", () => {
        setMenuOpen(menu, toggle, !menu.classList.contains("is-open"));
    });

    menu.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(menu, toggle, false));
    });

    document.addEventListener("click", (event) => {
        if (event.target instanceof Node && !menu.contains(event.target)) {
            setMenuOpen(menu, toggle, false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuOpen(menu, toggle, false);
        }
    });
}
