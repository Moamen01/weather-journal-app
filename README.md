# Weather-Journal App Project

## Project Objective
This project creates an asynchronous web app that uses OpenWeatherMap API and user location (ZIP Code) to dynamically update the UI and show some fetched information.

## Building
1. Setting up project environment, Node + necessary packages (express, body-parser & cors). included in server.js
2. Adding a GET route that returns the projectData object in server code.
3. Adding a POST route that adds incoming data to projectData.
4. Acquiring API credentials from OpenWeatherMap website.
5. chaining a Promise that makes a POST request to add the API data, as well as data entered by the user, to our app.
6. chaining another Promise that updates the UI dynamically.
