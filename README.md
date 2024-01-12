# Tiger Global Backend Assignment 

This backend is a Social Media Analytics Platform is a backend application designed to handle social media posts, provide analytics, and support scalable operations. This project is implemented using the javascript (NodeJS and ExpressJS), with additional technologies such as Redis for database and caching. The application is also deployed on Render on the below link.
#### Deployment link : [https://social-media-post-cxvw.onrender.com/](https://social-media-post-cxvw.onrender.com).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Project Setup](#project-setup)
- [Testing the Application](#testing-the-application)
- [Additional Notes](#additional-notes)

## Technologies Used

- **Express.js:** A web application framework for building APIs and handling server-side logic.
- **Node.js:** A runtime environment for executing JavaScript code on the server.
- **Redis:** An in-memory data structure store used for caching.

## Features

- **Post Creation:** API endpoint to create social media posts, including Base64 encoding for image data.
- **Analytics Retrieval:** API endpoint to retrieve analytics for a specific post.
- **Caching:** Redis used for caching to improve response times.

## Setup

### Prerequisites

- Node.js and npm: [Download and Install Node.js](https://nodejs.org/).

### Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abhigpta19/Tiger_Backend.git
   cd Tiger_Backend
2. **Install the dependencies:**
 
   ```bash
   npm install
3. **Start the server:**
  
   ```bash
   nodemon index.js
## Testing the Application

To test the routes you can use Postman or Thunder Client on VS Code.
## API Endpoints

### 1. Post Creation

- **Endpoint:** `POST /api/v1/posts/`
- **Description:** Create a new social media post.
- **Payload:** JSON payload with text content and a unique identifier.
- **Post on Deployed Server:** You can directly post in the deployed route        https://social-media-post-cxvw.onrender.com/api/v1/posts/
- **Example:**
  ```json
  {
    "text_content": "This is a sample text!",
    "uniqueIdentifier": "123456"
  }
- **Response:** For successful post creation you will get a response 200 with a message and if it fails for some reason then you will get status 500 with message Internal Server Error.

### 2. Post Analysis

- **Endpoint:** `GET /api/v1/posts/{id}/analysis/`
- **Description:** Read the post with the specific ID given and will give analysis report such as Word Count and Average length of each word.
- **Response:** A json file with the content of the post along with the word count and average length of each word.
  ```json
  {
    "Content" : "This is a sample text!", 
    "word_Count": 5, 
    "Average_Word_Length": "3.4"
  }
- **Browser:**  You can directly get the data if you type the url in browser by replacing {id} with the unique id of the post.  https://social-media-post-cxvw.onrender.com/api/v1/posts/{id}/analysis/
## Additional Notes

### Rate Limiting: 
The application includes rate limiting based on IP using Express.js middleware. We made a separate middleware in the Middleware section for this purpose.
### Caching Mechanism
Redis Database supports caching mechanism for the fast retrieval of data because it uses primary memory of the system. So we use it in this assignment.
### Deployment
The Nodejs application is deployed on Render and the deployment link is https://social-media-post-cxvw.onrender.com 
Instances of redis has been made on Render and it is connected to the application with the Connection URL.