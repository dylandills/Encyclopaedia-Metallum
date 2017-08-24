# Metal Band API

#### A program that allows users to search for a Metal Band on Encyclopedia Metallum as well as generate a random band from that website and see some information thereof. 6/29/17

#### By **Dylan Dills and Andrew Dalton**

## Description
Feeling metal and want to call upon a sick API to display facts about your favorite metal band or find a random one? Get out of the pit and come to this application, which calls upon a gnarly API to display your favorite band with name, genre, and country, or you can just click to get a random one. 

## Planning

## Configuration/dependencies
  * Install the following packages:

    * Node Packages
      * The following were implemented for use in our Development Environment
        * gulp - allows us to run gulp commands on our project to ease the development process.
        * browser-sync - allows us to see our changes to our project as we save them.
        * browserify - makes our project browser compatible.
        * vinyl-source-stream - puts our browserified source code into a new file.
        * gulp-concat - concatenates our JS files into one.
        * gulp-uglify - consolidates our code into a form that is more easily digestible by the browser.
        * gulp-util - allows us to manage environment variables.
        * del - deletes all the files that are passed as arguments into the command.
        * jshint - analyzes code and warns about parts that don't follow stylistic conventions, or could cause bugs in the future.
        * sass - method translates our files into normal CSS sourcemaps
        * bower-files

    * Bower Packages
      * The following were implemented in our Production Environment
        * jquery
        * bootstrap
        * moment.js

  * It could include a short description of what each does for you

  ## Specifications
  |Behavior|Input|Output|
  |---|:---|:---|
  | User Inputs Band| "Metallica" | Receives message "The band you were searching for was Metallica. Here's some info about them from the Encyclopedia Metallum:  Name: Metallica" etc |
  User clicks "Get Random Band" | "Get Random!"| Recieves message "Here's a random Metal Band for you:" with band name, band genre, and band country of origin (currently displays at undefined) |

## Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
    * build/css/vendor.css
    * build/css/main.css
    * build/js/vendor.min.js
    * build/js/app.js

## Setup/Installation Requirements

* Recieve API key by going to http://em.wemakesites.net/
* Clone the repository (https://github.com/dylandills/Encyclopaedia-Metallum)
* Create .env file at top of directory, with putting exports.apiKey = "YOUR API KEY";
* Run 'npm install' in your chosen terminal application
* Run 'bower install' in your chosen terminal application
* Run 'gulp serve' in your chosen terminal application, then wait for your browser to be opened to the appropriate page.


## Known Bugs
* Country of Origin returns as undefined when a random band is called.

## Technologies Used

  * HTML
  * CSS
  * SASS
  * Bootstrap
  * Javascript
  * jQuery
  * Bower
  * Node
  * Node Package Manager

## Support and contact details

_Email dylan.dills@gmail.com with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Dylan Dills and Andrew Dalton}_**
