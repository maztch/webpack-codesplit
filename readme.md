Webpack split code and inline
=============================

This is a sample code to show how to split code.

The problem
-----------

We have complex code and our javascipt file is too long. Also, not all code is needed everywhere.

We want to split code and reduce the filesize.

The base
--------

In this sample, there are two javascript files and a library.

The main javasscript uses the second one only when a button is clicked, and the second one uses a lodash module.

The plus
--------

And as a last, we want to inject the main (small) chunk inline in the html page, so we have first code loaded and don't wast time.

Take care of `webpack.config.js` comments as well the contents for `.babelrc`


Install
---

Execute console with 

	npm install

Related modules used are `babel-plugin-syntax-dynamic-import` for code split using dinamic imports and `html-webpack-inline-source-plugin` for inline code.

Run
---

Execute console with 

	npm run dev


Build
---

Execute console with 

	npm run build

Result can be found on dist folder.