# React Router Demo Project

A comprehensive demonstration of React Router features and capabilities.

## Overview

This project showcases various features and use cases of React Router, the standard routing library for React applications. It demonstrates how to implement different routing patterns and techniques in a React application.

## Features Demonstrated

- **Basic Routing**: Simple navigation between pages
- **Route Parameters**: Dynamic routes with parameters
- **Nested Routes**: Parent/child route relationships
- **Protected Routes**: Authentication-based access control
- **Query Parameters**: URL search parameters
- **Lazy Loading**: Code-splitting with dynamic imports
- **Redirects**: Automatic redirects to other routes
- **404 Handling**: Catching unmatched routes

## React Router Concepts

React Router is a standard library for routing in React applications. It enables navigation among views in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.

### Key Components

- **BrowserRouter**: Provides the routing context for the application
- **Routes**: Container for route definitions
- **Route**: Defines a route with a path and element to render
- **Link/NavLink**: Components for navigation without page reloads
- **Outlet**: Renders child routes in nested route configurations
- **useParams**: Hook to access route parameters
- **useSearchParams**: Hook to access and manipulate query parameters
- **useNavigate**: Hook for programmatic navigation
- **Navigate**: Component for declarative redirects

## Application Flow

```mermaid
graph TD
    A[BrowserRouter] --> B[App Component]
    B --> C[Routes]
    C --> D[Route: Home]
    C --> E[Route: About]
    C --> F[Route: Contact]
    C --> G[Route: Products]
    G --> H[Route: Product List]
    G --> I[Route: Product Detail]
    C --> J[Route: Dashboard]
    J --> K[Route: Overview]
    J --> L[Route: Stats]
    J --> M[Route: Settings]
    C --> N[Route: Protected]
    N --> O{Is Authenticated?}
    O -->|Yes| P[Protected Content]
    O -->|No| Q[Login Page]
    C --> R[Route: *]
    R --> S[404 Not Found]
```

## Route Structure

```mermaid
graph LR
    A["/"] --> B[Home]
    A --> C["/about"]
    C --> D[About]
    A --> E["/contact"]
    E --> F[Contact]
    A --> G["/products"]
    G --> H[Product List]
    G --> I["/products/:productId"]
    I --> J[Product Detail]
    A --> K["/dashboard"]
    K --> L[Dashboard]
    L --> M["index"]
    M --> N[Overview]
    L --> O["stats"]
    O --> P[Stats]
    L --> Q["settings"]
    Q --> R[Settings]
    A --> S["/profile"]
    S --> T{Auth Check}
    T --> U[Profile]
    A --> V["*"]
    V --> W[Not Found]
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Start the development server:
   ```
   pnpm dev
   ```

## Built With

- React
- React Router
- Vite
