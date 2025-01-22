import HashMap from "./index.js";

const test = new HashMap(0.75);

//All aditional values and checks were generated with the help of AI from my query

// Insert initial key-value pairs
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// Update existing keys
test.set("apple", "green");
test.set("banana", "crimson");

// Check buckets length before adding more
console.log("Initial buckets length:", test.buckets.length);

// Insert more key-value pairs to trigger a grow
test.set("moon", "silver");
test.set("star", "white");
test.set("sun", "yellow");
test.set("cloud", "gray");
test.set("rain", "blue");
test.set("snow", "white");
test.set("wind", "clear");
test.set("earth", "brown");
test.set("ocean", "blue");
test.set("river", "green");
test.set("mountain", "gray");
test.set("forest", "green");

// Check buckets length after growth
console.log("Buckets length after first grow:", test.buckets.length);

// Add more to trigger a second growth (beyond 24 items)
test.set("desert", "yellow");
test.set("cave", "dark");
test.set("volcano", "red");
test.set("valley", "green");
test.set("hill", "brown");
test.set("lake", "blue");
test.set("island", "green");
test.set("reef", "coral");
test.set("field", "yellow");
test.set("garden", "colorful");
test.set("meadow", "green");
test.set("plain", "flat");

//check for key not present in the map
test.get("nothing");

// Check final buckets length
console.log("Buckets length after second grow:", test.buckets.length);

// Output final size
console.log("Final size of hash map:", test.length());
