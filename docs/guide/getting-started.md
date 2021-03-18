# Getting started

## Installation

Substrate is distributed as a npm module.

Since it's a system wide tool, you'll likely want to install it as a global module.

with [npm](https://www.npmjs.com/get-npm) installed, run: `npm install -g substrate`

This will make a command line utility available. And you're set!

## Usage

The `substrate` command-line utility serves one, amazing purpose: viewing a neat human readable representation of substrate documents (their _weaved_ output, to use literate programming terminology.) In the background, it takes care of resolving imports / exports between files. The end result is a visualization of each document which, while being pleasant to read, _also_ runs javascript code from itself and its dependencies.
            
Simply invoke substrate like so:

```sh
substrate my-folder
```

Where `my-folder` is a directory containing .explorable.md files you'd like to view.

This will recursively traverse the given directory (or the current working directory if one isn't specified,) look for all files that end with explorable.md, and start a local webserver. While this is running you can open http://localhost:5000 in your browser and see all of the available explorables to browse. Clicking one will explore it in the viewer. The command line will not exit, continuing to watch the input directory for added / removed / edited explorable files and make them available.

## Examples

You may try it right now. The example folder in substrate's github repository contains a couple great examples. Download it locally, and pass it to `substrate` as explained above.

[fool-proof instructions on how to download/clone the repo]

