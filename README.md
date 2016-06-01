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

## Calling a Function

There are a number of functions built into the browser. For example, every browser has a function called `alert()`. When called, `alert()` will pop up an annoying little alert box that the user must dismiss before they can do anything else.

In a similar fashion, p5.js gives us a few functions that make drawing a bit easier. In the example below, we'll use the `rect()` function to draw a little box on our canvas.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rect(10, 10, 10, 10);
}
```

If all went well, you should see a tiny little box to the right of the code. You just wrote your first little JavaScript program. I'm super proud of you. Now, let's talk a little bit about what you did, shall we?

We took a function called `rect()` and called it. The `rect()` function is more than happy to oblige us and draw a rectange, but it needs a little more information from us before it can do so. Where would we like it draw the rectange? What size rectange would we like? We need to pass this very important information along to `rect()` before it can draw the rectangle.

If you look at the example, we put four numbers between the parentheses. These are called "arguments." `rect()` takes four arguments: an `x` coordinate, a `y` coordinate, a value for the width, and a value for the height. We just used the number 10 for each of these arguments. This means that we're drawing a rectangle that is 10 pixels wide and 10 ten pixels tall at the (10, 10) position.

<p class="your-turn">
  **Your turn!** I just used the 10 as each argument. But, you can adjust the code and hit "Play" to see your changes in action. Change some of the numbers around and see what happens. What happens if you increase or decrease the `x` and `y` coordinates?
</p>

One thing you might have noticed is that the `x` and `y` coordinates are based off of the top-left corner—not the bottom-left like you might remember from high school algebra. You didn't do anything wrong. This is just the way it works in computer graphics.

We also called another function in `setup()` that I haven't really talked about just yet: `createCanvas()`. This is another function that was given to us by p5.js. It's useful to setting up our canvas—as you might have guessed from the name. We also pass it two other special p5.js values: `windowWidth` and `windowHeight`. This basically tells p5.js that we'd like to use all of that tiny little space to the right of the code samples, please. You don't need to worry too much about this little line of code, but I need to write it in order have enough room for some of the examples in the future and I figured I'd introduce it now and get it out of they way.

## Declaring Variables

So far, we've been adjusting the arguments passed into `rect()` by hand. A lot of the time when we're writing JavaScript, we need to hold on to certain values so that we can refer to them later. JavaScript allows us to give a particular value a name by declaring a _variable_. If I may dredge up the memories of high school algebra one more time, variables meant that you had some range of apples in your bag. That's not really how it works when we're programming. Instead, we'd use a variable to give a name to the number of apples in the bag.

Let's stop talking about this abstractly and look at some code. In the example below, we'll assign a variable called `x`, which will—unsurprisingly—hold the value that we'll eventually pass to `rect()` for the `x` coordinate of the rectangle.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

var x = 10; // We'll declare "x" here.

function draw() {
  rect(x, 10, 10, 10); // "x" represents whatever value we used above.
}
```

Go ahead and adjust `x` for a bit and see how things change when you hit play. Now, that we have some syntax to talk about, let's look at it.
We use the `var` keyword to let the JavaScript interpreter know that we're getting ready to define a variable. Then, we use an _indentifier_—`x`, in this case—to let the interpreter know the name of the variable we'd like to declare. Finally, we use `=` to assign a value to our newly created variable.

Inside of the function, can now pass `x` into `rect()`. `x` is just another name for 10. So, when `rect()` sees that it was passed `x`, it looks it up and sees, "Ah, yes. 10. Of course."

<p class="your-turn">
  **Your turn!** Can you create three more variables—`y`, `w`, and `h`—and pass them into `rect()`? (You may be tempted to call use `width` and `height` instead of `w` and `h`, but those actually have special meaning in p5.js. So, don't do that. Those variable names are, however fair game in regular JavaScript.)
</p>

You might be asking yourself, why did I do all this? Couldn't I have just used the number directly? In this super simple example, that's definitely true. But, imagine we needed the `width` for more than one rectangle. Sure, we could just use the same number everywhere, but what if the requirements changed and we had to change the width of all of our rectangles. Well, if we assigned the value to a `width` variable then we could just adjust that `width` in one place and now every reference to `width` would be the newly updated value.

There are also some cases where we don't know what the value is until the code is being executed. We could, for example, have some code that gets the current date and time and stores it in a variable or we could have a program that reads a file and works with the contents of that file.

## Updating Variables

We just saw how we can declare variables for the very first time. But, we can also update their values later on if we need to. The first time we declare a variable, we have to use the `var` keyword. After that, we're off the hook. We could update the value of `y` by saying `y = y`—no `var` required.

If you recall from the [Welcome][#welcome] section, p5.js is calling `draw()` repeatedly. This means that we can update the value of `y` each time the `draw()` was called and p5.js would draw it the next time around in its new location based on its updated values. Let's see this in action.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

var x = 10;
var y = 0;
var w = 10;
var h = 10;

function draw() {
  rect(x, y, w, h);
  y = y + 1;
}
```

Oh, whoa. The little box is leaving a trail behind it. That's weird. Well, actually, it's not. See, our code is doing exactly what we're telling it to do. It's drawing a box at (10, 0). The next time around, it's drawing a box at (10, 1). It's never clearing away any of the previous boxes, because we never asked it to.

<aside>You can always start the animation over by hitting "Stop" and pressing "Play" again.</aside>

So, how do we ask it to clear away the previous boxes? Well, it's kind of a cheat. We just paint a new white background over everything before we draw the next box. Check out the example below.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

var x = 10;
var y = 0;
var w = 10;
var h = 10;

function draw() {
  background(255);
  rect(x, y, w, h);
  y = y + 1; // We'll set "y" to one more than its previous value.
}
```

<p class="your-turn">
  **Your Turn!** Can you adjust some of the other variables each time `draw()` is called?
</p>

## Conditionally Executing Code

One thing you might notice is that our brave little box disappears into oblivion once it passes the bottom of the canvas. This makes sense if you thin about it. We're mindlessly incrementing `y`. We don't really care if it has passed the bottom of the canvas and `rect()` dutifully draws the little box even if it's 10 inches below our feet at this point.

What we want to do is take a good hard look at the value of `y` and then only increment it if it's still within the bounds of our canvas. Right now, it's 10 pixels tall. So, we want to look at the height of the canvas and the `y` coordinate plus the height of the box—good thing we stored it in the the variable `h`, eh?—and then only increment the value of `y` if it's going to be fully drawn inside of our canvas.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

var x = 10;
var y = 0;
var w = 10;
var h = 10;

function draw() {
  background(255);
  rect(x, y, w, h);

  if (y + h < height) {
    y = y + 1;
  }
}
```

