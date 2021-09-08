# Interactive views

This tutorial will guide you through adding interactive views to your Substrate documents. These views are very handy to display live examples of the code contained in a document.

## Create a document with a JavaScript explorable block

Create a folder for this project, `interactive-views`.

Inside of it, create a Substrate document, `index.explorable.md`. Edit it like so :

~~~md
# Interactive views

```js explorable
console.log("I am a JavaScript explorable block. I'm hidden by default!")
```
~~~

This defines a **_JavaScript explorable_** block.

Blocks of this type differ from the regular JavaScript blocks in some important ways :
- They're displayed as collapsibles in the viewer
- The code they contain is _excluded_ from the document's output - it will only execute when viewing this document in the viewer
- They may contain an html view

__In short, they're perfectly suited for code examples that should have no incidence outside of the document.__

## Add an interactive view

Substrate provides a way to demonstrate what a document's code does in a visual and interactive way.

Edit `index.explorable.md` like so:

~~~md
# Interactive views

```js explorable
import html     from 'https://cdn.skypack.dev/snabby'
console.log("I am a JavaScript explorable block. I'm hidden by default!")
html`<div>hello</div>`
```
~~~

## Snabby hooks

## Canvas

Here's how you would add an interactive canvas:

~~~md
```js explorable

const Renderer = {
    width: 300,
    height: 300,
    ctx: null
}
const gameWidth = 300;
const gameHeight = 300;
let ctx = null;

function gameLoop () {
    const {ctx} = Renderer;
    ctx.clearRect(0, 0, Renderer.width, Renderer.height)
    ctx.fillStyle = '#33aaaa';
    ctx.fillRect(
        20+2*Math.random(),
        20+2*Math.random(),
        150+1*Math.random(),
        100+1*Math.random()
    );
    requestAnimationFrame(gameLoop)
}

function _insertHook (vnode) {
	Renderer.ctx = vnode.elm.getContext('2d')
	Renderer.ctx.imageSmoothingEnabled = false
	requestAnimationFrame(gameLoop)
}

html`<canvas width="${Renderer.width}"
		     height="${Renderer.height}"
		     @hook:insert=${_insertHook}
		     style="background: linear-gradient(45deg, rgb(86 160 255) 0%, rgb(21, 64, 139) 100%); image-rendering: pixelated;"></canvas>`
```
~~~

## Notes

**Explorable blocks with a view (ending with \'html...\') can't contain import statements.** When that happens, an error is thrown and neither the view nor the imports work.
