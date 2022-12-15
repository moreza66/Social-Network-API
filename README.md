# Social-Network-API

API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

---

## Table of Content

- [Description](#description)
- [Technlogies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

- [Questions](#questions)

<a name="description"></a>

## 📝 Description

This is a back end application for a Social Network created using a configured working Express API & mongoose ODM to interact with a mongoDB database. MongoDB is a popular choice for many social networks due to its speed with larger amounts of data and flexibility with unstructured data. Due to their prevalence, the aim of this application is to demonstrate my understanding of how to build and structure the API of these networks.

<a name="technologies"></a>

## 🕹 Technologies used

- JavaScript
- node.js
- Express.js
- MongoDB
- Mongoose
- Mongoose validator
- Moment.js

## ⚙️ Installation

1. Git clone this repository onto your local machine and navigate to the file on your terminal. _This can also be done by opening the file on Visual Studios and running it through the intergated terminal._

2. In order for the app to function correctly, ensure you have the latest or most stable version of Node.js.

3. Run `npm install` to download.
   <a name="usage"></a>

## 🖥 Usage

This application allows you to navigate different link routes that display data from the database.

- GET/ POST routes: <br>
  `http://localhost:3001/api/users` <br>
  `http://localhost:3001/api/thoughts`<br>

  - If you wish to <u>GET</u> a certain id you can do so by adding an `/id` at the end of the link.

- PUT/DELETE routes: <br>
  `http://localhost:3001/api/users/:id`<br>
  `http://localhost:3001/api/thoughts/:id` <br>

- POST/ DELETE routes: <br>
  `http://localhost:3001/api/users/:id/friends/:friendId` <br>
  `http://localhost:3001/api/thoughts/:id/reactions` <br>

  - The route above is used to <u>POST</u> a new reaction. If you wish to <u>DELETE</u> a certain reaction you can do so by adding an `/id` at the end of the link.

4. To start the application, run: `npm run start`

[](./Assets/Images/Screen%20Shot%20%231.png)
[](./Assets/Images/Screen%20Shot%20%232.png)
