# Writing Substrate documents

Substrate documents (explorable.md files) are very simple to create and edit in any text / code editor.

Each of these files contains both useable, importable source code, and human-readable explanatory text with interactive examples.

They are [markdown]("https://www.markdownguide.org/") files, formatted in a certain way to be interpreted correctly by substrate. A very simple syntax basically allows the integration of runnable javascript code in these non-js files.

By default, the text these files contain is interpreted as standard markdown, only relevant to human readers: It will show on the page, formatted as markdown, when this document is explored in the viewer.

## Code blocks

Javascript code, on the other hand, has to be placed inside special blocks. Two types of blocks serve different purposes:

### JavaScript blocks

JavasSript blocks are defined like so:

<code-group>
<code-block title="LONG" active>
~~~md
```javascript
console.log('hello from a JavaScript block!')
```
~~~
</code-block>

<code-block title="SHORT">
~~~md
```js
console.log('hello from a JavaScript block!')
```
~~~
</code-block>
</code-group>

These blocks show on the page when a document is explored, formatted as code like you'd expect.

But that's not all. Code placed in there actually runs on the page, too.

Moreover, this code gets to be _included_ in this file's output, as it would behave in a regular js file. Meaning, this code will run if the document is imported in another explorable.md or js file.

__Hence, this is the place for useable, importable source code.__

### javascript explorable blocks

They're defined like so:

<code-group>
<code-block title="LONG" active>
~~~md
```javascript explorable
console.log('hello from an explorable block!')
```
~~~
</code-block>

<code-block title="SHORT">
~~~md
```js explorable
console.log('hello from an explorable block!')
```
~~~
</code-block>
</code-group>

These block shows differently on the page, as collapsibles. They're hidden by default.

Code placed in there also runs on the page. However, it gets _excluded_ from this file's output. If you were to import the document elsewhere, this part would simply get ignored. In other words, code inside of these blocks will _only ever_ run on the viewer's page for this document.

__For this reason, javascript explorable blocks are a great place to put code examples.__

Substrate provides a way to demonstrate what the code actually does, beyond snippets, in a visual and interactive way.

Ending a javascript explorable block with html\`...\` will create a view, a rendering of this block on the page! This feature requires importing [snabby](https://www.skypack.dev/view/snabby).

[explain snabby, snabdom, more info]

## Import and export statements

You can import components from other explorable.md files and from js files.

```js
import banner      from './banner.explorable.md'
import * as math   from './math/math.js'
import html        from 'https://cdn.skypack.dev/snabby'
```

As that last line show, you can import from modern modules as well. Skypack is very handy to import npm modules without installing them.

### Where to?

When exploring a document, it makes no difference whether the import statements are placed inside a javascript block or a javascript explorable block. Imported components become available to all javascript code in the document, in both types of blocks.

**However, explorable blocks with a view (ending with \'html...\') can't contain import statements.** When that happens, an error is thrown and neither the view nor the imports work.

And remember: when a document is imported, rather than explored, import statements inside javascript explorable blocks are ignored. This is perfect if these components are only relevant to the document's visualization and not to its javascript output. Otherwise, though, the imports _have_ to be placed inside a javascript block instead. Accordingly, export statements will only serve their purpose if they're placed inside javascript blocks.

Bottom line:
* Import statements should either be inside regular blocks, or inside explorable blocks _containing no view_ if they're only relevant to the document's visualization.
* Export statements have to be inside regular blocks.

## Styling interactive views

You can import css from './some/css/file.css' that will get turned into a javascript module that just exports a string. in addition to that, the substrate viewer will run it through autoprefixr so it will add all the prefixed css attributes for various browser automatically

```js
import css         from './styles.css'
```

You may then use this css to style a javascript explorable block's view, like so:

```html
html`<div>
    <style>${css}</style>
    <h1 class="banner">HELLO SUBSTRATE</h1>
</div>`
```

## Caveats

* Because of a bug in hyperx (a dependency of snabby used for parsing javascript), elements in `html tags that can be self-closing (e.g. input) can't have a closing tag. svg elements don't work. Hopefully, that will get resolved soon. See [this issue](https://github.com/choojs/hyperx/issues/41).