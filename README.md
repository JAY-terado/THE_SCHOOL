# 🏫 The School of Excellence

<p align="center">
  <strong>Where Potential Becomes Excellence</strong><br>
  <em>A modern, interactive, and responsive web portal for a premier educational institution.</em>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-available-scripts">Scripts</a> •
  <a href="#-license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
</p>

---

## 📖 Overview

**The School of Excellence** web application is an educational platform crafted to provide students, parents, faculty, and prospective families with a seamless digital experience. 

From interactive admissions guides and comprehensive academic curriculum overviews to campus facilities highlights and parent resources, the portal serves as a one-stop digital hub for the institution.

---

## ✨ Features

- **🎓 Comprehensive Academics**: Detailed breakdown of educational stages from Early Childhood / Kindergarten to Senior Secondary, curriculum methodologies, and extracurricular opportunities.
- **📝 Admissions Guide**: Step-by-step admissions walkthrough, fee structure, age criteria, and interactive inquiry forms.
- **🏛️ Virtual Campus & Facilities**: Highlighting smart classrooms, STEM & robotics laboratories, sports complexes, libraries, arts auditoriums, and transport amenities.
- **🎨 Vibrant Campus Life**: Showcasing student leadership, house systems, clubs, community outreach, and annual events.
- **👨‍👩‍👧‍👦 Parent Resource Center**: Parent-Teacher Association (PTA) info, academic calendars, portal links, and essential handbooks.
- **📱 Fully Responsive Design**: Optimized across mobile, tablet, and desktop screens with smooth transitions powered by Framer Motion.
- **⚡ Modern Performance**: Built with React 19, TypeScript, and Vite for instant load times and snappy navigation.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Component-driven UI library |
| **[TypeScript](https://www.typescriptlang.org/)** | Static type safety and developer productivity |
| **[Vite 8](https://vite.dev/)** | Next-generation frontend build tool and dev server |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework for responsive design |
| **[Framer Motion](https://www.framer.com/motion/)** | Production-ready motion and animation library |
| **[React Router DOM](https://reactrouter.com/)** | Client-side routing and layout management |
| **[Lucide React](https://lucide.dev/)** | Clean, consistent icons |

---

## 📂 Project Structure

```text
THE_SCHOOL/
├── public/                # Static public assets (favicons, icons, etc.)
├── src/
│   ├── assets/            # Project images, graphics, and branding assets
│   ├── components/        # Reusable UI components
│   │   ├── Footer.tsx     # Global footer with quick links & newsletter
│   │   ├── Layout.tsx     # Shell layout wrapper for consistent header/footer
│   │   └── Navbar.tsx     # Responsive navigation bar with mobile drawer
│   ├── pages/             # Route views and page components
│   │   ├── About.tsx      # School history, vision, leadership, and ethos
│   │   ├── Academics.tsx  # Curriculum, pedagogical approaches, levels
│   │   ├── Admissions.tsx # Process, eligibility, fees, inquiry form
│   │   ├── CampusLife.tsx # Clubs, arts, sports, student council
│   │   ├── Contact.tsx    # Campus address, maps, inquiry submission
│   │   ├── Facilities.tsx # Infrastructure, labs, sports, libraries
│   │   ├── Home.tsx       # Landing page with hero, highlights, testimonials
│   │   └── Parents.tsx    # Parent portal resources, calendars, and FAQs
│   ├── App.css            # Global component styles
│   ├── App.tsx            # Route configuration and core application setup
│   ├── index.css          # Tailwind CSS directives and custom base rules
│   └── main.tsx           # React DOM root entry point
├── index.html             # Main HTML entry file
├── package.json           # Scripts and dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript compilation settings
└── vite.config.ts         # Vite build configuration
```

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running for evaluation or development.

### Prerequisites

Ensure you have the following installed on your machine:

- **[Node.js](https://nodejs.org/)** (v18.0.0 or higher recommended)
- **[npm](https://www.npmjs.com/)** (comes bundled with Node.js) or **yarn** / **pnpm**
- **[Git](https://git-scm.com/)**

Check your installed versions:
```bash
node -v
npm -v
git --version
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JAY-terado/THE_SCHOOL.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd THE_SCHOOL
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal) to view the application.

---

## 🤝 Contributing & Local Development Workflow

Contributions make the open-source community a wonderful place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

Follow this step-by-step guide to clone locally, make your changes, and submit a Pull Request.

### 1. Fork the Repository
Click the **Fork** button at the top-right corner of the [repository page](https://github.com/JAY-terado/THE_SCHOOL) to create a copy in your GitHub account.

### 2. Clone Your Fork Locally
Open your terminal and clone your personal fork:

```bash
git clone https://github.com/<YOUR-USERNAME>/THE_SCHOOL.git
cd THE_SCHOOL
```

*(Replace `<YOUR-USERNAME>` with your actual GitHub username).*

### 3. Set Up Upstream Remote
Keep your fork in sync with the original repository by configuring the upstream remote:

```bash
git remote add upstream https://github.com/JAY-terado/THE_SCHOOL.git
```

Verify your remotes:
```bash
git remote -v
```
You should see `origin` pointing to your fork and `upstream` pointing to `JAY-terado/THE_SCHOOL`.

### 4. Create a New Branch
Always create a descriptive branch for your work:

```bash
# For a new feature:
git checkout -b feature/campus-virtual-tour

# For a bug fix:
git checkout -b fix/navbar-mobile-toggle
```

### 5. Install Dependencies & Develop
```bash
npm install
npm run dev
```

- Follow the existing code style and TypeScript conventions.
- Make modular, readable commits.
- Ensure all interactive elements remain responsive across desktop and mobile.

### 6. Lint and Validate
Before committing, make sure your code passes linting and builds cleanly without TypeScript errors:

```bash
# Run ESLint
npm run lint

# Verify production build & TypeScript types
npm run build
```

### 7. Commit Your Changes
Stage and commit your modifications with a meaningful message:

```bash
git add .
git commit -m "feat: add interactive virtual tour card to facilities page"
```

> **Tip**: Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: ...`, `fix: ...`, `docs: ...`, `style: ...`, `refactor: ...`).

### 8. Rebase with Upstream
Before pushing, ensure your branch is up-to-date with the latest `main` branch from the upstream repository:

```bash
git checkout main
git pull upstream main
git checkout <your-branch-name>
git rebase main
```

### 9. Push to Your Fork
Push your local branch to your GitHub fork:

```bash
git push -u origin <your-branch-name>
```

### 10. Open a Pull Request
1. Go to your fork on GitHub.
2. Click the **Compare & pull request** button next to your branch banner.
3. Provide a clear and concise description of the changes made (include screenshots or GIFs for UI updates).
4. Submit the Pull Request and wait for review!

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) at `http://localhost:5173` |
| `npm run build` | Compiles TypeScript types and builds the production bundle into the `dist/` directory |
| `npm run preview` | Locally serves the production build from `dist/` for testing |
| `npm run lint` | Runs ESLint across all TypeScript and React files to identify code quality issues |

---

## 🛡️ Code Guidelines & Best Practices

- **TypeScript**: Define explicit interfaces and types for props, state, and API models. Avoid using `any`.
- **Styling**: Use Tailwind CSS utility classes. Group related utilities logically and extract reusable layouts where appropriate.
- **Icons**: Utilize icons from `lucide-react` for visual consistency across all pages.
- **Animations**: Use `framer-motion` tastefully for page transitions, card hover effects, and reveals without degrading performance or accessibility.
- **Accessibility (a11y)**: Use semantic HTML5 elements (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`), descriptive `aria-label`s for icon buttons, and maintain good color contrast.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) (or as designated by the institution).

---

<p align="center">
  Crafted with ❤️ for <strong>The School of Excellence</strong>
</p>
