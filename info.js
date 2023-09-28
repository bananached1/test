const info = [
  {
    "text": "The Great Wall of China is the longest wall in the world.",
    "tags": ["history", "architecture", "landmark", "China", "fortification", "tourism", "ancient", "world heritage", "defense", "civilization", "structure", "monument", "marvel", "longest", "Asian", "wonder", "engineering", "Dynasty", "Ming", "tourist attraction", "iconic", "spectacular", "massive", "stone", "impressive", "heritage", "boundary", "imposing", "structure", "empire", "China's pride", "majestic", "man-made", "UNESCO", "sightseeing"]
  },
  {
    "text": "The Nile River is the longest river in the world.",
    "tags": ["geography", "river", "Egypt", "Africa", "flow", "length", "civilization", "water source", "Blue Nile", "White Nile", "delta", "Cairo", "silt", "fertile", "life-giving", "African", "historical", "irrigation", "transportation", "navigation", "hydroelectric power", "tourism", "flora", "fauna", "cultural significance", "longest river", "Egyptian civilization", "navigable", "cradle of civilization", "valley", "tributaries", "Aswan Dam", "natural wonder"]
  },
  {
    "text": "Opened tab in new page",
    "tags": ["new", "new tab", "tab", "page", "give me a new tab", "new tab", "open a new tab"],
    "javascript": `
      // JavaScript code for opening a new tab in a browser
      const newTab = window.open("https://example.com", "_blank");
      if (newTab) {
        // Optionally, you can focus on the new tab
        newTab.focus();
      }
    `
  },
  // Add more entries as needed
];

module.exports = info;
