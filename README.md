# React App with Clerk Authentication

This project shows how to use Clerk for user authentication in a React app and protect specific routes.

## Features

- **Clerk Authentication**: Protects routes using Clerk's authentication system.
- **Protected Route**: If the user is not logged in, they are redirected to the home page with a message.


## How It Works
The home page (/) is publicly accessible.
The protected page (/protected) requires the user to be signed in. If the user is not logged in, they will be redirected to the home page with a message: "To use this page, you have to log in."