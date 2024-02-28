// Sample parks array
let parks = [
  {
    name: "Central Park",
    facilities: ["playground", "lake"],
    trees: [
      { species: "Maple", age: 10, health: "Excellent", height: 25 },
      // Add other trees as needed
    ],
  },
  {
    name: "Riverside Park",
    facilities: ["picnic area", "walking trails"],
    trees: [
      { species: "Oak", age: 15, health: "Good", height: 20 },
      // Add other trees as needed
    ],
  },
  // Add other parks as needed
];

// Change the name of "Riverside Park" to "Riverside Greenspace"
parks.find(park => park.name === "Riverside Park").name = "Riverside Greenspace";

// Change the name of the tree species "Maple" to "Sugar Maple" in "Central Park"
const centralPark = parks.find(park => park.name === "Central Park");
centralPark.trees.find(tree => tree.species === "Maple").species = "Sugar Maple";

// Add a new tree to "Central Park"
const newTree = { species: "Birch", age: 7, health: "Good", height: 18 };
centralPark.trees.push(newTree);

// Retrieve a list of all tree species in "Central Park"
const centralParkTrees = centralPark.trees.map(tree => tree.species);

// Calculate and store the average age of all trees in the parks array
const totalAge = parks.reduce((sum, park) => sum + park.trees.reduce((acc, tree) => acc + tree.age, 0), 0);
const totalTrees = parks.reduce((sum, park) => sum + park.trees.length, 0);
const averageTreeAge = totalAge / totalTrees;

// Determine the tallest tree among all trees in the parks array
const tallestTree = parks.reduce((maxHeightTree, park) => {
  const parkTallestTree = park.trees.reduce((currentMax, tree) => (tree.height > currentMax.height ? tree : currentMax), { height: 0 });
  return parkTallestTree.height > maxHeightTree.height ? parkTallestTree : maxHeightTree;
}, { height: 0 });

// Remove the "playground" from the facilities array in "Central Park"
const centralParkFacilities = centralPark.facilities.filter(facility => facility !== "playground");

// Convert the parks array to a JSON Object
const parksJSON = JSON.stringify(parks);

// Display the name and facilities of the first item in the parks array
console.log(`Name: ${parks[0].name}, Facilities: ${parks[0].facilities.join(', ')}`);
