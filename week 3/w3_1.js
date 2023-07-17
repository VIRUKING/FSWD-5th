const os = require('os');

const username = os.userInfo().username;
const homedir = os.homedir();
const platform = os.platform();

console.log('Username:', username);
console.log('Home Directory:', homedir);
console.log('Operating System Platform:', platform);
