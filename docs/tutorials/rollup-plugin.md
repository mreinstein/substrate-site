# Integrating Substrate to your existing build with rollup

This tutorial will guide you through setting up a project with npm, rollup, and a rollup plugin for resolving imports from Substrate documents. In other words, how to use Substrate documents in projects outside of the Substrate viewer.

Rollup is a module bundler. It's quite useful for combining multiple code chunks into one compact, distributable file, while resolving imports and exports.

## Setup a project

Create a new folder for this project.

In this folder, run `npm init` to initialize a project. When prompted for the entry point, enter `app.js`.

Install rollup and the rollup plugin for substrate by running these commands one by one:

```shell
npm install rollup --save-dev
npm install rollup-plugin-substrate --save-dev
```

Then create a configuration file for rollup: `rollup.config.mjs`
Make sure to use `.mjs` for the extension rather than `.js`, otherwise rollup will throw an error when using the substrate plugin.

Fill it with the following content:

```js
import substrate    from 'rollup-plugin-substrate'

export default {
    input: 'app.js',
    output: {
        file: 'app-bundle.js'
    },
    plugins: [
        substrate()
    ]
}
```

This basically instructs rollup to use `app.js` as our entry point, and package everything imported from there into `app-bundle.js`. We're also preparing rollup to use the substrate plugin.

## Add code files

In the project's folder, create `app.js`:

```js
import foo from './foo.explorable.md'  // a substrate explorable which outputs an es module
import bar from './bar.js'             // a typical javascript module

console.log(bar(foo.name))
```

Then `foo.explorable.md`:
~~~md
#Foo

It's got some incredible properties.

```js
const foo = {
    name: 'Foo',
    amazing: true,
    great: true,
    equilateral: false
}
```
##Export

```js
export default foo
```
~~~

and `bar.js`:
```js
export default function bar(name){
    return `${name} goes to a bar. Oops they pass below it. I guess they set the bar too high!`
}
```

Finally, create `index.html` and have it use `app-bundle.js` as a script:

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="app-bundle.js"></script>
</body>
</html>
```


## Build

Now let's actually cook `app.js` and its dependencies into `app-bundle.js`.

In `package.json`, remove the placeholder "test" script and instead add one for unleashing rollup's magic:

```json
"scripts": {
    "watch": "rollup -c rollup.config.mjs --watch.chokidar"
},
```

`"rollup -c rollup.confic.mjs"` would have been sufficient for building `app-bundle.js` on demand. However, adding `--watch.chokidar` will make rollup also watch for changes in `app.js` and its dependencies, and rebuild `app-bundle.js` immediately after.

Run the script in the terminal:
```shell
npm run watch
```

`app-bundle.js` should have been created.

Open `index.html`, and enjoy an hilarious story logged to the console.



