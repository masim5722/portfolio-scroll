# Portfolio Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It showcases a portfolio with seamless scrolling animations, using Tailwind CSS for styling and custom hooks for data fetching.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
# or
yarn install
# or
pnpm install

```
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying src/app/portfolio/page.tsx. The page auto-updates as you edit the file.

## Project Structure

```
src/
  ├── api/
  │   └── portfolio/
  │       └── index.ts           # API route to fetch portfolio data
  ├── app/
  │   ├── components/
  │   │   ├── LoadingScreen/
  │   │   │   ├── index.tsx      # Loading screen component
  │   │   │   └── loadingScreen.module.css  # Loading screen styles
  │   │   ├── PortfolioItem/
  │   │   │   ├── index.tsx      # Portfolio item component
  │   │   ├── PortfolioSection/
  │   │   │   ├── index.tsx      # Portfolio section component
  │   │   │   └── portfolioSection.module.css  # Portfolio section styles
  │   ├── hooks/
  │   │   └── usePortfolioData.ts  # Custom hook for fetching portfolio data
  │   └── portfolio/
  │       ├── page.tsx           # Main portfolio page component
  │       └── portfolio.module.css  # Portfolio page styles
  └── styles/
      └── global.css             # Global styles
```

## Key Features
- Next.js: Utilizes the latest Next.js features, including API routes and app directory.
- Tailwind CSS: Uses Tailwind CSS for utility-first styling.
- Seamless Scrolling: Implements seamless scrolling animation for portfolio sections.
- Custom Hooks: Employs custom hooks for data fetching.
Modular Components: Breaks down the UI into reusable components.

