# The Lazy Lacquerist
### Table of Contents
- [Overview](#overview-and-project-goals)
- [Features](#features)
- [How does this work?](#how-does-this-work)
- [Project Reflection](#project-reflection)
- [Instructions for Running Project](#Instructions-for-running-project)
- [Authors and Contributors](#credits)

## Overview and Project Goals
The [goal](https://frontend.turing.edu/projects/module-3/niche-audience.html) of this project was to showcase my knowledge of React. I made The Lazy Lacquerist as an application for users to filter through the nail polish endpoint in the [Heroku Makeup API](http://makeup-api.herokuapp.com/) to find and add nailpolishes to a collection. Once they have added nailpolishes to their collection, they may generate a random manicure palette based on the polishes in their collection.

## Why was this project created?
To solidify and demonstrate the understanding of:
1. React fundementals and modular code architecture
2. Cypress testing to test the application end-to-end
3. Router to create a multi-page and sophisticated UX

## Features
* A website that allows a user to look through a database of nail polish brands and their colors to store the polishes in their collection 
* The user can add a polish from the data base or a brand or colorway that is not yet in the database. 
* The user can view the polishes they have added to their collection in a collection view.
* Users can search for a specific polish through a controlled form, and then search for a specific colorway in the same form. 
* Users can also generate a random, multi-polish manicure palette based on the polishes in their collection.  

**[Back to top](#table-of-contents)**

## How does this work?

![Navigation](https://media.giphy.com/media/1txb7WqxUY6p08Caji/giphy.gif)
![Add a Polish](https://media.giphy.com/media/QjJZjxt1f54pKtxZag/giphy.gif) 
![Mani-Maker](https://media.giphy.com/media/HHIZH0X2ZddzqFMZsK/giphy.gif) 



**[Back to top](#table-of-contents)**

## Technologies Used
<p style="text-align: center;"> 
    <img alt="React Badge" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)" />
    <img alt="JavaScript Badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" />
    <img alt="HTML5 Badge" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat-square" />
    <img alt="CSS3 Badge" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat-square" />
    <img alt="Cypress Badge" src="https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=fff&style=flat-square" />
</p>



## Project Reflection

##### Wins
* Achieving subtle error handling in regards to add a polish form functionality.
* Implementing a dynamic random manicure palette based on user input.

##### Challenges
* Successfully stubbing Cypress fetch calls and receving actual, expected functionality. 
* Inconsistent Cypress testing (ex. an assertion passing with .only, but not as a suite).
* NOTE: When the initial fetch call is accurately stubbed, many tests will not run due to an inconsistency in the Cypress framework. If the intercept inside the custom loadMain() command is commented out, the project will pass 95% of tests. This is an ongoing challenge that I hope to fix in future iterations. 

#### Future Features
* Ability for users to edit or delete the polishes in their collection.
* A Portfolio view where a user can upload photos of their past manicures
* An Inspirations view where a user can save photographs/links to their favorite manicures on other sites (Pinterest, Instagram).

## Instructions for Running Project

* Clone down this repo by copying the SSH key and running git clone in your terminal
* Use npm i to install dependencies
* cd into the repo
* Run npm start in your terminal to activate the server
* Open the project at localhost:3000 in your browser

## Credits
#### Author
<table>
     <tr>
          <td> Ashley O'Brien <a href="https://github.com/AshleyOh-bit">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/76665215?v=4" alt="Ashley GH img"
width="150" height="auto" /></td>
</table>

#### Project Manager
<table>
    <tr>
         <td> Kayla Wood <a href="https://github.com/kaylaewood">GH</td>
    </tr>
    </tr>
    <td><img src="https://avatars.githubusercontent.com/u/51416773?v=4" alt="Kayla GH img"
 width="150" height="auto" /></td>
</tr>
</table>

**************************************************************************
###### This project was created for [Turing School of Software and Design](https://turing.io/)
###### 2021/07/19
**[Back to top](#table-of-contents)**
