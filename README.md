# SITE Pre-Work Submission

Name: Kimberly Kao

## APP Walkthrough GIF
### Win!
<img src="https://cdn.glitch.com/8cacf7f4-dc11-471e-a6b7-279d9445a571%2Fwin3.gif?v=1614619963214" width=250 title="win"/>

### 3 Strikes
<img src="https://cdn.glitch.com/8cacf7f4-dc11-471e-a6b7-279d9445a571%2Fstrikes2.gif?v=1614619566568" width=250 title="strikes"/>

### Out of Time
<img src="https://cdn.glitch.com/8cacf7f4-dc11-471e-a6b7-279d9445a571%2Ftimer.gif?v=1614579464866" width=250 title="timer"/>

## 1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- I used w3schools to learn more about different Javascript, HTML, CSS functions.
- I used StackOverflow to help with debugging.
- I used Youtube to help me create a countdown timer

## 2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

Some of the challenges I encountered when creating this submission was implementing the speed up time, the random secret pattern, and creating a countdown clock. To determine the cause of the speed up time issue, I used log statements to print out the clueHoldTime before each play sequence. This gave me insight on what was going on and helped me fix the problem. I also had some trouble implementing the random secret pattern function. Because I don’t have much experience working with Javascript, I was unsure how JavaScript's Math.random() worked. I did some research on the function using w3schools and was able to figure out how to limit the intervals of the Math.random() function to integers between 0 and 9 using the Math.floor() function. However, because there was no button at 0, I needed to get rid of it. With some tweaking, I found out that I needed to add a +1 outside of the Math.Random() function and Math.floor() function. This allowed me to return the necessary integers I needed. I also had trouble implementing the countdown clock. Because I don’t have much experience working with HTML, CSS, and JavaScript, I was unsure how to start. To solve this problem, I followed a video that taught me how to implement a simple countdown clock. I then edited the code from the video to fit into my project. I noticed that the countdown timer was counting down to negative seconds instead of stopping at 0. To fix this, I had to utilize the clearInterval() method. I placed this throughout my project whenever I wanted the clock to stop (ex. When the game ends or the clock runs out). I also noticed that when I tried to run the project on Google Chrome as opposed to Microsoft Edge, the sound would not play. I read the documentation provided by Chrome and applied the solution to the appropriate part of my project.

## 3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

I don’t have much experience in web development, so it is difficult to ask questions about the specifics of web development even after completing the project. Despite this, I do have a few general curiosities. I am curious on how to make the application maintain its shape when the size of the browser changes and how to make the application mobile friendly. I would also love to learn more about the UI of web applications and essentially make the web app more aesthetic. I am also interested in finding out how to make a web product stand out. For example, if there are multiple applications that essentially do the same thing, what should I do to make my application stand-out from the rest of the applications? I am also very interested on how to implement the website so that it’s more accessible to those who don’t want to use a mouse or have disabilities.

## 4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had more time, I would love to further develop the game. For example, it would be super cool if the button patterns formed a song. This would require more buttons and the Math.Random() function would be changed to accommodate for the amount of songs you can play. I would also like to make it so that the application can be used on a mobile device and maintain its shape when the size of the browser changes. This would make it more user friendly and allow the buttons to stay in a certain formation. It would also be amazing to implement a high score feature that would keep track of the user’s current score and also keep track of the high score, perhaps by using a local database. I also wanted to change the countdown clock from the basic number countdown to an animated countdown timer using a dash-array (it would look so cool). Finally, I would love to implement accessibility features like having the option to use the number pad instead of the mouse to press down corresponding buttons.
