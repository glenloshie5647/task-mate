/*
Filename: complexCode.js

This code is a complex implementation of a text-based adventure game. It involves multiple objects, arrays, functions, and uses various programming concepts to create a dynamic and interactive game world.

*/

// Game Objects
const player = {
  name: "John Doe",
  inventory: [],
  currentRoom: "start",
};

const rooms = {
  start: {
    name: "Start Room",
    description: "You wake up in a dark room. There is a door to the North and an old chest.",
    north: "corridor",
    objects: ["chest"],
  },
  corridor: {
    name: "Corridor",
    description: "You are in a long corridor. There are doors to the East and West.",
    east: "bedroom",
    west: "kitchen",
    objects: [],
  },
  bedroom: {
    name: "Bedroom",
    description: "You enter a dusty bedroom. There is a window overlooking a garden.",
    west: "corridor",
    objects: ["key"],
  },
  kitchen: {
    name: "Kitchen",
    description: "You find yourself in a messy kitchen. There is a table and a refrigerator.",
    east: "corridor",
    objects: ["apple", "knife"],
  },
};

const items = {
  chest: {
    name: "Chest",
    description: "An old rusty chest that seems to be locked.",
    interact: function () {
      // complex logic for interacting with the chest
    },
  },
  key: {
    name: "Key",
    description: "A small silver key.",
    interact: function () {
      // complex logic for interacting with the key
    },
  },
  apple: {
    name: "Apple",
    description: "A juicy red apple.",
    interact: function () {
      // complex logic for interacting with the apple
    },
  },
  knife: {
    name: "Knife",
    description: "A sharp kitchen knife.",
    interact: function () {
      // complex logic for interacting with the knife
    },
  },
};

// Helper Functions
function printDescription(description) {
  console.log(description);
}

function printAvailableCommands() {
  console.log("Available commands: go <direction>, interact <object>, inventory");
}

function printInventory() {
  console.log("Player Inventory:");
  console.log(player.inventory.join(", "));
}

// Game Logic
function startGame() {
  printDescription(rooms[player.currentRoom].description);
  printAvailableCommands();
}

function processCommand(command, argument) {
  if (command === "go") {
    const room = rooms[player.currentRoom];
    if (room[argument]) {
      player.currentRoom = room[argument];
      printDescription(rooms[player.currentRoom].description);
    } else {
      console.log("You cannot go that way!");
    }
  } else if (command === "interact") {
    const room = rooms[player.currentRoom];
    const object = items[room.objects.find((obj) => items[obj].name === argument)];
    if (object) {
      object.interact();
    } else {
      console.log("Nothing to interact with!");
    }
  } else if (command === "inventory") {
    printInventory();
  } else {
    console.log("Invalid command!");
    printAvailableCommands();
  }
}

// Game Start
startGame();

// Example gameplay
processCommand("go", "north");
processCommand("interact", "chest");
processCommand("go", "north");
processCommand("go", "west");
processCommand("interact", "apple");
processCommand("go", "east");
processCommand("interact", "key");
processCommand("inventory");
processCommand("go", "west");
processCommand("go", "east");
processCommand("go", "west");
processCommand("interact", "knife");
processCommand("inventory");
processCommand("go", "east");
processCommand("go", "west");
processCommand("go", "east");