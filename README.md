A sample based on the angular 2 seed project. Contains a modular lesson plan based on a json config.

Mark - the following instructions were copied from the project I cloned this from. They should be enough to get the server up and running so you can play with this locally.

The main modifications I made were to the files in the home directory. Specifically:
src/app/home/home.component.css
src/app/home/home.component.html
src/app/home/home.component.ts

The rest of the files are copied from the 'starter project' that I used to start this.

### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script
