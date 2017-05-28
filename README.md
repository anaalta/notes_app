One-Page Note App
-----------

A simple one-page note app. We test-drove its development with our own testing framework, both at unit and feature level, and we wrote everything in vanilla Javascript.

![Notes_App Screenshot](http://i.imgur.com/CcVL2Is.png)

Users can create, book, and destroy listings.

## Installation

`git clone git@github.com:anaalta/notes_app.git`.

## Usage

Option 1: Try it hosted [#here#](github-pages-address-goes-here).

Option 2: Open `index.html` in your favourite web browser.

Option 3: Host it locally (this assumes you have node installed): 
1. `npm install`
2. `npm run start:dev`

## Testing

Open `TestRunner.html` in your favourite web browser. If you have `html` files configured to open in your browser by default, and you have node installed, you can also use `npm run test`.

Our tests run in a clone of the project's `index.html` file, so if you change `index.html`, be sure to make equivalent changes in `TestRunner.html`. Test results are visible in the terminal window of your dev tools:

![Test Results example](http://i.imgur.com/W8L3VQX.png)

## Challenges

1. Butterfly Testing: No frameworks were allowed, including testing frameworks, which meant we had to write our own. This was a rewarding process, especially given how easy it was to run front-end tests—existing front-end frameworks are not beginner-friendly.
2. One Page: This was our first one-page web app, which meant working with new javascript elements, e.g. with objects such as `window.location` in partnership with a `"hashchange"` listener.
3. No jQuery: We learnt the equivalent vanilla JS instead.
4. Github collaboration: We continued to learn about issues, branches, and code reviews.
5. The Module Pattern: Our understanding of encapsulation in Javascript improved a lot this week.


## Collaborators

* [Ana Maria Suciu](https://github.com/anaalta)
* [Alex Chalk](https://github.com/adc17)
* [Sam Blausten](https://github.com/sblausten)
* [Adam Er](https://github.com/adamerdemer)
* [Sandy Cochrane](https://github.com/axcochrane)

User Stories
------------
```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```

```
As a programmer
I can create a new note
So I can record something I need to remember
```

```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

## Other Notes

A three-day group project during week seven of the [Makers Academy](http://www.makersacademy.com) Bootcamp.