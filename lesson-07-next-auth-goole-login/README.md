# Next.js Authentication Example

This is a simple example of how to implement authentication in a Next.js application using NextAuth.js.

## Features

- User authentication with NextAuth.js
- Login with credentials (username/password)
- Login with GitHub OAuth
- Protected routes
- Client and server-side authentication

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- PNPM package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file in the root directory with the following variables:

```
# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-at-least-32-chars

# GitHub OAuth
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

### Setting Up OAuth

To use GitHub authentication:

1. Go to GitHub Developer Settings: https://github.com/settings/developers
2. Create a new OAuth application
3. Set the Homepage URL to `http://localhost:3000`
4. Set the Authorization callback URL to `http://localhost:3000/api/auth/callback/github`
5. Copy the Client ID and Client Secret to your `.env.local` file

### Running the Application

```bash
pnpm dev
```

Visit `http://localhost:3000` to see the application.

## Default Credentials

For the credentials provider, you can use:
- Username: `admin`
- Password: `password`

## Pages

- `/` - Home page with authentication status
- `/login` - Login page
- `/dashboard` - Protected dashboard page (requires authentication)

## Authentication Flow

1. User visits the login page
2. User logs in with credentials or OAuth
3. If successful, the user is redirected to the home page
4. Protected routes check for authentication status
5. Unauthenticated users are redirected to the login page

## Tech Stack

- Next.js 15
- NextAuth.js
- React 19
- Tailwind CSS

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
