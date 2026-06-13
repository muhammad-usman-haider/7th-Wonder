# 7th Wonder - Portfolio Website

A high-performance, fully responsive, and animated portfolio website tailored for a modern clothing brand ("7th Wonder"). Built with HTML5, modern CSS3, vanilla JavaScript, Three.js, and GSAP.

## Features
* **3D Hero Section:** Interactive floating particles mapped to mouse movement using Three.js.
* **High-End Animations:** Scroll-triggered entry animations and custom page-load sequence powered by GSAP.
* **Interactive Projects Display:** Seamlessly filterable project grid with smooth transitions and modular overlay windows.
* **Dynamic Capabilities:** Animated skill bars and hover-responsive icon grids.
* **Custom UI:** An animated custom mouse cursor and tailored mobile-hamburger menu.
* **No Build Tools Required:** Standard web technology stack running straight out of the box in the browser.

## Installation & Setup

1.  **Clone or Download the Project.**
2.  **Folder Structure:** Ensure your directory looks like this:
    ```text
    /7th-wonder-portfolio
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
    ```
3.  **Run the Site:** You can open `index.html` directly in any modern web browser.
    * *Note on Three.js:* If you experience cross-origin restrictions loading the script files locally on stricter browsers, run a quick local server. If you have Python installed, open your terminal in the folder and type:
        * `python -m http.server 8000` (Python 3)
        * Navigate to `http://localhost:8000` in your browser.

## External Libraries Used
The code utilizes CDNs for rapid deployment and caching optimization:
* **Three.js (r128):** Used in `script.js` to render the WebGL canvas, creating the responsive 3D particle field in the hero section.
* **GSAP (3.12.2) & ScrollTrigger:** Used for timeline management, the preloader removal, and firing component animations once they enter the viewport.
* **FontAwesome (6.4.0):** Used via CDN in the `<head>` of the HTML to render SVG vector icons in the Capabilities and Footer sections.

## Code Architecture & Modifications
* **Colors:** All brand colors are managed via CSS Variables at the top of `style.css` (`:root`). Changing `--accent`, `--beige`, or `--black` will update the theme globally.
* **Content Updates:** * To add more projects, duplicate the `.project-card` div in `index.html`. Ensure you assign the correct `data-category` for the filter to target.
    * Modal content can be tied dynamically to project IDs later using a JSON fetch, but currently exists as an embedded structural placeholder for layout integrity.