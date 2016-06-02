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

There are a number of functions built into the browser. For example, every browser has a function called `alert()`. When called, `alert()` will pop up an annoying little alert block that the user must dismiss before they can do anything else.

In a similar fashion, p5.js gives us a few functions that make drawing a bit easier. In the example below, we'll use the `rect()` function to draw a little block on our canvas.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rect(10, 10, 10, 10);
}
```

If all went well, you should see a tiny little block to the right of the code. You just wrote your first little JavaScript program. I'm super proud of you. Now, let's talk a little bit about what you did, shall we?

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

If you recall from the [Welcome](#welcome) section, p5.js is calling `draw()` repeatedly. This means that we can update the value of `y` each time the `draw()` was called and p5.js would draw it the next time around in its new location based on its updated values. Let's see this in action.

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

Oh, whoa. The little block is leaving a trail behind it. That's weird. Well, actually, it's not. See, our code is doing exactly what we're telling it to do. It's drawing a block at (10, 0). The next time around, it's drawing a block at (10, 1). It's never clearing away any of the previous blockes, because we never asked it to.

<aside>You can always start the animation over by hitting "Stop" and pressing "Play" again.</aside>

So, how do we ask it to clear away the previous blockes? Well, it's kind of a cheat. We just paint a new white background over everything before we draw the next block. Check out the example below.

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

One thing you might notice is that our brave little block disappears into oblivion once it passes the bottom of the canvas. This makes sense if you thin about it. We're mindlessly incrementing `y`. We don't really care if it has passed the bottom of the canvas and `rect()` dutifully draws the little block even if it's 10 inches below our feet at this point.

What we want to do is take a good hard look at the value of `y` and then only increment it if it's still within the bounds of our canvas. Right now, it's 10 pixels tall. So, we want to look at the height of the canvas and the `y` coordinate plus the height of the block—good thing we stored it in the the variable `h`, eh?—and then only increment the value of `y` if it's going to be fully drawn inside of our canvas.

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

Now, instead of dropping past the bottom of the canvas, it will sit there peacefully. `y` will no longer be incremented as so as `y` plus the height of the block is greater than the height of the canvas itself.

<p class="you-turn">
  **Your Turn!** We've been increment `y`, but could you increment `x` as well? Have it stop moving as soon as it hits the right edge of the canvas.
</p>

## Branching Conditionals

`if` statements are really good if you only want to run some code if certain conditions are met, but what if we want to get a bit more nuanced? What if we want to do one thing if the condition is met, but do something totally different if it's not? Well, JavaScript also provides us with an `else` keyword for just this sort of situation. It looks a little something like this:

```js
if (someConditionIsMet) {
  // Do the thing.
} else {
  // Do the other thing.
}
```

Let's try to implement the following functionality.

- If the block hasn't hit the bottom of the canvas, increment `y`.
- If it has, move the block back to the top of the canvas by setting `y` back to 0.

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
  } else {
    y = 0;
  }
}
```

<p class="your-turn">
  **Your Turn!** Can you have it move to the right as well as then reset `x` every time it hits the right edge of the canvas?
</p>

Now, it will continue falling forever. But, let's kick it up a notch, shall we?

- Set a variable called `direction` to 1.
- If it has hit the bottom of the canvas, then mulitply `direction` by `-1`. This will effectily switch the direction that it's moving in.
- If it has hit the top of the canvas, then also multply `direction` by `-1`.
- Otherwise, add `direction` to `y`.

We'll handle our conditionals in the opposite order and flip the conditions around a bit. First, we'll look to see if it's hitting either edge. We can use `if` and a third conditional keyword, `else if`, to check to see if it's hitting the edges. If it is, we'll turn it around. If it's not, then when move it along in the direction it was going.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

var x = 10;
var y = 0;
var w = 10;
var h = 10;
var direction = 1;

function draw() {
  background(255);
  rect(x, y, w, h);

  if (y + h > height) { // If "y" plus the height is more than the canvas height
    direction = direction * -1; // Flip the sign on "direction"
    y = y + direction;
  } else if (y < 0) { // If "y" is less than the top of the canvas
    direction = direction * -1;
    y = y + direction;
  } else {
    y = y + direction;
  }
}
```

This code works, but it has a lot of repetition.

<p class="your-turn">
  **Your Turn!** You're probably not surprised at this point, but I'm going to ask you to implement the same functionality with `x` again. I encourage you to type it out instead of copying and pasting in order to build up some muscle memory.
</p>

## Creating Functions

We've been calling functions throughout our time together. We even wrote two of them (e.g. `draw()` and `setup()`). But, we haven't really had a chance to talk about them. Keeping in that spirit, I'm going to kick the can down the road a little further as I change the subject to the problem we're trying to solve first.

If you look up at the previous example, there is a lot of repetition. We've `y = y + direction;` three times. We programmers like acronyms. One of the ones we _really_ like is called DRY, which stands for "Don't Repeat Yourself." The more times you repeat yourself, the more likely it is that you're going to make a boo-boo. More importantly, the more times you repeat yourself, the more places you're going to have to go find and change if you need to change something about the way your program works, which is also a good opportunity for you to introduce a boo-boo. Less code is better code and functions help us package up repeated code into one nice and neat little place.

If you're lucky enought to have someone who's be programming for a bit near you, then he or she probably has some strong ideas about some ways we could improve that code. Just let them know that I'm aware of those things as well and we will talk about them in a bit, but first we're going to talk a little bit about using functions to keep our code DRY.

If variables are good at storing values for you to use multiple places in your program, then functions are going at storing a set of steps that you'd like to repeat multiple places in your code. Let's take a look at the syntax for writing a function.

```js
function yourAwesomeFunctionNameGoesHere(firstArgument, secondArgument, …) {
  // You write the steps you want to happen here.
  return someValue;
}
```

There are a few other ways to write functions, but we're going to stay blissfully ignorant of them for the time being. Instead, let's write a function call `add()`, which takes two numbers and returns the sum.

```js
function add(a, b) {
  return a + b;
}
```

Now we could use that function all over the place.

```js
var three = add(1, 2);
var four = add(2, 2);
```

Cool. There are some important thinks to note. If you want to use the result of your function, then you _must, must, must, must_ use the `return` keyword. Otherwise JavaScript thinks you don't want to return anything. We should talk a little bit about how variables work in relation to functions as well. Functions have access to anything declared outside of themselves, but anything you declare inside of a function only lives inside of that function.

```js
var message = "You are doing the thing!";

function add(a, b) {
  var sum = a + b;

  alert(message); // We access to "message" in here.

  return sum;
}

alert(sum); // KABOOM! We don't have access to "sum" out here.
```

As clean and nice as our abstract `add()` funciton is, it's time to turn our attention back to the problem at hand: cleaning up our floating block. We could make a few functions to do some common tasks. There is another advantage to breaking your code out into functions that no one really talks about. When you make a function, you have to give it a name, right? These names go a long way to help make your code make sense. Remember when we made that conditional with `y + h > height`? You probably had to squint a little bit to figure out what was happning there. What if we put it in a function called `blockIsAtBottom()`. It's much clearer when you come back to this code later what it's doing.

Let's make four functions:

- A function called `blockIsAtBottom()`, which will return true if the block is at the bottom of the canvas.
- A function called `blockIsAtTop()`, which will return true if the block is at the top of the canvas.
- A function called `reverseDirection()`, which will multiply `direction` by -1.
- A function called `moveBlock()`, which will move the block along in the right direction.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

var x = 10;
var y = 0;
var w = 10;
var h = 10;
var direction = 1;

function blockIsAtTop() {
  return y + h > height;
}

function blockIsAtBottom() {
  return y < 0;
}

function reverseDirection() {
  direction = direction * -1;
}

function moveBlock() {
  y = y + direction;
}

function draw() {
  background(255);
  rect(x, y, w, h);

  if (blockIsAtTop()) {
    reverseDirection();
    moveBlock();
  } else if (blockIsAtBottom()) {
    reverseDirection();
    moveBlock();
  } else {
    moveBlock();
  }
}
```

This code has some big advantages. If the process of moving the block changes, then all we have to do is modify `moveBlock()` and everything else will fall into place. At the same time, moving the conditional logic into functions makes the conditional logic a lot easier to make sense of. Everyone is happy and life is good.

### Maybe Don't Use `else if`

A mistake I see novice developers make sometime that they're conditional logic gets overly complicated. As a rule of thumb, I try to avoid `else` and `else if` if I can avoid it. Let's consider the following code.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

var x = 10;
var y = 0;
var w = 10;
var h = 10;
var direction = 1;

function blockIsAtTop() {
  return y + h > height;
}

function blockIsAtBottom() {
  return y < 0;
}

function reverseDirection() {
  direction = direction * -1;
}

function moveBlock() {
  y = y + direction;
}

function draw() {
  background(255);
  rect(x, y, w, h);

  if (blockIsAtTop()) {
    reverseDirection();
  }

  if (blockIsAtBottom()) {
    reverseDirection();
  }

  moveBlock();
}
```

We know that we want to move the block no matter what. That's why it made a guest appearance in every branch of our conditional logic. In this case, it doesn't need to live in the conditional. Since the block can't be at the top and the bottom at the same time, we can treat each condition as a seperate scenario. There are some other tricks we could use to make this code a bit more concise, but this is good enough for now.

## Organizing Your Code with Objects

Right now, we have one, lonely, little block. Our proud little block uses the `x`, `y`, `w`, and `h` varialbles. We call these variable "global variables" because they're not convined to any particular function. Everyone has access to them. The problem with global variables is you might run into the situation where you try to use the same name in two totally different places and it begins to get a little squirrely. This is especially likely when your variables have ridiculous names like `x`, `y`, `w`, and `height`.

Here is a fun rule for global variables: "Use as many as you need and as few as you can get away with."

Let's embark on a series of steps to make it easier to support multiple blockes. One of the first things we can do is organize all of the variables that control the size and position of our block and convert them to properties on a single `block` object. Creating objects in JavaScript is super easy. You can create a new object using `{}`.

Let's do this in a series of small steps. We'll start by making a brand new object and then define the properties we need on that object. Instead of having five global variables, we'll just have one (`block`, in this case). The rest will all be defined as properties on `block`.

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}

var block = {};
block.x = 10;
block.y = 0;
block.width = 10;
block.height = 10;
block.direction = 1;

function blockIsAtTop() {
  return block.y + block.height > height;
}

function blockIsAtBottom() {
  return block.y < 0;
}

function reverseDirection() {
  block.direction = block.direction * -1;
}

function moveBlock() {
  block.y = block.y + block.direction;
}

function draw() {
  background(255);
  rect(block.x, block.y, block.width, block.height);

  if (blockIsAtTop()) {
    reverseDirection();
  }

  if (blockIsAtBottom()) {
    reverseDirection();
  }

  moveBlock();
}
```

There is a more concise way of adding properties to the box. We can create the properties and set up the box at the same time.

```js
var block = {
  x: 10,
  y: 0,
  width: 10,
  height: 10,
  direction: 1
};
```

We'll use this syntax from this point forward.

## Making Functions Reusable

So, we cleaned up the number of global variables. But, this is still a little wonky. Each of our functions just assumes there is only one box. Remember when we wrote that `add()` function earlier? `add()` didn't need to know about two numbers defined out there in the global scope. We passed in the numbers we wanted to add up and it used the arguments we handed it in order to get the job done.

It would be cool if we could hand our functions a box to work with and they could get the job done. Sure, we have one box right now, but later on we could pass one of a dozen or two boxes into the functions. Instead of having the functions look up at the global scope, let's pass the block in.

Here is a small little example of what we're talking about.

```js
var firstBlock = { // Make a block.
  x: 10,
  y: 0,
  width: 10,
  height: 10,
  direction: 1
};

var secondBlock = { // Make a another block.
  x: 20,
  y: 30,
  width: 20,
  height: 20,
  direction: -1
};

function moveBlock(block) { // Define a function that takes a block as an argument.
  block.y = block.y + block.direction;
}

moveBlock(firstBlock); // Call moveBlock() with the first block.
moveBlock(secondBlock); // Call moveBlock() with the second block.
```

`moveBlock()` is now pretty flexible. It can take any block and move it along its merry way. It don't need to know about any block in particular. In programming parlance, we'd say that `moveBlock()` is reusable.

---

(To be continued. This is a work in progress. You can contribute [here](https://github.com/stevekinney/your-first-lines-of-js).)
