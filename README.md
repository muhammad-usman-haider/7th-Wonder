# 7th Wonder - Portfolio Website

A high-performance, fully responsive, and animated portfolio website tailored for a modern clothing brand ("7th Wonder"). Built with HTML5, modern CSS3, vanilla JavaScript, Three.js, and GSAP.

## ✨ Features

* **3D Hero Section:** Interactive floating particles mapped to mouse movement using Three.js.
* **High-End Animations:** Scroll-triggered entry animations and custom page-load sequence powered by GSAP.
* **Interactive Projects Display:** Seamlessly filterable project grid with smooth transitions and modular overlay windows.
* **Dynamic Capabilities:** Animated skill bars and hover-responsive icon grids.
* **Custom UI:** An animated custom mouse cursor and tailored mobile-hamburger menu.
* **No Build Tools Required:** Standard web technology stack running straight out of the box in the browser.

## 📸 Screenshots

### Hero Section with 3D Particles
![7th Wonder Hero Section](https://raw.githubusercontent.com/muhammad-usman-haider/7th-Wonder/main/Screenshots/Screenshot%202026-06-13%20200917.png)

### Projects Showcase
![7th Wonder Projects Grid](https://raw.githubusercontent.com/muhammad-usman-haider/7th-Wonder/main/Screenshots/Screenshot%202026-06-13%20200941.png)

### Capabilities & Skills
![7th Wonder Capabilities](https://raw.githubusercontent.com/muhammad-usman-haider/7th-Wonder/main/Screenshots/Screenshot%202026-06-13%20200956.png)

### Mobile Responsive Design
![7th Wonder Mobile View](https://raw.githubusercontent.com/muhammad-usman-haider/7th-Wonder/main/Screenshots/Screenshot%202026-06-13%20201008.png)

### Full Page Overview
![7th Wonder Full Overview](https://raw.githubusercontent.com/muhammad-usman-haider/7th-Wonder/main/Screenshots/Screenshot%202026-06-13%20201022.png)

## 🎬 Demo Video

Watch the full interactive experience in action:

[![7th Wonder Demo Video](https://raw.githubusercontent.com/muhammad-usman-haider/7th-Wonder/main/Screenshots/Screenshot%202026-06-13%20200917.png)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

> *Click the image above to watch the full video walkthrough of 7th Wonder's interactive features and animations.*

## 🚀 Live Demo

Experience the website live: [7th Wonder Portfolio](https://7th-wonder-portfolio.com)

## 📋 Installation & Setup

1. **Clone or Download the Project**
   ```bash
   git clone https://github.com/muhammad-usman-haider/7th-Wonder.git
   cd 7th-Wonder
   ```

2. **Folder Structure:** Ensure your directory looks like this:
   ```text
   /7th-wonder-portfolio
   ├── index.html
   ├── style.css
   ├── script.js
   ├── assets/
   │   ├── screenshots/
   │   └── videos/
   └── README.md
   ```

3. **Run the Site:** You can open `index.html` directly in any modern web browser.
   * *Note on Three.js:* If you experience cross-origin restrictions loading the script files locally on stricter browsers, run a quick local server. If you have Python installed, open your terminal and run:
     * Python 3: `python -m http.server 8000`
     * Navigate to `http://localhost:8000` in your browser.

## 🛠️ Tech Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS variables and animations
- **JavaScript (Vanilla)** - No frameworks, pure JS for interactivity
- **Three.js** - 3D graphics and particle effects
- **GSAP** - Professional animations and timelines

## 📚 External Libraries Used

The code utilizes CDNs for rapid deployment and caching optimization:

* **Three.js (r128):** Used in `script.js` to render the WebGL canvas, creating the responsive 3D particle field in the hero section.
* **GSAP (3.12.2) & ScrollTrigger:** Used for timeline management, the preloader removal, and firing component animations once they enter the viewport.
* **FontAwesome (6.4.0):** Used via CDN in the `<head>` of the HTML to render SVG vector icons in the Capabilities and Footer sections.

## ⚙️ Code Architecture & Customization

### Colors & Branding
All brand colors are managed via CSS Variables at the top of `style.css` (`:root`). Changing `--accent`, `--beige`, or `--black` will update the theme globally.

### Adding Projects
* To add more projects, duplicate the `.project-card` div in `index.html`. 
* Ensure you assign the correct `data-category` for the filter to target.
* Modal content can be tied dynamically to project IDs later using a JSON fetch, but currently exists as an embedded structural placeholder for layout integrity.

### Performance Optimization
* Lazy loading images for faster initial load
* CSS animations use GPU acceleration (`transform`, `opacity`)
* Minified external libraries via CDN

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Project Highlights

| Feature | Details |
|---------|---------|
| **Performance** | Sub-second load times with optimized assets |
| **Accessibility** | WCAG compliant with semantic HTML |
| **Responsiveness** | Mobile-first design, works on all screen sizes |
| **Animations** | Smooth 60fps animations using GSAP & Three.js |
| **SEO Optimized** | Proper meta tags and structured data |

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Muhammad Usman Haider**

- GitHub: [@muhammad-usman-haider](https://github.com/muhammad-usman-haider)
- Portfolio: [7th Wonder](https://7th-wonder-portfolio.com)

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue for any bugs or feature suggestions.

## 📞 Support

For questions, issues, or suggestions, please open an [Issue](https://github.com/muhammad-usman-haider/7th-Wonder/issues) on GitHub.

---

<div align="center">

**Made with ❤️ by Muhammad Usman Haider**

⭐ If you found this helpful, please consider giving it a star!

</div>
