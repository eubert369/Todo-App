## Overview
This project is just a hands-on exercise aimed at building a Todo App to enhance my skills and understanding of the MERN stack (MongoDB, Express.js, React, and Node.js).

## Features

 - Add, edit, and delete tasks
 - List item
- Mark tasks as complete or incomplete

## Technologies Used

 - **MongoDB** for database
 - **Express.js** as backend framework
 - **React** for the frontend
 - **Node.js** for server-side logic

## Installation
1. **Clone the Repository:**
	```bash
	git clone https://github.com/eubert369/Todo-App
2. **Install Dependencies:**
	- Frontend installation
		```bash
		cd ./Frontend
		npm install
	- Backend installation
		```bash
		cd ./Backend
		npm install
3. **Set up MongoDB:**
	- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up or log in.
	- Create a new cluster.
	- Once the cluster is created, go to the "Database Access" section and add a new user with a password.
	- Under "Network Access," allow your IP address to connect to the database.
	- Navigate to your cluster and click on "Connect." Choose "Connect your application" and copy the connection string.
	- Replace `<username>`, `<password>`, and `<your-cluster-url>` with your MongoDB credentials and cluster URL.
	
4. **Rename the `.env.local` file to `.env` in the root directory of the backend directory and add your MongoDB connection string:**
	```bash
	MONGODB_CONNECTION_STRING=mongodb+srv://<username>:<password>@<your-cluster-url>/todo-app?retryWrites=true&w=majority
5. **Run the app:**
	The frontend and backend are run separately because I am not in the mood to configure a combined setup for running both with a single command.
	- **Frontend**
		```bash
		cd ./Frontend
		npm start
	- **Backend**
		```bash
		cd ./Backend
		npm start
6. **Access the app**
	Open your browser and go to `http://localhost:3000`
