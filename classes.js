const classes = [
  {
    name: "General",
    tags: [],
    introPhrases: ["", "", "Of course, "],
    outroPhrases: ["", "It was nice talking to you.", "Have a great day!"],
    customReplacements: {
      "happy": ["joyful", "cheerful", "content"],
      "sad": ["unhappy", "mournful", "downhearted"],
    },
    relevance: 0,
    maxRelevance: 5,
  },
  {
    name: "Greeting",
    tags: ["hi", "hey"],
    introPhrases: ["", "", ""],
    outroPhrases: ["", "It was nice talking to you.", "Have a great day!"],
    customReplacements: {
      "hello": ["hi", "hello", "good day"],
      "goodbye": ["bye", "see you later", "farewell"],
    },
    relevance: 0,
    maxRelevance: 5,
  },
  {
    name: "bye",
    tags: ["bye", "farewell", "see you later", "cya"],
    introPhrases: ["", "", ""],
    outroPhrases: ["", "Goodbye!", "Take care!"],
    customReplacements: {
      "bye": ["bye", "see you later", "farewell", "goodbye"],
    },
    relevance: 0,
    maxRelevance: 5,
  },
];

module.exports = classes;
