# nodeCB2promise
Small helper to wrap a node(-like) callback function into a ES6 promise

Sample:

```javascript
const wrapFn = require("nodecb2promise");

const fr = wrapFn(require('fs').readFile);

fr('package.json')
   .then(file => console.log(file.toString()))
```

This module exists primarly to avoid adding 3rth party resouces for a few calls where I just need a simple conversion from callbacks to promises.

## needs: node 6+


