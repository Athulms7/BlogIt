# Backend API - TypeScript + Hono

This is a modern backend API built with TypeScript and Hono, featuring user authentication, blog management, and Prisma ORM integration.

## 🚀 Features

- **TypeScript**: Full type safety and modern JavaScript features
- **Hono**: Fast, lightweight web framework
- **Prisma**: Type-safe database ORM
- **JWT Authentication**: Secure user authentication
- **Zod Validation**: Runtime type validation
- **PostgreSQL**: Database (configurable)

## 📁 Project Structure

```
├── src/                    # Source code
│   ├── index.ts           # Main application setup
│   ├── server.ts          # Server entry point
│   ├── types.ts           # TypeScript type definitions
│   ├── zod.ts             # Zod validation schemas
│   ├── middlewares/
│   │   └── auth.ts        # JWT authentication middleware
│   └── routes/
│       ├── index.ts       # Main router
│       ├── config.ts      # Configuration constants
│       ├── user.ts        # User-related routes
│       └── blog.ts        # Blog-related routes
├── prisma/                # Database schema and migrations
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md             # Project documentation
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Set up your database and update the `DATABASE_URL` in your environment variables.

3. Run Prisma migrations:
```bash
npx prisma migrate dev
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The server will run on `https://blogit-4lvo.onrender.com`

## 🏗️ Building for Production

Build the TypeScript code:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📚 API Endpoints

### Authentication
- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/signin` - User login

### User Management
- `GET /api/v1/user/profile` - Get user profile (requires auth)
- `PUT /api/v1/user/profile` - Update user profile (requires auth)
- `GET /api/v1/user/blogs` - Get users with filtering

### Blog Management
- `GET /api/v1/blog/blog` - Get user's blogs (requires auth)
- `POST /api/v1/blog/createblog` - Create a new blog (requires auth)
- `GET /api/v1/blog/blogss` - Get all blogs with user info (requires auth)
- `DELETE /api/v1/blog/delete` - Delete a blog (requires auth)
- `POST /api/v1/blog/blogs` - Get specific blog with user info (requires auth)

## 🔐 Authentication

All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 🗄️ Database Schema

The application uses Prisma with the following main models:
- **User**: User accounts with authentication
- **Blogs**: Blog posts with user relationships

## 🛡️ Security Features

- JWT-based authentication
- Input validation with Zod
- CORS enabled
- Type-safe database operations

## 🔧 Configuration

Key configuration files:
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `prisma/schema.prisma` - Database schema

## 📝 Migration from Express

This project was migrated from Express.js to Hono with the following key changes:

1. **Framework**: Express → Hono
2. **Language**: JavaScript → TypeScript
3. **Middleware**: Express middleware → Hono middleware
4. **Routing**: Express Router → Hono Router
5. **Context**: Express req/res → Hono Context
6. **Type Safety**: Added comprehensive TypeScript types

## 🚀 Performance Benefits

- **Hono**: Faster than Express with better performance
- **TypeScript**: Compile-time error checking
- **Modern ES Modules**: Better tree-shaking and optimization
- **Type-safe Database**: Prisma prevents runtime database errors

## 🧹 Clean Project Structure

The project follows a clean, minimal structure:
- All source code in `src/` directory
- Clear separation of concerns (routes, middlewares, types)
- Build artifacts excluded via `.gitignore`
- No unnecessary files or directories 