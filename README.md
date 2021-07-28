# Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

Install nodemon on devDependencies :

```text
npm i -D nodemon
```

Run app using :

```text
nodemon index.js
```

or, create a script in package.json at “script” section :

```javascript
...
"scripts": {
    "start": "nodemon index.js",
},
...
```

then, run app using :

```text
npm start
```
