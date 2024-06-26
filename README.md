# BMI Calculator 
'BMI Calculator' web application on Node.js, that allows users to calculate their Body Mass Index (BMI) based on their height and weight.
The application provides an easy-to-use interface with additional fields for age and gender to change the UI little bit.

## Installation
To run this application locally, you'll need to have Node.js installed on your system.

### Clone the repository
1) Open the cmd:
2) Clone the repository `git clone https://github.com/AnsiLucky/BMI-Calculator`
3) Enter the folder `cd BMI-Calculator`
4) Install dependencies `npm install`
5) Run the server `node root.js`

#### Usage
Once the application is running, navigate to http://localhost:3000 in your web browser to use the BMI calculator.

#### Dependencies
This project utilizes the following libraries/frameworks:

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- body-parser: Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under req.body.
- body-parser GitHub Repository
- fs (File System): Node.js module providing file system-related functionality to read/write files and manipulate file paths.
- path: Node.js module for handling file paths. It provides utilities for working with file and directory paths.

### Server Details
The server for this application by default runs on port 3000. If you need run the application on another port, you must add .env file and add PORT=your_port.

