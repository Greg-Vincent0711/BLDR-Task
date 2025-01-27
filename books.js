const books = [
  {
    "id": 1,
    "Title": "A Brief History of Time",
    "Description": "Stephen Hawking's classic book on the nature of time and the universe.",
    "isAvailable": false,
    "Price": 15,
    "rentDuration": "5 days"
  },
  {
    "id": 2,
    "Title": "The Selfish Gene",
    "Description": "Richard Dawkins' exploration of evolution through a gene-centered view.",
    "isAvailable": true,
    "Price": 12,
    "rentDuration": ""
  },
  {
    "id": 3,
    "Title": "Cosmos",
    "Description": "Carl Sagan's journey through space, time, and the wonder of science.",
    "isAvailable": true,
    "Price": 18,
    "rentDuration": ""
  },
  {
    "id": 4,
    "Title": "The Elegant Universe",
    "Description": "Brian Greene explains string theory and the fabric of the cosmos.",
    "isAvailable": true,
    "Price": 20,
    "rentDuration": ""
  },
  {
    "id": 5,
    "Title": "Guns, Germs, and Steel",
    "Description": "Jared Diamond explores the factors that influenced human societies.",
    "isAvailable": true,
    "Price": 14,
    "rentDuration": ""
  },
  {
    "id": 6,
    "Title": "Sapiens: A Brief History of Humankind",
    "Description": "Yuval Noah Harari examines the history and impact of Homo sapiens.",
    "isAvailable": true,
    "Price": 16,
    "rentDuration": ""
  },
  {
    "id": 7,
    "Title": "The Immortal Life of Henrietta Lacks",
    "Description": "Rebecca Skloot tells the story of a woman whose cells revolutionized science.",
    "isAvailable": false,
    "Price": 10,
    "rentDuration": ""
  },
  {
    "id": 8,
    "Title": "The Structure of Scientific Revolutions",
    "Description": "Thomas Kuhn's influential work on paradigm shifts in science.",
    "isAvailable": true,
    "Price": 22,
    "rentDuration": ""
  },
  {
    "id": 9,
    "Title": "The Origin of Species",
    "Description": "Charles Darwin's groundbreaking work on evolution and natural selection.",
    "isAvailable": true,
    "Price": 12,
    "rentDuration": ""
  },
  {
    "id": 10,
    "Title": "Why We Sleep",
    "Description": "Matthew Walker explores the science and benefits of sleep.",
    "isAvailable": true,
    "Price": 15,
    "rentDuration": ""
  },
  {
    "id": 11,
    "Title": "Astrophysics for People in a Hurry",
    "Description": "Neil deGrasse Tyson's accessible guide to astrophysics.",
    "isAvailable": true,
    "Price": 10,
    "rentDuration": ""
  },
  {
    "id": 12,
    "Title": "Hidden Figures",
    "Description": "The untold story of Black women mathematicians at NASA.",
    "isAvailable": false,
    "Price": 18,
    "rentDuration": ""
  },
  {
    "id": 13,
    "Title": "The Demon-Haunted World",
    "Description": "Carl Sagan on the importance of scientific skepticism and critical thinking.",
    "isAvailable": true,
    "Price": 14,
    "rentDuration": ""
  },
  {
    "id": 14,
    "Title": "Thinking, Fast and Slow",
    "Description": "Daniel Kahneman examines the two systems of thought in decision-making.",
    "isAvailable": false,
    "Price": 17,
    "rentDuration": "1/25/25 - 1/26/25"
  },
  {
    "id": 15,
    "Title": "The Gene: An Intimate History",
    "Description": "Siddhartha Mukherjee's exploration of the history and science of genetics.",
    "isAvailable": true,
    "Price": 19,
    "rentDuration": " 01/27/25 - 01/29/25"
  },
  {
    "id": 16,
    "Title": "The Man Who Knew Infinity",
    "Description": "The story of mathematician Srinivasa Ramanujan.",
    "isAvailable": false,
    "Price": 12,
    "rentDuration": ""
  },
  {
    "id": 17,
    "Title": "The Double Helix",
    "Description": "James Watson's personal account of the discovery of DNA's structure.",
    "isAvailable": true,
    "Price": 11,
    "rentDuration": ""
  },
  {
    "id": 18,
    "Title": "The Sixth Extinction",
    "Description": "Elizabeth Kolbert on the impact of human activity on biodiversity.",
    "isAvailable": true,
    "Price": 13,
    "rentDuration": ""
  },
  {
    "id": 19,
    "Title": "Homo Deus: A Brief History of Tomorrow",
    "Description": "Yuval Noah Harari on the future of humanity and technology.",
    "isAvailable": false,
    "Price": 20,
    "rentDuration": ""
  },
  {
    "id": 20,
    "Title": "The Feynman Lectures on Physics",
    "Description": "Richard Feynman's renowned physics lectures in book form.",
    "isAvailable": true,
    "Price": 25,
    "rentDuration": ""
  },
  {
    "id": 21,
    "Title": "Dune",
    "Description": "Frank Herbert's epic science fiction novel about power, politics, and ecology on the desert planet Arrakis.",
    "isAvailable": true,
    "Price": 18,
    "rentDuration": ""
  },
  {
    "id": 22,
    "Title": "Star Wars: Thrawn",
    "Description": "Timothy Zahn's story about Grand Admiral Thrawn's rise in the Star Wars universe.",
    "isAvailable": true,
    "Price": 16,
    "rentDuration": ""
  },
  {
    "id": 23,
    "Title": "The Three-Body Problem",
    "Description": "Cixin Liu's science fiction novel exploring humanity's first contact with an alien civilization.",
    "isAvailable": true,
    "Price": 20,
    "rentDuration": ""
  },
  {
    "id": 24,
    "Title": "Dune Messiah",
    "Description": "The story of Paul Atreides as Padishah Emperor and those who conspire against him.",
    "isAvailable": true,
    "Price": 18,
    "rentDuration": ""
  },
  {
    "id": 25,
    "Title": "Children of Dune",
    "Description": "The children of Paul Atreides and Chani fight against treachery at the hands of their aunt and those who try to remove the Atreides from power.",
    "isAvailable": false,
    "Price": 13,
    "rentDuration": ""
  },
  {
    "id": 26,
    "Title": "God Emperor of Dune",
    "Description": "Really wierd worm stuff from Leto II.",
    "isAvailable": false,
    "Price": 13,
    "rentDuration": ""
  },
  {
    "id": 27,
    "Title": "Dune: ChapterHouse",
    "Description": "The Bene Gesserit do a lot of things.",
    "isAvailable": false,
    "Price": 5,
    "rentDuration": ""
  },
  {
    "id": 28,
    "Title": "Star Wars",
    "Description": "Star Wars.",
    "isAvailable": false,
    "Price": 50,
    "rentDuration": ""
  },
  {
    "id": 29,
    "Title": "Contact",
    "Description": "A sci-fi Novel by Carl Sagan",
    "isAvailable": false,
    "Price": 11.5,
    "rentDuration": ""
  }
];

module.exports = books;