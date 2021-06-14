# BookWorm

### Table of Contents
- [BookWorm](#bookworm)
  - [Overview](#overview)
  - [Learning Goals](#learning-goals)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [Project Reflection](#project-reflection-and-individual-learning-goals)
  - [Future Iterations](#future-iterations)
  - [Credits](#credits)
      - [Authors](#authors)
      - [Project Managers](#project-managers)

## Overview
For this project, we chose a brand new technology to self-teach and incorporate into our code.  Our team utilized TypeScript to design BookWorm, an application designed for book lovers to view the New York Times Best Sellers and pick their next book to read! Book lovers are able to search by genre and add and remove books from a list of their favorites!  

![Screen Shot 2021-06-06 at 6 32 36 PM](https://user-images.githubusercontent.com/27929330/120942237-942a0100-c6f5-11eb-9cff-eeab6dd6241b.png)

- Deployed [LINK](https://bookworm-2102.herokuapp.com/)
- Project Spec [LINK](https://frontend.turing.edu/projects/module-3/stretch.html)

## Learning Goals
- Self-teach a brand new technology utilizing resources and problem-solving skills
- Familiarize ourselves with TypeScript and implement into project code
- Enhance our understanding of React, React Router, and Cypress

## Features
When the application is launched, a user will see a list of book categories they can choose from, and a navigation bar with a home and favorite button. The user can click on home to come back to this page at any time, and if the user clicks on favorites they will see a message indicating they haven't favorited any books yet. On the home page, the user can select a category and will be brought to the bookshelf page where they can favorite or unfavorite books. Once books have been favorited, the user can navigate to the favorites page to see a list of all their favorite books where they can remove some if they choose.  
![Demo of Features](https://media.giphy.com/media/M4IbuJbc3PJqq4lRUm/giphy.gif)

## Technologies Used
* ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

* ![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

* ![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)

* ![Cypress](https://img.shields.io/badge/cypress-04C38E.svg?&style=for-the-badge&logo=cypress&logoColor=white)

* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Setup Instructions
#### For viewing the application:
1. Open your terminal and access the directory you want to place this project in
2. Run `git clone https://github.com/jon-schlandt/book-worm.git` to clone the repo
3. `cd` into the root directory of the project
4. Run `npm i` to install dependencies
5. Run `npm start` to start the web server
6. If a browser window does not automatically open, open your web browser and navigate to `http://localhost:3000` to access the application

#### For testing the application:
After completing the steps above to clone the repo:  
1. Run `npx cypress open` to open the Cypress testing GUI
2. Click on an integration test and allow the test to run

<img src="https://user-images.githubusercontent.com/75702270/121049277-c9c1ff00-c774-11eb-9f2b-58e21dee5bab.png" alt="Cypress integration test selection"
 width="500px" height="auto" />

## Project Reflection and Individual Learning Goals
##### Sarah  
- This project helped reassure me that I am capable of learning a new technology in a short amount of time with efficiency.  In a work environment, I will be able to use my problem-solving skills to conquer challenges.  TypeScript proved to be a very useful technology, and I'm so glad we chose to explore it now and overcome the learning curve that comes with it!  My goals, in addition to learning TypeScript, were to improve my CSS skills and create dynamic and DRY code.  I feel I achieved those goals!

##### Andrew
- I was excited to learn TypeScript and see why it's held in such high regards. This project touched on most of the talking points I heard about TypeScript. It's got a learning curve, takes some time to setup, makes you write more code that isn't necessary, but after that you start to notice the long term benefits. There was multiple occasions where TypeScript pointed out a bug that could have gone unnoticed until we ran the application or even worse, deployed. I'm glad I got to learn this new skill that I can continue to practice on my future projects. Ultimately my goal was to come out of this project feeling like I have a strong understanding of TypeScript fundamentals and I achieved that goal. 

##### Jon
- Learning TypeScript and successfully building a React application using it was by far my biggest goal. Secondarily, I'd hoped to gain a better understanding of how I learn when looking into a new technology without the structure of guided lectures. Although TypeScript is essentially JavaScript with an extra bit of syntax, implementing it correctly can be a tedious task. Getting through the challenges of TypeScript and building an application that uses it efficiently and accurately (with no shortcuts) is a huge accomplishment.

## Future Iterations
After reaching the minimum viable product we established for this project, we attempted to extend the capabilities of BookWorm by adding a feature for displaying additional details for a given book. A 'Details' button was added to each book and once clicked a separate page with more information about the associated book would render. Although we made a lot of progress on this feature, we feel what we currently have is not complete enough for production - the work we did can be found on this [branch](https://github.com/jon-schlandt/book-worm/tree/feature/details).  
![Details Page Demo](https://media.giphy.com/media/1UNyblatGZ0AgElWjH/giphy.gif)  
We hope to continue work on this feature and possibly add more features, like a search bar for category filtering, to provide a more enjoyable and efficient user experience.

## Credits
#### Authors
<table>
  <tr>
    <td> Andrew Carlin <a href="https://github.com/AndieDrew">GH</td>
    <td> Jon Schlandt <a href="https://github.com/jon-schlandt">GH</td>
    <td> Sarah Lane <a href="https://github.com/sarahlane8">GH</td>
  </tr>
  <td>
     <img src="https://avatars.githubusercontent.com/u/27929330?v=4" alt="Andrew's' GH img"
  width="150" height="auto" />
  </td>  
  <td>
    <img src="https://avatars.githubusercontent.com/u/75702270?v=4" alt="Jon's' GH img"
  width="150" height="auto" />
  </td>
  <td>
  <img width="150" height="auto" src="https://user-images.githubusercontent.com/70901622/120944450-cafe1800-c6f1-11eb-96f2-5e18fdb2a96e.png" alt="Sarah's GH img">
  </td>
</table>

#### Project Managers
<table>
  <tr>
    <td> Leta Keane <a href="https://github.com/letakeane">GH</td>
    <td> Scott Ertmer <a href="https://github.com/sertmer">GH</td>
  </tr>
  <td>
    <img src="https://avatars.githubusercontent.com/u/22563791?v=4" alt="Leta's GH img"
 width="150" height="auto" />
 </td>
  <td>
    <img src="https://avatars.githubusercontent.com/u/49926352?v=4" alt="Scott's GH img"
 width="150" height="auto" />
 </td>
</table>

**************************************************************************
This project was created for [Turing School of Software and Design](https://turing.io/)
##### 2021/06/07
**[Back to top](#table-of-contents)**