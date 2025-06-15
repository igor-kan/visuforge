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

## Deployment

To deploy your application, you can use a platform like Vercel, Netlify, or your own server.

For Vercel or Netlify, you typically connect your Git repository and configure the build settings. The platform will then automatically build and deploy your application whenever you push changes to the connected branch.

If deploying to your own server, you will need to build the application and then copy the build artifacts to your server.

```bash
npm run build
```

This command will create a `dist` folder (or similar, depending on your build configuration) with the optimized, static assets for your application.

## Custom Domain

Yes, most hosting platforms allow you to connect a custom domain to your deployed application. The exact steps will vary depending on the platform you choose.

Typically, you will need to:

1.  Purchase a domain name from a domain registrar (e.g., GoDaddy, Namecheap).
2.  Configure the DNS settings for your domain to point to your hosting provider's servers.
3.  Add the custom domain to your project settings on the hosting platform.

Consult the documentation of your chosen hosting provider for specific instructions.

---

Built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.
