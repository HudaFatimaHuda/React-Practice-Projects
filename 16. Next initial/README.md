# Next.js Project - Basic Concepts & File Structure

This is a beginner-friendly Next.js application that demonstrates core concepts and the App Router architecture introduced in Next.js 13+.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── app/                    # App Router directory (Next.js 13+)
│   ├── globals.css        # Global CSS styles
│   ├── icon.png          # Favicon/app icon
│   ├── layout.js         # Root layout component
│   ├── page.js           # Home page component
│   ├── about/            # About route
│   │   ├── Layout.js     # About section layout
│   │   └── page.js       # About page component
│   └── blog/             # Blog route
│       ├── page.js       # Blog listing page
│       └── [id]/         # Dynamic route for blog posts
│           └── page.js   # Individual blog post page
├── public/               # Static assets
│   └── logo.png         # Static image
├── jsconfig.json        # JavaScript configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## Core Next.js Concepts Used

### 1. App Router (App Directory)
**What it is:** The modern routing system in Next.js 13+ that uses the `app/` directory for defining routes.

**Benefits:**
- File-system based routing
- Nested layouts
- Server Components by default
- Built-in loading and error states

**Alternative Approach:** Pages Router (`pages/` directory) - legacy but still supported.

### 2. Server Components
**What it is:** React components that render on the server by default. Used in: All page components (`page.js` files)

**Benefits:**
- Better performance
- Reduced JavaScript bundle size
- Direct access to backend resources


### 3. File-based Routing
**What it is:** Routes are automatically created based on file structure in the `app/` directory.

**Examples:**
- `app/page.js` → `/` (home page)
- `app/about/page.js` → `/about`
- `app/blog/page.js` → `/blog`
- `app/blog/[id]/page.js` → `/blog/:id` (dynamic route)

### 4. Dynamic Routes
**What it is:** Routes with parameters using square brackets `[param]`.

**Used in:** `app/blog/[id]/page.js` for individual blog posts.

**Benefits:**
- Clean URLs
- Automatic parameter passing via props
- SEO-friendly

### 5. Layouts
**What it is:** Shared UI components that wrap multiple pages.

**Used in:** `app/layout.js` (root layout) and `app/about/Layout.js` (nested layout).

**Alternative Approach:** Higher-order components or context providers.

## File & Folder Breakdown

### Root Configuration Files

#### `package.json`
**Purpose:** Defines project metadata, dependencies, and scripts.

#### `next.config.js`
**Purpose:** Next.js configuration file for customizing build and runtime behavior.

#### `jsconfig.json`
**Purpose:** JavaScript project configuration for better IDE support and path mapping.

### App Directory Structure

#### `app/layout.js` (Root Layout)
**Purpose:** 
- Mandatory file that wraps all application components
- Defines HTML structure and global metadata
- Imports global CSS

**Key Features:**
```javascript
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};
```

#### `app/page.js` (Home Page)
**Purpose:** 
- Root route component (`/`)
- Server Component with automatic optimizations
- Demonstrates Next.js Link component for navigation

#### `app/about/page.js` (About Page)
**Purpose:** Static about page demonstrating nested routing.

### Static Assets

#### `public/` Directory
**Purpose:** Static file serving with automatic optimization.
- `logo.png` - Application logo
- Files are served from root URL path

#### `app/globals.css`
**Purpose:** Global styles applied across the entire application.

## Development Concepts

### Server vs Client Components
- **Server Components** (default): Render on server, better performance
- **Client Components**: Interactive, run in browser, use `'use client'` directive

### Rendering Strategies
1. **Static Site Generation (SSG)**: Pre-rendered at build time
2. **Server-Side Rendering (SSR)**: Rendered on each request
3. **Client-Side Rendering (CSR)**: Rendered in browser


### Code
```bash
import Link from "next/link";
<Link href="about">About Us</Link>
```

in app folder page.js and layout.js is mandatory. icon.js is favicon
```bash
// this is a mandatory file 
// will be wrapping all the app components 
import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

make component folder outside the app (better)
folder will not be a route until it has page.js file. 

each page get this special params props. 
```bash
import React from 'react'

function BlogItem({params}) {

  return (
    <main>
      <h1>BLog Post</h1>
      <p>This is blog post number {params.id}</p>
    </main>
  )
}

export default BlogItem
```

### Notes
React server components 
Server components 
Client components 

Its react stuff 

In vanilla react --> we have only client components

In next.js --> RSC --> all next components are only rendered on server 
Backend executes the server components hence derives the to-be-rendered html codes -- client side get it and display this 

Advantage --> less client side --> good for SEOs

Client components --> event handler, usestate and useEffects 
Executed on server but also executed on client side as well. 
