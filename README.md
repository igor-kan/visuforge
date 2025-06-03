# Visuforge

A web application for visually building, exploring, and sharing learning projects and workflows.

## Features

- Visual project and workflow builder
- Drag-and-drop interface
- Real-time collaboration
- Export and share visualizations

## Live Demo

Visit the live site: [https://igor-kan.github.io/visuforge](https://igor-kan.github.io/visuforge)

## Local Development

1. **Clone the repository:**
    ```bash
    git clone https://github.com/igor-kan/visuforge.git
    cd visuforge
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Start the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:8080](http://localhost:8080) in your browser.

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages.

1. **Ensure `gh-pages` is installed as a dev dependency:**
    ```bash
    npm install --save-dev gh-pages
    ```
2. **Run the deployment script:**
    ```bash
    npm run deploy
    ```
    This will build the project, create a `dist` directory with static assets, and deploy it to the `gh-pages` branch.

---

Built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.
