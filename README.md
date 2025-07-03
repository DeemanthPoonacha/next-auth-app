# Next.js Auth App

This is a Next.js authentication app using [NextAuth.js](https://next-auth.js.org/) for authentication, MongoDB for data storage, and [Nodemailer](https://Nodemailer.com/) for email provider support. It supports social login (GitHub, Google) and email/passwordless login.

## Features

- Social authentication (GitHub, Google)
- Email/passwordless authentication via Nodemailer
- MongoDB as the database (with MongoDB Adapter)
- JWT-based session management
- Edge Runtime compatible

## Getting Started

### 1. Install dependencies

```bash
pnpm install
# or
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Nodemailer
EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=your@email.com
```

### 3. Run the development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3023](http://localhost:3023) in your browser.

## Project Structure

- `app/` - Next.js app directory
- `auth.ts` - [NextAuth.js configuration with adapter](https://authjs.dev/guides/edge-compatibility#split-config)
- `auth.config.ts` - NextAuth.js providers for the edge environment
- `middleware.ts` - Protects routes using NextAuth
- `lib/db.ts` - MongoDB client setup
