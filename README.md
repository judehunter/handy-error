# Handy Error
A lightweight module that makes error **hand**ling in Node.js excruciatingly *easy*:boom:.

Throw your errors with a single one-liner!

Also handy for e.g. Express.js error handling.

## Usage
Require the module with:
```javascript
var Err = require('handy-error');     //in a single file
global.Err = require('handy-error');  //globally
// tip: Name it something short, like Err or E
```
Now You can use it like your usual Error class, but on drugs:
```javascript
throw Err(errCode, errMsg, {extraInfo, ...});
```
Use the extra argument to pass some **handy** info to your error handler

### Config
You can set defaults for error code, message and extras:
```javascript
var Err = require('handy-error').config('defCODE', 'defMSG', 'defExtras');
// The config is static across all files. (only needs to be done once)
// tip: you can omit any of the arguments by setting them to undefined,
//      or just leaving them if they're not followed by any other arguments.
```

## Examples
No more doing this:
```javascript
if(!fileExists){
  var error = new Error('File Not Found');
  error.code = 'ENOENT';
  throw error;
  // so much mess just for error handling, isn't it?
}
```

You can now get used to **this**:
```javascript
if (!fileExists) throw Err('ENOENT', 'Not Found', extraInfo);   //*Handy!*
```

Handy error **hand**ling in express:
```javascript
app.get('/api', (req, res, next) => {
  if (!req.query.apikey) next(Err(429, 'Too many requests', {timeout}));
});
```

### Accessing extras

You can write anything to the extra object - 3rd argument.
Then You simply read/write to it like that:
```javascript
var e = Err(416, 'Range Not Satisfiable', {acceptableRange: 400});
console.log(e.extra.acceptableRange) // 400

//It doesn't have to be an object!
var e = Err(408, 'Request timeout', 'Some more handy info');
console.log(e.extra) // Some more handy info
```


## Install
Run this command in your command line:
```pwsh
npm i handy-error --save
```


And that's **it**!
