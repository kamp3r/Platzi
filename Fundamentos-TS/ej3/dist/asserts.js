"use strict";
let username;
username = 'Perraxo';
let message = username.length > 5 ? `Welcome ${username}` : `Username must be at least 5 characters long`;
let usernameWithId = 'Ponchapelo 1';
username = usernameWithId.substring(0, 10);
console.log('username Only', username);
message = username.length > 5 ? `Welcome ${username}` : `Username must be at least 5 characters long`;
console.log('message', message);
