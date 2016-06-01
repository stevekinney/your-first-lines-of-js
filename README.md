## Welcome

Congratulations on deciding to learn JavaScript. My job is to get you acquainted with the basics of the language and to make it fun and enjoyable in the process. Learning to program can be hard, so I'll try to keep things visual.

Before we can dig in, we'll need to talk a little bit about some of the tools we'll be using to learn.

Throughout our time together, we’ll be using a library called [p5.js], which makes it easy to draw to this thing called a [canvas]. Canvas—like the real world thing it's named after—is something our web browser gives us to draw on if we need it. p5.js based off a project called [Processing], which you can think of a visual sketchbook for people who are into making art with code as well as for people like you who are just learning how to code for the very first (or second) time. p5.js will allow us to visually see the fruits of our labor as we go along.

[p5.js]: https://p5js.org "p5.js"
[canvas]: http://diveinto.html5doctor.com/canvas.html "Dive Into HTM5 - Canvas"
[Processing]: http://processing.org "Processing"

In p5.js, we define two important functions `setup()` and `draw()`. Don't worry about what a function is right now. Later on, we’ll talk a bit more about what a function is, but for now, let’s just take a look at the syntax.

```javascript
// Writing code up here is fair game.

function setup() {
  // We can even write code here.
}

function draw() {
  // We can also write some code here as well.
}
```

`setup()` and `draw()` are special to p5.js, but not to JavaScript in particular. p5.js uses the `setup()` in the very beginning to set up our canvas for drawing. After it has set up the canvas, it starts calling `draw()` over and over. These functions are special to p5.js, but we're free to write JavaScript anywhere our heart desires—despite the fact that we haven't learned how to write any JavaScript just yet.

(We did accidentally learn how to write functions, though. So, good job with that! 🎉)

