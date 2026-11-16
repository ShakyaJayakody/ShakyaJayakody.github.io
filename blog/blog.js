// Shared behaviour for blog pages: theme toggle and mobile menu.
// The theme itself is applied before first paint by a one-line script in each page's <head>,
// using the same localStorage key ("theme") as the home page, so the choice carries across the site.
(function () {
    var root = document.documentElement;
    var themeBtn = document.getElementById("theme-toggle");
    var themeIcon = document.getElementById("theme-icon");

    function syncIcon() {
        if (themeIcon) {
            themeIcon.className = root.classList.contains("dark-theme") ? "fa fa-sun-o" : "fa fa-moon-o";
        }
    }

    syncIcon();

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            var dark = root.classList.toggle("dark-theme");
            try {
                localStorage.setItem("theme", dark ? "dark" : "light");
            } catch (e) { /* storage unavailable: the toggle still works for this page view */ }
            syncIcon();
        });
    }

    var menuBtn = document.getElementById("mobile-menu-btn");
    var navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            var open = navMenu.classList.toggle("open");
            var icon = menuBtn.querySelector("i");
            if (icon) icon.className = open ? "fa fa-times" : "fa fa-bars";
        });
    }
})();
