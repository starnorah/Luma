# Project Luma - Dynamic Lunar Dashboard

Luma is an advanced academic and wellness dashboard designed with a futuristic "Glassmorphism" aesthetic. It integrates academic tracking with well-being metrics to give students a holistic overview of their academic journey.

## Features

- **Dynamic GPA Optimizer:** Adjust your target GPA to receive real-time updates and strategy recommendations on how to achieve it across your current courses.
- **Mental Battery Gauge:** Tracks estimated cognitive load and provides "micro-pause" interventions to prevent burnout.
- **Study Mode Toggle:** Seamlessly switch between light and dark modes optimized for late-night study sessions.
- **Admin Panel Analytics:** Faculty view containing dynamic course management, burnout heatmaps, and intervention workflows.
- **Localization:** Full Arabic (عربي) language support, including Right-to-Left (RTL) readiness.

## Technologies Used

- **HTML5 & Vanilla CSS:** Utilizes CSS Grid, Flexbox, CSS Variables, and advanced Glassmorphism styling natively, without heavy CSS frameworks.
- **Vanilla JavaScript:** Powers the state management, local storage synchronization, language toggles, and modal interactions.
- **Chart.js:** Renders the dynamic SVG canvas charts for GPA tracking and trajectory mapping.
- **FontAwesome:** Integrated for intuitive UI iconography.
- **Google Fonts:** Uses 'Outfit' and 'Tajawal' for clean, modern topography.

## Setup Instructions

This project requires no build tools or package managers to run the core UI. 

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. (Optional) Run a local development server `npx serve .` to view the project if testing advanced fetch API features in the future.

## Local Storage

This application utilizes the browser's `localStorage` to persist course data and user profile settings. If you wish to reset the application to its default state, clear your browser's local storage or open the site in Incognito Mode.
