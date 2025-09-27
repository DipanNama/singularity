# Singularity: A Production-Ready Next.js Boilerplate 🚀

Singularity is an opinionated, feature-rich starter template for building modern, scalable web applications. It combines the power of Next.js with a clean MVC-inspired architecture, Firebase for backend services, Razorpay for payments, and a complete suite of development and deployment tools right out of the box.

This boilerplate is designed to help you skip the tedious setup and dive straight into building your product.

[![CI/CD Status](https://github.com/your-username/singularity/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/singularity/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

-   **Framework:** **Next.js 14+** (with App Router)
-   **Architecture:** **MVC-inspired** structure for clear separation of concerns.
-   **Styling:** **Tailwind CSS** with **Shadcn/UI** and **Aceternity UI / Magic UI** for beautiful, accessible components.
-   **Backend & Auth:** **Firebase** (Auth, Firestore, Storage) with Admin SDK setup.
-   **Payments:** **Razorpay** SDK pre-configured for seamless payment integration.
-   **State Management:** **Zustand** for simple, scalable global state.
-   **Validation:** **Zod** for end-to-end type-safe data validation.
-   **Type-Safety:** Full **TypeScript** support.
-   **API Client:** **Axios** for robust data fetching.
-   **DevOps:**
    -   **Docker** & **Docker Compose** for consistent dev and prod environments.
    -   **GitHub Actions** for automated CI/CD pipeline to **Google Cloud Run**.
    -   **Makefile** for streamlined development commands.
    -   **Devcontainer** for a one-click development environment in VS Code.
-   **Package Manager:** Pre-configured for **PNPM** (can be swapped for Bun).
-   **SEO:** `sitemap.xml`, `robots.txt`, and `manifest.json` generation.

---

## 📂 Folder Structure

The project follows an MVC-like pattern to keep the codebase organized and scalable.

```
.
├── .devcontainer/      # VS Code Devcontainer configuration
├── .github/            # GitHub Actions and other configurations
├── .vscode/            # VS Code workspace settings
├── app/
│   ├── (auth)/         # Routes for authentication (login, signup)
│   ├── (dashboard)/    # Protected dashboard routes
│   ├── (policies)/     # Routes for legal pages (privacy, etc.)
│   ├── (public)/       # Publicly accessible marketing pages
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   ├── loading.tsx     # Root loading UI
│   └── not-found.tsx   # Root 404 page
├── components/
│   ├── custom/         # Your custom, complex components
│   ├── pages/          # Components specific to a single page/route
│   └── ui/             # Reusable UI components (buttons, inputs) from Shadcn
├── core/               # Core application logic, singletons
├── docs/               # Project documentation
├── hooks/              # Custom React hooks
├── lib/
│   ├── auth/           # Authentication logic and helpers
│   ├── client/         # Client-side instances (axios, firebase)
│   ├── data/           # Data transformation and fetching logic
│   ├── model/          # Zod schemas for data models/types
│   ├── services/       # Business logic interacting with external APIs
│   ├── stores/         # Zustand store definitions
│   ├── utils/          # General utility functions
│   └── validations/    # Zod schemas for form validations
├── public/             # Static assets (images, fonts, favicons)
├── scripts/            # Automation scripts (e.g., db seed)
├── static-data/        # Static JSON or content files
├── styles/             # Global CSS styles
├── .env.example        # Environment variable template
├── docker-compose.yml  # Docker Compose for development
├── Dockerfile          # Dockerfile for production build
├── Makefile            # Makefile for common commands
├── next.config.mjs     # Next.js configuration
├── pnpm-lock.yaml      # Dependency lock file
└── README.md           # You are here!
```

---

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   PNPM
-   Docker & Docker Compose
-   A Firebase project
-   A Razorpay account

### 1. Use this Template

Click the **"Use this template"** button on GitHub to create a new repository with this structure.

### 2. Clone the Repository

```bash
git clone [https://github.com/your-username/your-new-repo.git](https://github.com/your-username/your-new-repo.git)
cd your-new-repo
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Set Up Environment Variables

Copy the example environment file and fill in your project-specific keys.

```bash
cp .env.example .env.local
```

You will need to add your credentials for Firebase and Razorpay in `.env.local`.

```env
# .env.local

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Firebase (Client)
NEXT_PUBLIC_FIREBASE_API_KEY="AI..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."
NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."
# ... and other client keys

# Firebase (Admin) - for server-side actions
FIREBASE_PROJECT_ID="..."
FIREBASE_CLIENT_EMAIL="..."
FIREBASE_PRIVATE_KEY="..."

# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID="..."
RAZORPAY_KEY_SECRET="..."
```

### 5. Run the Development Server

You can use either Docker or run it directly on your local machine.

**Using Makefile (Recommended):**

```bash
make dev
```

**Using PNPM:**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🛠️ Available Commands (via Makefile)

The `Makefile` provides convenient shortcuts for common tasks.

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `make dev`      | Starts the Next.js development server.             |
| `make build`    | Builds the application for production.             |
| `make start`    | Starts the production server.                      |
| `make docker`   | Builds the production Docker image.                |
| `make up`       | Starts the application using Docker Compose.       |
| `make down`     | Stops the Docker Compose services.                 |
| `make lint`     | Lints the codebase.                                |
| `make format`   | Formats the codebase with Prettier.                |

---

## ☁️ Deployment

This template is pre-configured for continuous deployment to **Google Cloud Run** using GitHub Actions.

1.  **Set up GCP:** Make sure you have a GCP project and have enabled the Cloud Run API.
2.  **Add GitHub Secrets:** Add the following secrets to your GitHub repository settings:
    -   `GCP_PROJECT_ID`: Your Google Cloud project ID.
    -   `GCP_SA_KEY`: The JSON key for a service account with Cloud Run Admin and Storage Admin roles.
3.  **Push to `main`:** On every push to the `main` branch, the GitHub Action will automatically build the Docker image, push it to Google Artifact Registry, and deploy it to Cloud Run.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue to discuss any changes or features you'd like to add.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.