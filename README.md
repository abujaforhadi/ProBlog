# ProBlog

A simple blog viewer application built with Next.js that demonstrates routing, server and client components, dynamic routes, authentication, and data fetching. This project fulfills the requirements of the assignment to showcase proficiency in building a Next.js application.

## Live Demo

[Visit ProBlog](https://blog-boom.vercel.app/)

## Repository

[GitHub Repository](https://github.com/abujaforhadi/ProBlog)

## Features

- **Home Page**: Displays a list of blog posts fetched from a mock API. Each post links to a detailed page.
- **Blog Details Page**: Uses a dynamic route (`/blog/[id]`) to display detailed information for a specific blog post.
- **Protected Profile Page**: A static "Profile" page protected with Kinde Auth, displaying a welcome message for authenticated users.
- **Authentication**: Implements login/logout functionality using Kinde Auth. Unauthenticated users attempting to access the profile page are redirected to the login page.
- **Navigation**: A header with links to "Home" and "Profile," and dynamic buttons for "Login" and "Logout" based on authentication state.

## Technologies Used

- **Next.js**: Framework for React to enable server-side rendering and routing.
- **Tailwind CSS**: For clean and responsive styling.
- **Kinde Auth**: Authentication solution for the protected profile page.
- **Mock API**: JSONPlaceholder for fetching blog data.

## Mock API Details

- Fetch all blog posts: `GET https://jsonplaceholder.typicode.com/posts`
- Fetch a specific blog post: `GET https://jsonplaceholder.typicode.com/posts/[id]`

## Getting Started

### Prerequisites

- Node.js installed on your system.
- A Kinde Auth account for authentication setup.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abujaforhadi/ProBlog.git
   cd ProBlog
