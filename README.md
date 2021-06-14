# TikTaco

### Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Future Iterations](#future-iterations)
- [Credits](#credits)
    - [Authors](#authors)
    - [Project Managers](#project-managers)

## Overview
Looking to create content for your foodie followers but can't seem to get those creative juices flowing? Has inspiration fled your once illustrious life of posting videos on the internet to random strangers, leaving you staring into the endless abyss of your refridgerator and clinging onto the hope that a half-empty carton of eggs will trigger an idea?

Well close that fridge door, open up your phone, and let TikTaco inspire that next viral hit! With the tap of a button, TikTaco will instantly generate a taco with randomized ingredients, each with their very own recipe. If you find a winner, simply add it to your 'To Share' list so you can reference it later. With TikTaco, let us worry about the thinking, so you can focus on the sharing!

- Deployed [LINK](https://tik-taco.herokuapp.com/)
- Project Spec [LINK](https://frontend.turing.edu/projects/module-3/niche-audience.html)

## Features
- Instant generation of a unique and sharable taco
- Access to each and every topping generated for a taco
- Favorite a taco you like and share it later

![Demo of Features](https://media.giphy.com/media/M4IbuJbc3PJqq4lRUm/giphy.gif)

## Technologies Used
* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

* ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

* ![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

* ![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)

* ![Cypress](https://img.shields.io/badge/cypress-04C38E.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Setup Instructions
#### For viewing the application:
1. Open your terminal and access the directory you want to place this project in
2. Run `git clone https://github.com/jon-schlandt/TikTaco.git` to clone the repo
3. `cd` into the root directory of the project
4. Run `npm i` to install dependencies
5. Run `npm start` to start the web server
6. If a browser window does not automatically open, open your web browser and navigate to `http://localhost:3000` to access the application

#### For testing the application (after completing the steps above):
1. Run `npx cypress open` to open the Cypress testing GUI
2. Click on an integration test and allow the test to run

## Future Improvements
- Currently, random images are being generated for each taco via Unplash's API. Although the images mostly match, some do not and this can be a bit confusing. In the future, I'd like to build my own backend for holding my own collection of taco-related imagery.

## Credits
#### Author
<table>
  <tr>
    <td> Jon Schlandt <a href="https://github.com/jon-schlandt">GH</td>
  </tr>
  <td>
    <img src="https://avatars.githubusercontent.com/u/75702270?v=4" alt="Jon's' GH img"
  width="150" height="auto" />
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
##### 2021/06/14
**[Back to top](#table-of-contents)**