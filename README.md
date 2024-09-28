# Blog Application Frontend

## Description

This is the frontend for a blog application built with React and TypeScript. It includes role-based functionality where users with the `User` role can manage their own posts, while administrators with the `Admin` role have full control over all posts and user management.

### User Roles:
- **User**: Can add, edit, and delete their own blog posts. Сan edit user data, except for the role (only admin can change the role).
- **Admin**: Has full control over all posts and user management (can view, edit, and delete users and posts).

## Key Technologies

- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript for safer and more reliable code
- **Tailwind CSS**: CSS framework for styling
- **Axios**: HTTP client for API calls
- **Redux Toolkit**: State management
- **Vite**: Build tool for application development