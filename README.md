# React + Vite

# Todo App - React Frontend

This is the frontend part of the Todo App, built with React and Vite. It interacts with the ASP.NET Core backend API to perform CRUD operations on tasks.

## Prerequisites

- Node.js (https://nodejs.org/)
- npm (comes with Node.js) or yarn

## Setup

1. Clone the repository:

```
git clone <repository-url>
cd ./frontendReact
```

## Install dependencies:

```
npm install
```

## Start the development server:

```
npm run dev
```

## Build and Preview
To build the project for production:

```
npm run build
```

To preview the production build:

```
npm run preview
```

## API Endpoints  
This React app interacts with the following API endpoints:

GET /api/tasks: Fetch all tasks.  
GET /api/tasks/:id: Fetch a task by ID.  
POST /api/tasks: Create a new task.  
PUT /api/tasks/:id: Update an existing task.  
DELETE /api/tasks/:id: Delete a task.  

## Features  
Add new tasks.  
View tasks in a table format.  
Mark tasks as done.  
Delete tasks.  
Highlight overdue tasks.  



