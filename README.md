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

## Images

![25AC6BCD-F070-4A50-988D-C61D52C07E60](https://github.com/Enigma-52/Login-API/assets/95529619/40bd9c5d-37f0-4e98-86e0-4aec0357f71b)




![4BB67FC2-8E5E-4AE7-892B-E232898DFBBC](https://github.com/Enigma-52/Login-API/assets/95529619/edbfa7e1-47eb-4fb7-9566-a034ac349e61)


## Usage

- Users can login through `/api/login`.
- Users can logout through `/api/logout`.
- Inactivity timer of 2 minutes after Login

## Directory Structure

- `public`: Contains static files (HTML, CSS and Javascript) for the frontend.
- `server.js`: Node.js application file containing server setup and endpoints.

