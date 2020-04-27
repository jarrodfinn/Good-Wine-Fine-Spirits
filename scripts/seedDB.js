const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the wines below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/winelist", {useNewUrlParser: true}
);

const itemSeed = [
  {
    name: "Brian's Red",
    category: "Red",
    varietal: "Pinot Noir",
    origin: "North America",
    country: "USA",
    region: "Pennslyvania",
    price: 10.89,
    inventory: 144,
    description: "This shit red",
    date: new Date(Date.now()),
  },
  {
    name: "Jarrod's White",
    category: "White",
    varietal: "Riesling",
    origin: "Oceania",
    country: "Australia",
    region: "McLaren Vale",
    price: 14.49,
    inventory: 144,
    description: "This shit white",
    date: new Date(Date.now()),
  },
  {
    name: "Alex's Rose",
    category: "Rose",
    varietal: "Gamay",
    origin: "Europe",
    country: "France",
    region: "Burgundy",
    price: 11.29,
    inventory: 144,
    description: "This shit pink",
    date: new Date(Date.now()),
  },
  {
    name: "Guimaro Riberia Sacra Tinto",
    category: "Red",
    varietal: "Mencia",
    origin: "Europe",
    country: "Spain",
    region: "Galicia",
    price: 18.49,
    inventory: 144,
    description: "Funky",
    date: new Date(Date.now()),
  },
  {
    name: "Subliminal Santa Barbara Cabernet Sauvignon",
    category: "Red",
    varietal: "Cabernet Sauvignon",
    origin: "North America",
    country: "USA",
    region: "California",
    price: 22.39,
    inventory: 144,
    description: "Dank",
    date: new Date(Date.now()),
  },
  {
    name: "Siete Rioja Joven",
    category: "Red",
    varietal: "Grenache",
    origin: "Europe",
    country: "Spain",
    region: "Rioja",
    price: 11.59,
    inventory: 144,
    description: "Ole",
    date: new Date(Date.now()),
  },
  {
    name: "Enderle & Moll Pinot Noir",
    category: "Red",
    varietal: "Pinot Noir",
    origin: "Europe",
    country: "Germany",
    region: "Baden",
    price: 16.59,
    inventory: 144,
    description: "rot is gut",
    date: new Date(Date.now()),
  },
  {
    name: "Château La Grolet",
    category: "Red",
    varietal: "Merlot",
    origin: "Europe",
    country: "France",
    region: "Bordeaux",
    price: 17.49,
    inventory: 144,
    description: "Classic",
    date: new Date(Date.now()),
  },
  {
    name: "Benoît Roseau Syrah de Rosette",
    category: "Red",
    varietal: "Syrah",
    origin: "Europe",
    country: "France",
    region: "Rhone",
    price: 17.29,
    inventory: 144,
    description: "Iconic",
    date: new Date(Date.now()),
  },
  {
    name: "Mary Taylor (Filipe Ferreira) Douro Tinto",
    category: "Red",
    varietal: "Tinta Roriz",
    origin: "Europe",
    country: "Portugal",
    region: "Douro",
    price: 14.09,
    inventory: 144,
    description: "Steep grade",
    date: new Date(Date.now()),
  },
  {
    name: "Piollot Champagne Les Protelles Rosé Extra Brut",
    category: "Sparkling",
    varietal: "Pinot Noir",
    origin: "Europe",
    country: "France",
    region: "Champagne",
    price: 58.99,
    inventory: 144,
    description: "Bubbly",
    date: new Date(Date.now()),
  },
  {
    name: "Domaine Nerantzi Koniaros PGI Serres",
    category: "Red",
    varietal: "Koniaros",
    origin: "Europe",
    country: "Greece",
    region: "Macedonia",
    price: 69.19,
    inventory: 144,
    description: "What is this?",
    date: new Date(Date.now()),
  },
  {
    name: "Domaine des Gandines Mâcon-Péronne",
    category: "White",
    varietal: "Chardonnay",
    origin: "Europe",
    country: "France",
    region: "Burgundy",
    price: 16.39,
    inventory: 144,
    description: "Dangerous",
    date: new Date(Date.now()),
  },
  {
    name: "Campo Mendoza Malbec",
    category: "Red",
    varietal: "Malbec",
    origin: "South America",
    country: "Argentina",
    region: "Mendoza",
    price: 10.99,
    inventory: 144,
    description: "Whatever",
    date: new Date(Date.now()),
  },
  {
    name: "Escándalo Valle de Colchagua Sémillon",
    category: "White",
    varietal: "Semillon",
    origin: "South America",
    country: "Chile",
    region: "Colchagua Valley",
    price: 17.29,
    inventory: 144,
    description: "Clandestine",
    date: new Date(Date.now()),
  },
  {
    name: "Bichi Tecate La Gorda Yori (Skin contact)",
    category: "Orange",
    varietal: "Palomino",
    origin: "North America",
    country: "Mexico",
    region: "Baja California",
    price: 26.09,
    inventory: 144,
    description: "For real?",
    date: new Date(Date.now()),
  },
  {
    name: "Borgo Paglianetto Verdicchio di Matelica Ergon",
    category: "White",
    varietal: "Verdicchio",
    origin: "Europe",
    country: "Italy",
    region: "Marche",
    price: 19.99,
    inventory: 144,
    description: "Yes, please!",
    date: new Date(Date.now()),
  },
  {
    name: "Migliarina Montozzi Chianti Superiore",
    category: "Red",
    varietal: "Sangiovese",
    origin: "Europe",
    country: "Italy",
    region: "Tuscany",
    price: 17.29,
    inventory: 144,
    description: "Take home to mother",
    date: new Date(Date.now()),
  },
  {
    name: "Serata Prosecco",
    category: "Sparkling",
    varietal: "Glera",
    origin: "Europe",
    country: "Italy",
    region: "Veneto",
    price: 17.29,
    inventory: 144,
    description: "Good morning",
    date: new Date(Date.now()),
  },
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
