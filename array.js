const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'arju'};
const friends = [12,14, 11, 17, 54, 87];

console.log(typeof country);
// avabe onnogolo o check kora jabe
// tobe array ababe check kora jaina.niche array check korar niom dekano holo
console.log(Array.isArray(friends));
// array modde jinista ache kina check korte includes use kora jai--
console.log(friends.includes(19));

// avabeo check kora jai--

if(friends.indexOf(19) !== -1){

}
// concat:avabeo array er sate notun array kora jai
const newFriendsAge = [ 12,23,45,63];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);