## Website Performance Optimization portfolio project

### Getting started

1. Check out the repository
2. Run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8000
  ```

3. Open a browser and visit localhost:8000
4. Download and install [ngrok](https://ngrok.com/) to make local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```
  
####Build Tool:
Gulp is used to automatically optimize this project.
1. Install gulp globally

``` bash
  $> npm install gulp -g
  ```

2. Install gulp locally

``` bash
  $> cd /path/to/your-project-folder
  $> npm install gulp --save-dev
  ```
  
3. Install plug-in

 ``` bash
  $> npm install gulp-inline-source --save-dev
  $> npm install gulp-imagemin --save-dev
  $> npm install gulp-htmlmin --save-dev
  $> npm install gulp-uglify --save-dev
  $> npm install gulp-minify-css --save-dev
  ```


####Part 1: Optimize PageSpeed Insights score for index.html
1. Inline style.css
2. Inline web fonts
3. Use media query for pint.css
4. Use async attribute on JavaScript
5. Minify all JavaScripts, CSS, html
6. Compress images

####Part 2: Optimize Frames per Second in pizza.html
1. Move some calculations and variables outside loops in main.js
2. Use requestAnimationFrame in main.js
3. Modify resizePizzas function to make it resize pizza in less than 5ms.
4. Inline style.css 
5. Minify all JavaScripts, CSS, html

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
