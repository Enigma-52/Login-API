# Login API
This is a simple Login API built using Node.js and Express.js. It lets a user login and keeps a check for inactivity.

## Requirements

- Node.js
- Git

## Setup Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/Enigma-52/Login-API.git
   ```

2. **Navigate to the project directory:**

   ```
   cd Login-API
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

4. **Start the server:**

   ```
   node server.js
   ```

5. **Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the application.**

6. Username - admin ; Password - password

## Video Walkthrough 

I have changed the inactivity timer to 4 seconds for making this video - https://www.youtube.com/watch?v=Lk7Ltwtc3Bw

## Usage

- Users can login through the `/api/login`.
- Users can logout through the `/api/logout`.
- Inactivity timer of 2 minutes after Login

## Directory Structure

- `public`: Contains static files (HTML, CSS and Javascript) for the frontend.
- `server.js`: Node.js application file containing server setup and endpoints.

