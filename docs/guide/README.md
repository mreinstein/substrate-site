# Overview

Substrate is a literate programming tool for the javascript language.

[Literate programming]("https://en.wikipedia.org/wiki/Literate_programming") is a programming paradigm in which code is written to be understood by humans first, and computers second. Runnable code, while still present, takes a back seat in favor of its explanation written in a natural language such as english.

Following this, Substrate is used to obtain two representations from specially formatted markdown files: human-readable documentation and computer-readable javascript code.

### In practice

Substrate takes in substrate documents (explorable.md files), each of which is made of markdown text intersped with javascript code snippets.

For each of these files, it yields:

* __A visualization in the built-in viewer.__
_This visualization may contain html views, allowing for easy integration of interactive examples!_

* __Runnable javascript code__, ready to be imported and used in other files or projects. This code is extracted and runned behind the scenes, whenever an explorable.md file is viewed or imported.

## Features

### It's fast

Extremely simple to use: just run `substrate my-directory` to launch the viewer and visualize the files in this directory.

Substrate's viewer automatically takes care of bundling and live reloading. This allows for efficient work on multi-file projects. In many cases, this approach can replace a more complex project setup or get things started faster - with the added benefits of literate programming.

### It's flexible

explorable.md files can import components from other explorable.md files, from js files and from modern modules. Through [skypack]("https://www.skypack.dev/"), you can benefit from npm packages without installing them.

Thanks to a rollup plugin, explorable.md files can be imported and used in non-substrate javascript projects. You could write an entire javascript library as explorable.md files and use it for real world applications.

This interoperability, favored by a 1:1 mapping between any substrate document and a produced js file, makes incremental use of Substrate a breeze. You may use it for an entire project, or just parts of it.

### It's powerful

While young, Substrate is already used in production. Its simplicity makes it adaptable to a wide variety of contexts.

Particularly good use cases for Substrate are collaborative projects and teaching. And because it works right now and is easy to integrate in existing projects, it has tremendous potential to make javascript code at large easier to grasp, explain and improve.

## What sets it apart

The internet is jam-packed with various attempts at implementing Donald Knuth's vision of literate programming.

While there are many interesting projects, they tend to be hard to use in real, non-toy code.

Substrate is designed to be usable today, in production code, without much pain. This is achieved through practical tradeoffs:

* only works with javascript currently (no multi language support)

* there is a 1:1 mapping between a substrate document and a produced javascript file

* there is no runtime environment; a substrate document is a pretty simple transformation into a javascript file