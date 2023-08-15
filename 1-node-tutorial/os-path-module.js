const os = require("os");

// current user info
console.log(os.userInfo());

// return uptime of system
console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

const path = require('path')

console.log(path.sep)
console.log(path.join(__dirname,'/content','subfolder'))
console.log(__dirname)
