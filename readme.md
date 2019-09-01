[![Netlify Status](https://api.netlify.com/api/v1/badges/8f77162c-22b1-4636-8e50-0f288acb5160/deploy-status)](https://app.netlify.com/sites/vtcodecamp2013/deploys)

# VT Code Camp 2013 Website

Built with the [11ty/Eleventy](https://www.11ty.io) & [netlify](https://app.netlify.com/)

## Dev Environment Setup

* Install Node.js & NPM
* Run `npm install` in the project directory to install local dependencies
* Run `npm run serve` to run a local dev environment
* Access dev copy of the site at [localhost:8080](http://localhost:8080)


## NPM Scripts

Explanation of the available npm scripts for this project

### build

`npm run build`

This runs the command `npx eleventy` to build the site into the docs 
directory.  The docs directory is used for deployment to github pages.

### serve

`npm run serve`

This runs the command `npx eleventy --serve` which builds the site, then 
continues to watch and rebuild the site when file changes are detected. 
It also runs a local webserver and makes the site available at 
[localhost:8080](http://localhost:8080)

### Resources

* [11ty - Config Input Directory](https://www.11ty.io/docs/config/#input-directory)
* [11ty - JS Templates](https://www.11ty.io/docs/languages/javascript/)
* [a11y - add lang attribute](https://dequeuniversity.com/rules/axe/3.1/html-has-lang?application=lighthouse)
* [a11y - Accessible SVGs](https://css-tricks.com/accessible-svgs/)
