# Front End Focussed Calculator

## How to Run
* Clone or download this repo to your local machine
* Navigate to the project folder in your terminal
* To launch the app in your browser, type **open views/index.html**
* To launch the tests in your browser, type **open SpecRunner.html**

## Description
The task that was presented:
* Build a calculator which is responsive on mobiles, tables and desktop
* Chrome is the minimum standard
* Build a save functionality where users can save and name certain Maths functions
* Be able to select and delete this saved function
* Be able to see all saved Maths when clicking on a button

## Approach
My approach was to create a simple one page application, using JavaScript, jQuery & CSS3.

The back-end logic which controls:
* the correct mathematics
* where to store the result and history
* the stored maths when saved

This is contained within the file **src/Calculator.js**.

The **src/Interface.js** utilises jQuery to update the attributes on the Calculator, and also UI elements within the **views/index.html** file. This contains the HTML executed on running the app. The **styles/style.css** contains the styling for the HTML file. The UI is relatively simplistic, but content is dynamic.

* I used jQuery as it makes it much easier to use JavaScript on the browser. I was also doing alot of HTML/DOM manipulation, which jQuery helps with.
* I used a little Bootstrap to help with the mobile responsiveness, but need to keep working with this framework.
* I started to build a server side to help with state and potentially storing saved Maths in a database for scalability.

## Lessons Learned
* Testing - the front-end code isn't tested as much as I would've liked, mainly due to my struggles testing jQuery.
* The Select Button - using getElementsByClassName hindered my solution to being able to select a saved sum and push it into the history array. This is an area I need to research more into to find a better solution.
* Mobile Responsiveness - I should've built mobile first with this app but I did not. If I did, I would not have had the issues trying to implement Bootstrap too late and having responsive issues on Mobile and Tablet.

## Screenshots

App with saved functions:

![saved](/img/saved.png)
