# Visuforge

## Project Overview
**Live Application**: https://igor-kan.github.io/visuforge/

VisuForge is an advanced AI-powered data visualization and design platform that revolutionizes how users create, analyze, and share visual content through intelligent design tools, automated chart generation, interactive dashboards, and collaborative visual storytelling. Built with cutting-edge computer vision and machine learning technologies, VisuForge empowers data analysts, designers, researchers, and business professionals to transform complex data into compelling visual narratives and insights.

## Technology Stack
- **Framework**: Vite
- **Language**: TypeScript
- **Runtime**: React 18.3.1
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: TanStack Query
- **Routing**: React Router
- **Form Management**: React Hook Form + Zod validation
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Key Features
- Modern responsive web application
- TypeScript for type safety
- Accessible UI components with Radix UI
- Advanced form handling and validation
- Efficient data fetching and caching
- Interactive data visualization
- Dark/light theme switching

## Core Dependencies
- **UI Framework**: Radix UI component suite
- **Styling**: class-variance-authority, clsx, tailwind-merge
- **Forms**: react-hook-form with Zod validation
- **Data Fetching**: TanStack Query for server state
- **Recharts**: Data visualization and charts
- **Date Fns**: Date manipulation utilities
- **Lucide React**: Icon library
- **Next Themes**: Theme management
- **Sonner**: Toast notifications
- **Cmdk**: Command palette
- **Vaul**: Mobile-optimized modals

## Development Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview

```

## Project Structure
```
visuforge/
├── src/                     # Source code
├── public/                  # Static assets
├── vite.config.ts           # Configuration
├── tailwind.config.ts       # Configuration
├── tsconfig.json            # Configuration
└── package.json             # Dependencies
```

## Deployment
- **Platform**: GitHub Pages
- **URL**: 
- **Build**: Static site generation
- **CI/CD**: Automated deployment via gh-pages

## Development Notes
- Uses Vite for fast development and optimized builds
- Implements comprehensive form validation with Zod
- Includes accessibility features through Radix UI
- Supports dark/light theme switching

## Vite Features
- **Fast HMR**: Hot module replacement
- **Lightning Dev Server**: Instant startup
- **Optimized Builds**: Production optimization
- **Plugin Ecosystem**: Rich plugin support
- **Modern JavaScript**: ES modules support

## Testing & Quality
- TypeScript for type safety
- ESLint for code quality

## Recent Enhancements (January 2025)
- **📊 Advanced Analytics Dashboard**: Comprehensive learning analytics with real-time metrics
  - Interactive timeline charts showing performance trends
  - Engagement metrics and satisfaction tracking
  - Content performance monitoring with detailed breakdowns
  - Real-time KPI tracking and alerts
  - Exportable analytics reports for stakeholders
  
- **🎨 Data Visualization Builder**: Drag-and-drop chart creation tool
  - 7 different chart types (Line, Bar, Area, Pie, Scatter, Radar, Composed)
  - Interactive data editor with table and JSON views
  - Pre-built educational datasets for quick start
  - Color palette customization and theming options
  - Export capabilities (PNG, SVG, embed codes)
  - Real-time chart preview and configuration
  
- **🧠 AI Learning Path Generator**: Personalized curriculum planning
  - Subject-specific path generation (Math, Physics, Chemistry, Biology, CS)
  - Learning style adaptation (Visual, Auditory, Kinesthetic, Reading/Writing)
  - Difficulty level customization (Beginner to Expert)
  - AI-powered recommendations and study schedules
  - Adaptive learning features with real-time adjustments
  - Progress tracking and milestone monitoring
  
- **📈 Content Performance Tracker**: Detailed content analytics
  - Individual content performance analysis
  - Audience behavior tracking across devices
  - Learning outcome assessment and benchmarking
  - Competitive analysis against industry standards
  - Engagement metrics and retention analytics
  - Performance alerts and optimization suggestions
  
- **🎯 Enhanced Dashboard Interface**: Modernized educational platform
  - Integrated analytics tabs with comprehensive insights
  - Quick action buttons for common tasks
  - Performance overview cards with trend indicators
  - Streamlined navigation for educators and content creators
  - Responsive design optimized for educational workflows

## Technology Enhancements
- **Recharts Integration**: Advanced charting library with 7+ visualization types
- **AI-Powered Features**: Machine learning recommendations for learning paths
- **Real-time Analytics**: Live performance tracking and monitoring
- **Interactive Components**: Drag-and-drop interfaces and dynamic configurations
- **Educational Data Models**: Specialized data structures for learning analytics
- **Export Capabilities**: Multiple format support (PNG, SVG, PDF, CSV)
- **Responsive Design**: Mobile-optimized interfaces for on-the-go learning

## Future Enhancements
- **AI Content Generation**: Automated lesson and quiz creation
- **Advanced Visualization Types**: 3D charts, animations, and interactive simulations
- **Collaborative Features**: Team-based content creation and shared analytics
- **Integration APIs**: LMS integration and third-party educational tools
- **Mobile App Development**: Native iOS and Android applications
- **Machine Learning Analytics**: Predictive modeling for student success
- **VR/AR Integration**: Immersive educational content creation tools



## 🧭 Claude Code Navigation

### Quick Commands
**Development Scripts:**
- `dev`: vite
- `build`: vite build
- `lint`: eslint .

**Key Files:**
- `package.json` - Dependencies and scripts configuration
- `README.md` - Project documentation and setup guide
- `CLAUDE.md` - Comprehensive development guide for Claude
- `vite.config.ts` - Vite build tool configuration
- `tailwind.config.ts` - Tailwind CSS styling configuration
- `tsconfig.json` - TypeScript compiler configuration
- `components.json` - shadcn/ui components configuration

**Key Directories:**
- `src/` - Source code and main application logic
- `public/` - Static assets (images, icons, etc.)

**Claude Code Files:**
- `.claude/project-context.md` - Project overview and structure
- `.claude/coding-standards.md` - Development guidelines and patterns
- `.claude/commands/` - Custom Claude commands for common tasks
- `.claude/context/` - Domain-specific development context


### Quick Reference

**Common Tasks:**
- Start development: `npm run dev` or `bun dev`
- Build project: `npm run build` or `bun build`
- Lint code: `npm run lint` or `bun lint`

**File Patterns:**
- Components: `components/**/*.tsx`
- Pages: `app/**/*.tsx` or `pages/**/*.tsx`
- Utilities: `lib/**/*.ts`
- Styles: `**/*.css` or use Tailwind classes
- Tests: `**/*.test.ts` or `**/*.spec.ts`

**Development Tips:**
- Use TypeScript for type safety
- Follow existing component patterns
- Utilize shadcn/ui components
- Implement responsive design with Tailwind
- Test changes before committing

