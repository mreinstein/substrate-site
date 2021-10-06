# Hello Substrate

This tutorial will guide you through setting up a basic Substrate project.


## Install Substrate

<!-- You'll need to install Substrate on your device, if it isn't already.

Refer to [Getting started](../guide/getting-started.md) -->

With [npm](https://www.npmjs.com/get-npm) installed, run: `npm install -g substrate`

This will make a command line utility, `substrate`, available globally.

**You'll only need to do this once, if Substrate isn't already installed.**


## Create a Substrate document

In your file explorer or coding software of choice, create a new folder for your project. Name that folder `hello-substrate`.

Then, create a new file in this folder. Name it `hello.explorable.md`.

Add the following line to `hello.explorable.md` :
```md
Hello Substrate!
```

## Launch the viewer

Open a command line terminal and navigate to the `hello-substrate` folder. Then, run `substrate`.

```shell
cd ./hello-substrate
substrate
```

**OR**, run `substrate` with the path to `hello-substrate` as an argument.

```shell
substrate ./hello-substrate
```

You should see the following output:

```shell
Substrate server listening on port 5000
      [found] hello.explorable.md
```

Open a web browser and navigate to `localhost:5000`

![An image](./hello-1.png)

Bam! Before your eyes is a human-friendly representation of your document, in the Substrate viewer.

It's a tad bland-looking, isn't it? Also, where's the code?

Don't worry, we're getting there!


## Make it prettier

Since your newly created document is a Markdown file - `.md` being its extension - its content is text meant to be read by humans, unless specified otherwise.

" Hello Substrate! " is just that: text. And we can use Markdown syntax to make that text more visually appealing.

Edit `hello.explorable.md` like so:

```md
# Hello Substrate!
This is a **Substrate** document. It is _very_ nice to read.
```

Then head back to your web browser. The page reloaded automatically, and looks better now:

![An image](./hello-2.png)

## Add some JavaScript

A Substrate document is part Markdown text, part JavaScript code useable as-is.

While the default content of a Substrate document is Markdown text, as we've seen, that text can be intersped with executable JavaScript code inside code blocks.

Edit `hello.explorable.md` like so :
~~~md
# Hello Substrate!
This is a **Substrate** document. It is _very_ nice to read.
```js
console.log('hello substrate')
```
~~~

![An image](./hello-3.png)

The JavaScript code block shows in the viewer, formated as such.

Moreover, if you open the browser's console, you'll notice that 'hello substrate' got printed there. **This is because the code contained in the JavaScript block executed on the page !**

## Create an importable document

Create a second Substrate document in your project's folder. Name this one `world.explorable.md`.

Fill it with the following content :

~~~md
# World

An object representing a world of lizards and lava.

```js
const world = {volcanoes:13124, dinosaurs: 7512097}
```

## Exports

```js
export default world
```
~~~

This instructs JavaScript to do two things :
- Declare a constant, `world`, holding a reference to an object;
- Export `world` so that this object can be accessed from other files.

Because these two lines of code are inside two distinct JavaScript blocks, Markdown text can be squeezed in between them - in this case, `## Exports` . 

In the browser, you can use the menu button in the top-left corner of the page to navigate to the new document, 'world'. It should look like this :

![An image](./hello-4.png)


## Use a document as a dependency

Finally, let's make `hello.explorable.md` use `world.explorable.md`'s exported module.

Append `hello.explorable.md`, with the following lines:

~~~md
### Let's log the number of dinos to the console.

```js
import world from './world.explorable.md'
console.log(world.dinosaurs)
```
~~~

Open the browser's console. The number of dinosaurs in the world should be printed there, below 'hello substrate'!

![An image](./hello-6.png)

It's worth noting that this would work just as well if `world.explorable.md` was, instead of a Substrate document, a JavaScript file containing only the JavaScript code found in `world.explorable.md`.