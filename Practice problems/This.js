// ========== THIS ==========

const USER = {
  userName: "Krunal",
  userID: 11,

  loggedIn: function () {
    // this = Current Context
    console.log(`${this.userName}, Just logged In`);
    // Check Current Context Value
    console.log(this);
  },
};

USER.loggedIn(); // Krunal, Just logged In

// When we change the userName Context Change
USER.userName = "Hitesh";
USER.loggedIn(); // Hitesh, Just logged In

// Check Current Context Value
console.log(this);

// Run in Node = Empty Object
// Run in browser Console = Window Object

// this doesn't work in Function
