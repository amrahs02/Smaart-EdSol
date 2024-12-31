# React App with Clerk Authentication

This project demonstrates how to use Clerk for user authentication in a React app and protect specific routes.

## Features

- **Clerk Authentication**: Protects routes using Clerk's authentication system.
- **Protected Route**: If the user is not logged in, they are redirected to the home page with a message.

## Folder Structure
/src
  /components
    - Home.js            # Home component (public)
    - Protected.js       # Protected page (requires login)
  App.js                 # Main app routing
  index.js               # Clerk configuration


## How It Works
The home page (/) is publicly accessible.
The protected page (/protected) requires the user to be signed in. If the user is not logged in, they will be redirected to the home page with a message: "To use this page, you have to log in."