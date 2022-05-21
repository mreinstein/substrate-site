(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{432:function(t,e,n){t.exports=n.p+"assets/img/views-in-dependencies-1.02c1f85c.png"},433:function(t,e,n){t.exports=n.p+"assets/img/views-in-dependencies-3.8ed072a9.png"},450:function(t,e,n){"use strict";n.r(e);var s=n(65),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"views-in-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#views-in-dependencies"}},[t._v("#")]),t._v(" Views in dependencies")]),t._v(" "),s("p",[t._v("In the previous tutorial, we've added HTML views in a Substrate document that we treated as the entry point of our project. We assumed that that document would never get imported in another one as a depencency.")]),t._v(" "),s("p",[t._v("However, in can often be interesting to integrate HTML views in documents that are meant to be imported elsewhere. There are a few things, then, to take into consideration.")]),t._v(" "),s("p",[t._v("Let's enhance the project we've built in the previous tutorial, by adding a view to "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v(" to demonstrate its use.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If you're not coming from the "),s("a",{attrs:{href:"./interactive-views"}},[t._v("previous tutorial")]),t._v(", you can download that completed project "),s("a",{attrs:{href:"../examples/interactive-views.zip"}},[t._v("here")]),t._v(".\nAfter unzipping it, you'll need to run "),s("code",[t._v("npm install")]),t._v(" in the project's folder.")])]),t._v(" "),s("p",[t._v("In "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v(", add this "),s("strong",[t._v("explorable")]),t._v(" block with an HTML view:")]),t._v(" "),s("div",{staticClass:"language-js explorable extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("html"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('<canvas width="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("Renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n        height="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("Renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n        @hook:insert=')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("_insertHook"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\n        style="background: linear-gradient(45deg, rgb(86 160 255) 0%, rgb(21, 64, 139) 100%)">\n</canvas>')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),s("p",[t._v("And this "),s("strong",[t._v("JavaScript")]),t._v(" block:")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-js"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_insertHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gameLoop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gameLoop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elapsedMS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gameLoop in renderScene!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderScene")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elapsedMS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gameLoop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" html "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdn.skypack.dev/snabby'")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n")])])]),s("p",[t._v("We're basically reproducing the view from "),s("code",[t._v("index.explorable.md")]),t._v(", the way we've done it there.")]),t._v(" "),s("p",[t._v("At this point, take a look "),s("code",[t._v("index.explorable.md")]),t._v(" then "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v(" in the viewer. It should work as intended, with an animated view displayed in both documents.")]),t._v(" "),s("p",[s("img",{attrs:{src:n(432),alt:"An image"}})]),t._v(" "),s("p",[s("code",[t._v("'gameLoop in renderScene!'")]),t._v(" gets printed to the console only when viewing "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v(", which is what we want since the view in that document - and everything related to it - is only meant to demonstrate how to use "),s("code",[t._v("renderScene()")]),t._v(" and shouldn't have any impact outside of the document.")]),t._v(" "),s("p",[t._v("This working correctly, however, is more the result of luck than that of good practices.")]),t._v(" "),s("p",[t._v("Indeed, the only reason "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v("'s "),s("code",[t._v("gameLoop()")]),t._v(" gets called only when viewing that specific document is because the HTML view, being part of an "),s("strong",[t._v("explorable")]),t._v(" block, is only constructed when that condition is met. In turn, "),s("code",[t._v("_insertHook()")]),t._v(" is called once the canvas element is inserted in the DOM, scheduling the first call to "),s("code",[t._v("gameLoop()")]),t._v(". If the document isn't viewed, then no canvas element is inserted, then "),s("code",[t._v("gameLoop()")]),t._v(" never gets to be called.")]),t._v(" "),s("p",[t._v("Still, because they're inside a "),s("strong",[t._v("JavaScript")]),t._v(" block, "),s("code",[t._v("gameLoop()")]),t._v(" and "),s("code",[t._v("_insertHook()")]),t._v(" do get defined - uselessly so - when we're viewing "),s("code",[t._v("index.explorable.md")]),t._v(" which uses "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v(" as a dependency.")]),t._v(" "),s("h2",{attrs:{id:"break-it-some-more"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#break-it-some-more"}},[t._v("#")]),t._v(" Break it some more")]),t._v(" "),s("p",[t._v("Let's not fix this the proper way yet. Rather, let's try to enhance our example with some counter do display the number of elapsed seconds since the page loaded.")]),t._v(" "),s("p",[t._v("In "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v(", edit the HTML view definition like so:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("html"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('<div>\n    <canvas width="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("Renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n        height="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("Renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n        @hook:insert=')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("_insertHook"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\n        style="background: linear-gradient(45deg, rgb(86 160 255) 0%, rgb(21, 64, 139) 100%)">\n    </canvas>\n    <h3>Elapsed seconds: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("elapsedSeconds"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("</h3>\n</div>")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),s("p",[t._v("Then below "),s("code",[t._v("gameLoop()")]),t._v("'s definition, add this bit of code to define "),s("code",[t._v("elapsedSeconds")]),t._v(" and subsequently increment it, well, every second:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" elapsedSeconds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elapsedMS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    elapsedSeconds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// increment count")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// refresh the HTML view")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Note that, this time, we're scheduling things to happen outside of "),s("code",[t._v("_insertHook")]),t._v(".")]),t._v(" "),s("p",[t._v("Take a look at "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v(" in the viewer. Works nicely, right?")]),t._v(" "),s("p",[t._v("Now, view "),s("code",[t._v("index.explorable.md")]),t._v(" and open the console. "),s("code",[t._v("Uncaught ReferenceError: update is not defined")]),t._v(" gets printed there every second. Uh oh.")]),t._v(" "),s("p",[t._v("This tells us two things:")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("setInterval()")]),t._v(" and its callback gets called even though we're not currently viewing "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v(". This shouldn't be surprising, as "),s("code",[t._v("setInterval()")]),t._v(" is placed inside a "),s("strong",[t._v("JavaScript")]),t._v(" block.")]),t._v(" "),s("li",[s("code",[t._v("setInterval()")]),t._v("'s callback tries to call "),s("code",[t._v("update()")]),t._v(" and fails, because that function "),s("strong",[t._v("is only accessible in the scope of the currently viewed document")]),t._v(". Placing calls to "),s("code",[t._v("update()")]),t._v(" inside "),s("strong",[t._v("explorable")]),t._v(" blocks is a good way to ensure that it is called only when it "),s("em",[t._v("can")]),t._v(" be.")])]),t._v(" "),s("h2",{attrs:{id:"make-it-right"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-it-right"}},[t._v("#")]),t._v(" Make it right")]),t._v(" "),s("p",[t._v("Things seem desperate now (do they?), but it's just a matter of doing one simple edit. By now, you've problably guessed what it is.")]),t._v(" "),s("p",[t._v("Make the JavaScript block containing "),s("code",[t._v("_insertHook()")]),t._v(", "),s("code",[t._v("gameLoop()")]),t._v(" and "),s("code",[t._v("setInterval()")]),t._v(" an "),s("strong",[t._v("explorable")]),t._v(" block instead:")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("js explorable")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-js"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_insertHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gameLoop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gameLoop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elapsedMS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'renderScene gameloop!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderScene")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elapsedMS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gameLoop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" elapsedSeconds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elapsedMS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    elapsedSeconds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" html "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdn.skypack.dev/snabby'")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n")])])]),s("p",[t._v("Now the code in that block - everything related to our example - will execute only when we're viewing "),s("code",[t._v("lib/renderScene.explorable.md")]),t._v(". It makes sense, since it's only then that this code serves its purpose of making our HTML view alive. And that includes the import statement for "),s("code",[t._v("html")]),t._v(".")]),t._v(" "),s("p",[t._v("Note that, as mentionned previously, "),s("strong",[t._v("the HTML view itself should remain in its own explorable block")]),t._v(", otherwise functions and variables would get declared again every time the view is refreshed through "),s("code",[t._v("update()")]),t._v(". If we hadn't used update(), though, it would have been absolutely fine to throw everything in the same explorable block.")]),t._v(" "),s("p",[s("img",{attrs:{src:n(433),alt:"An image"}})]),t._v(" "),s("p",[t._v("An added benefit of placing example-related code in an explorable block is getting it out of the way in the viewer. The code that's displayed by default can then be reckognized easily as the code that matters to this document's output.")])])}),[],!1,null,null,null);e.default=a.exports}}]);