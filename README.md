# Dungeon/Game Master Companion App Front End
Back end: https://github.com/bi1cor0/dmC_backend.git

## About
The goal for this application is mainly for game masters or more specifically, Dungeon Masters for the Dungeons and Dragons tabletop roleplaying game. There is a lot of data that dungeon masters have to manage, and characters are only one type of many types of data. This app is meant to be a data organizer and manager that takes data necessary for dungeon masters and puts it in a card format for easy selection and manipulation.

This is the frontend portion of the application. Taking the character data from the backend, I wanted the dungeon master user to view what characters are available to them, based on what has been entered into the backend. Right now, the app is more like an interface that directly edits the backend API for the user's benefit. They are able to update any and all characters that are in the backend, and add new characters if they need to. And to also delete each character if needed from the backend. There is also a feature where the DM would take all the avaiable characters and enter a battle screen, where the character's Health and Name are highlighted. As the player characters fight a randomly generated monster from the D&D 5e API. 

## Functionality of Pages

- Select Character Page
    - Allows for the display and read of the API data in card form. 
- Add New Character Page
    - Allows user to add new data in the API, and therefore the application. 
- Update Characters Page
    - Allows user to update each entry in the API based on which key value needs to be changed. Changes can only be done one character at a time. 
- Delete Characters Page
    - Allows user to delete each entry in the API, and therefore the application. 
- Battle Page
    - Displays all character data in card form with their HP and name highlighted. This also generates a monster randomly with it's name and HP also highlighted. This simulates a battle between players and a boss monster. 

I also added functionality to the battle screen to toggle each character's health. Whenever an increment or decrement button is pushed, the health is either drained or added on to. I used useReducer for this, but based my code for this increment functionality only, off of a sample useReducer lesson found in this code sandbox:
https://codesandbox.io/s/counter-with-usereducer-and-payload-kb703o?from-embed=&file=/src/App.js:582-956

## Future Goals
- Initiative tracker that organizes the battle screen's character cards based on turn order. 
- A database for maps and a selector for the maps used in encounters. 
- An option to choose different types of enemies from the D&D 5e API. 
- A 'cart'-like selection tool that selects specific characters/maps and/or enemies and shift them over to the battle screen. Instead of rendering every existing character card in the API and randomly generating a monster from the API; users should pick and choosse which adventurers can come along during the session. As well as storing new adventurers to be selected for future use. 

API used: https://www.dnd5eapi.co/
