# Integrating Substrate in your build process

A rollup plugin exists allowing to import explorable.md files and weave them into usable javascript modules.

here's how you might include substrate support in rollup.config.js, in a typical node/npm based build step:

```js
import commonjs  from '@rollup/plugin-commonjs'
import resolve   from '@rollup/plugin-node-resolve'
import substrate from 'rollup-plugin-substrate'


export default {
    input: 'app.js',
    output: {
        file: 'app-bundle.js'
    },
    plugins: [
        resolve(),
        commonjs(),
        substrate()
    ]
}
```

and then your app's entry point app.js:

```js
import foo from './foo.explorable.md'  // a substrate explorable which outputs an es module
import bar from './bar.js'             // a typical javascript module
```