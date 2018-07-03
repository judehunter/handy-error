# HandyError
Makes error **hand**ling in Node.js excruciatingly *easy*:boom:.

Throw your errors with a single one-liner!

Also handy for e.g. Express.js error handling.

## Usage
Require the module with:
```javascript
const Err = require('handy-error');
```
You only need to do that in your base file!

Use it in either way, whichever suits **You**:
```javascript
throw new Err(errCode, errMsg);
throw Err(errCode, errMsg)
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
if (!fileExists) throw Err('ENOENT', 'Not Found');     //*Handy!*
```

Handy error **handl**ing in express:
```javascript
app.get('/api', (req, res, next) => {
  if (!req.query.apikey) next(Err(401, 'Unauthorized'));
});
```


## Install
Run this command in your command line:
```pwsh
npm i handy-error --save
```


And that's **it**!
