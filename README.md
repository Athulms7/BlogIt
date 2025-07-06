# BlogIt
A full-stack blogging platform built with React, TypeScript, Node.js, Express, PostgreSQL, Zod &amp; Prisma. Create, read, and explore blogs with a beautiful UI and powerful features.

## 🚀 Features

- 📝 Create, edit, and delete blogs
- 🧑 User authentication (JWT-based)
- 🌐 Explore community blogs with authors
- 📊 Like, view, and comment on posts
- 📸 Image upload for blog cover
- 🔎 Search & tag-based filtering
- 💡 Responsive and clean UI with Tailwind CSS
- 🔐 Protected routes for blog access

## 🛠️ Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React Router
- TanStack React Query
- Axios
- Sonner (toast notifications)
- Skeleton loader for smoother UX

### Backend
- Node.js + Express
- PostgreSQL with Prisma ORM
- JWT for authentication
- RESTful APIs
- CORS + Helmet + Secure headers

## 🧪 Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/blogit.git
cd blogit

# 2. Install dependencies
cd frontend && npm install
cd ../backend && npm install

# 3. Configure environment variables
# - .env files for Mongo URI, JWT_SECRET etc.

# 4. Run the servers
cd backend && npm run dev
cd ../frontend && npm run dev
