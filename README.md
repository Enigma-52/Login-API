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

I have changed the inactivity timer to 4 seconds for making this video.


![E037F910-3AE4-4624-BB08-3C5965FBE7EF_4_5005_c](https://github.com/Enigma-52/Login-API/assets/95529619/7ad0c94a-a1f3-4579-86dd-d9f96e85a5bd)



## Usage

- Users can login through `/api/login`.
- Users can logout through `/api/logout`.
- Inactivity timer of 2 minutes after Login

## Directory Structure

- `public`: Contains static files (HTML, CSS and Javascript) for the frontend.
- `server.js`: Node.js application file containing server setup and endpoints.

