# Beer-belly-developers-project-2

## Table of Contents

* [Description](#description)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Features](#features)
* [Contributing](#contributing)

## Description

A crowd-sourced local tavern or pub review site.

The application has pages devoted to individual tavern locations where dedicated users can submit a review and rate your local pub!

This application is also powered by OpenBreweryDB API which is a free dataset and API with public information on breweries, cideries, brewpubs, and bottleshops.

Our application was curated for beer connoisseurs and casual beer enthusiasts alike.

## Screenshot

![theonescreenshot](https://user-images.githubusercontent.com/87151585/142794105-b0352b43-331d-43d3-ab5a-fa3aa6a5ecfa.jpg)

## Setup

[Deployed to Heroku](https://beer-belly.herokuapp.com/)

[GitHub Repository](https://github.com/ggamb/Beer-belly-developers-project-2)

## Installation

To install this code, run `npm install` to install all dependencies. To connect to the sequelize database, ensure that the .env file in the root of your directory contains the correct "DB_NAME", "DB_USER", and "DB_PW". Then, open the mySQL terminal and sign in with you username and passwrod. In the mySQL terminal run `source db/schema.sql;` and then `quit`;. Then run `npm start` to start the server. Navigate to localhost:3001 in your browser to use the webpage!

If you are having trouble commenting on a bar page, you may need to run `npm i -D handlebars@4.5.0` in your terminal to install version 4.5.0 of handlebars as a devDependency.

## Features

On this application, a user an create an profile and log in. The user can use the search bar on the landing page to search for an American brewery, cidery, brewpub, or bottleshop by city or zipcode. Leveraging the OpenBreweryDB API, the page will load with bars and associated data for the location the user entered. If the user clicks on the name of a brewery, the user is brought to the bar's page where a logged in user can post comments and engage with other users.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

Copyright 2021

This project is licensed under the MIT License. For the full license see this [link](https://opensource.org/licenses/MIT)

## Contributing

[Glenn G](https://github.com/ggamb)

[Travis T](https://github.com/tygrski)

[Kaylee S](https://github.com/kayldubs)

[Alexis V](https://github.com/Alexzoo0)

[James K](https://github.com/JustKidding22)

