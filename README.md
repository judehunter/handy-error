# HandyError
Makes error **hand**ling in Node.js excruciatingly *easy*:boom:.

Throw your errors with a single one-liner!

Also handy for e.g. Express.js error handling.

## Usage
Require the module with:
```javascript
require('handy-error');
```
Now You can use it like your usual Error class, but on drugs:
```javascript
throw new Error(errCode, errMsg, {extraInfo, ...});
throw Error(errCode, errMsg, {extraInfo, ...})
```
Use the extra object to pass some **handy** info to your error handler

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
if (!fileExists) throw Error('ENOENT', 'Not Found', {requestPath});     //*Handy!*
```

Handy error **handl**ing in express:
```javascript
app.get('/api', (req, res, next) => {
  if (!req.query.apikey) next(Error(401, 'Unauthorized', {isXHR: req.xhr}));
});
```

### Accessing extras

You can write anything to the extra object - 3rd argument.
Then You simply read/write to it like that:
```javascript
var error = new Error('416', 'Range Not Satisfiable', {acceptableRange: 400});
console.log(error.extra.acceptableRange) // 400
```


## Install
Run this command in your command line:
```pwsh
npm i handy-error --save
```


And that's **it**!
