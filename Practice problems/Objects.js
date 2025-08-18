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
