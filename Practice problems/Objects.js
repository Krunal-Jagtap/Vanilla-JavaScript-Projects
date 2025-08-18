// Object -
// Key Value Pairs

const userProfile = {
  userName: "Krunal",
  userID: 11,
  isVerified: true,
  currentlyLearning: "JavaScript",
  userSkills: ["Html", "CSS", "Git", "GitHub"],
};

console.log(userProfile);
/*
{
  userName: 'Krunal',
  userID: 11,
  isVerified: true,
  currentlyLearning: 'JavaScript',
  userSkills: [ 'Html', 'CSS', 'Git', 'GitHub' ]
}
*/

console.log(typeof userProfile); // object

// Access -
console.log(userProfile.isVerified); // true

console.log(userProfile["userID"]); // 11

console.log(
  `${userProfile.userName} is Currently learning ${userProfile.currentlyLearning} 🪜` // Krunal is Currently learning JavaScript 🪜
);

// Nested Object

const tvRemote = {
  Brand: "LG",
  havVoiceAssist: true,
  power: {
    turnOn: "Turning ON",
    turnOff: "Turning OFF",
  },
  volume: {
    increase: "Press ➕",
    decrees: "Press ➖",
  },
};

// Access Nested Objects

console.log(tvRemote.power.turnOn); // Turning ON

console.log(tvRemote.volume.decrees); // Press ➖

// Destructuring Objects

let { increase, decrees } = tvRemote.volume;
// Now we can use increase and decrees as a variables

// Now We don't have to write
// tvRemote.volume.increase
// tvRemote.volume.decrease  every time, directly used Destructure Variables
console.log(increase);
console.log(decrees);
