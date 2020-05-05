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
    description:
      "An uplifting red wine from the Lehigh Valley. On the nose red-currant, molasses and wild sage, with hints of bramble and mint on the finish. ",
    photo: "brian",
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
    description:
      "From the land of ownunder comes a high acid wine for any occasion. Pair with hard cheeses and bocce ball on warm Spring afternoon.",
    photo: "jarrod",
    date: new Date(Date.now()),
  },
  {
    name: "Alex's Rosé",
    category: "Rose",
    varietal: "Gamay",
    origin: "Europe",
    country: "France",
    region: "Burgundy",
    price: 11.29,
    inventory: 144,
    description:
      "This is Alex's secret Rosé stash that he shares only on exceptional vintages. Get ready to be 'wowed' with this gem.",
    photo: "alex",
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
    description:
      "From multiple plots of Mencía vines with an average age of 40 years old, located in and around Ribeira Sacra. The un-oaked, regional tinto is all about immediate pleasure with pure, lush red fruits, spices, and slate-laden minerality.  A wine to pair with all kinds of foods, especially chorizos, embutidos, roast pork, spicy foods, any dish with a lot of Pimentón. ",
    photo: "guimaro",
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
    description:
      "Subliminal is a partnership between the Parientes (Nomadic Distribution) and the Porters (Amplify Wines).  Born out of a shared desire to capture a style of Cabernet Sauvignon almost forgotten in California- that of a humble table wine- Subliminal is a weeknight wine that speaks strongly of its origins.  Its dusty tannin and dried fruit recall 1970s California, while its bright, fresh, lifted character is a purely modern take on the grape.  From old vines in the Santa Ynez Valley planted over 40 years ago, aged completely in neutral oak, with no additions other than a minimum of sulfur dioxide, this is a new side of California Cabernet Sauvignon that will carry you from summer BBQs to winter braises.",
    photo: "subliminal",
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
    description:
      "Siete Red is created combining technology and innovation with the cultivating farms tradition of two generations, using environmentally friendly methods for producing the best wines. Vineyards are divided among several municipalities, Calahorra, Andosilla and San Adrian, all of them are in a place called “Mediterranean Rioja” with cold winters, mild and rainy springs and autumns, and hot and dry summers. The grounds have different textures, predominating limestone, sand, clay and gravel.",
    photo: "siete",
    date: new Date(Date.now()),
  },
  {
    name: "Enderle & Moll 'Müller'",
    category: "White",
    varietal: "Muller-Thurgau",
    origin: "Europe",
    country: "Germany",
    region: "Baden",
    price: 16.59,
    inventory: 144,
    description:
      "Müller has the rare distinction of being comprised of Müller Thurgau sourced from not only Baden but also from a respected grower in the Mosel as well – undoubtedly this accounts for the wine’s extra blast of energy and high-toned kick. The Baden fruit fermented for 3-4 days on the skins, the Mosel fruit for just one. After pressing, 30-40% of the grapes skins are added back into the tank and the wine sits on the lees for 8-9 months. Lightly filtered and contains only a tiny amount of sulfur, added at bottling",
    photo: "enderle",
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
    description:
      "The estate’s flagship bottle is a subtle, complex and profound wine. When young, it is dominated by red and even black fruit aromas, then as the years pass, cocoa and mild tobacco notes combine with hints of spice. Can be drunk young but is also a very good wine for laying down, recommended cellaring time: 10 years.",
    photo: "grolet",
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
    description:
      "Benoît's Syrah de Rosette pours a deep, opaque purple color. The nose is intense and complex, featuring aromas of blackberry, purple fruits, herbs and a salty sea-spray. On the palate, this Syrah is rich and full bodied with fine-grained tannins and a savory, salty mineral edge to balance the blueberry and blackberry fruit flavors. The finish is long and mineral driven and lifted by a moderate acidity. Enjoy with char-grilled beef, pork or chicken. ",
    photo: "benoit",
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
    description:
      "Quinta da Foz is located at the junction of the Douro River and its tributary, the Pinhão, in the Cima Corgo subregion. Here, in the center of the Douro Valley, steep terraces are cut into the schist riverbanks, where vine roots seek out the pockets of moisture in the foliated sheets of schist, bringing a great minerality to the final wine. As you pull into the iconic train station at Pinhão, you’ll notice the beautiful hand-painted blue tiles (azulejos) depicting the grape harvest. Quinta da Foz is just over the Pinhão River from the station. The Calém family acquired it in 1872, and today Filipe Ferreira is in charge of winemaking.",
    photo: "douro",
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
    description:
      "A rosé Champagne with more red-fruit than yeasty elements. Medium-intensity pink in color, this wine has a nose of red cherry, brioche, strawberry, orange-citrus peel and blossom. On the palate the dry, medium-bodied Champagne delivers medium-intensity flavors suggested on the nose supported by medium acidity and completing with a slightly-brioche-filled finish. The sparkling wine is mostly straightforward in flavor profile for a rosé Champagne refreshing.",
    photo: "piollot",
    date: new Date(Date.now()),
  },
  {
    name: "Domaine Nerantzi Koniaros PGI 'Serres'",
    category: "Red",
    varietal: "Koniaros",
    origin: "Europe",
    country: "Greece",
    region: "Macedonia",
    price: 69.19,
    inventory: 144,
    description:
      "Domaine Nerantzi is a new and exciting organic producer near the border of Macedonia and Thrace in northern Greece. Nerantzi Mitropoulos is an earnest, imposing and gregarious personality whose made it his life’s mission to uncover indigenous varieties lost to the world at large and bring them back to the fore. He believes in a kind of locavore approach to wine making, whether it be the use of long‐lost indigenous varieties, spontaneous yeast fermentation propagated via the native yeasts from their vineyards, or even the use of local, Balkan oak for their cooperage. Their main desire is to have their wines express what is unique to their region and share it with the world.",
    photo: "nerantzi",
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
    description:
      "The Mâcon Péronne is an elegant white wine of chardonnay. The grapes come from different small vineyards located on the village of Péronne. Made and aged on fine lees for 6 months to get a fresh and fruity. The nose develops fresh citrus and lime aromas with lightly salted iodine notes. The palate is well balanced with a nice acidity. It expresses all the character of a chardonnay with fresh aromas of white fruits, and citrus.",
    photo: "gandines",
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
    description:
      "This lovely, organically grown Malbec form Argentina will please both your palate, and your wallet.  It has plenty of dark fruit and spice without being cloying, or over the top.  Nicely balanced with a touch of acidity and thankfully lacking any hint of oak, this is a great everyday wine, and perfect for those Summer barbecues. Old-vine, organically-farmed fruit, made with low intervention: wild yeast fermentation, no acid adjustments, no new oak... Pure, straight-forward Malbec and Cabernet Sauvignon from Argentina that don’t taste like blueberry pie!",
    photo: "campo",
    date: new Date(Date.now()),
  },
  {
    name: "Escándalo Valle de Colchagua Carignan",
    category: "Red",
    varietal: "Carignan",
    origin: "South America",
    country: "Chile",
    region: "Colchagua Valley",
    price: 17.29,
    inventory: 144,
    description:
      "This wine comes from a rare plot of Carignan in the Colchagua Valley. Vines are 60 years old and grafted on top of an old parcel of Sémillon. Fruit is hand-harvested and allowed to ferment spontaneously with 5% whole clusters. The wine then ages mostly in concrete tank with a portion in stainless steel. ",
    photo: "escandalo",
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
    description:
      "The nose is of dried apricot and pear. Nectar with slate minerality on the second sip. Almost medicinal but not unpleasantly so. A real natural expression of the Tecate terroir",
    photo: "bichi",
    date: new Date(Date.now()),
  },
  {
    name: "Mirco Mariotti Fortana dell'Emilia Rosato 'Sèt e Mèz'",
    category: "Rosé",
    varietal: "Fortana",
    origin: "Europe",
    country: "Italy",
    region: "Emilia-Romagna",
    price: 19.99,
    inventory: 144,
    description:
      "This is made from a rare red called Fortana – a savoury wild thing with high acid and a black cherry or wild strawberry notes depending on vintage; it also has a bitter vermouth-like spice to it. I find it similar to the Lambrusco di Sorbara, with a less refined acidity but a more a savory complexity. Yes, please!",
    photo: "setemez",
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
    description:
      "At a glance: Traditional crunchy red-fruit Chianti from a certified organic producer. Villa Migliarina is from from the 1600’s, where you might want to stay on your next off-beat Tuscany trip. This is the B side of Chianti, straddling the Chianti Classico zone and the Colli Aretini, though officially in the Colli Aretini. Tremendous value. A 500 hectare hunting reserve, 28 hectares of vineyards, a 1600’s Villa, native yeasts ferments in cement: these are the ingredients for a traditional, crunchy red-fruit Chianti.",
    photo: "montozzi",
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
    description: "This is your perfect brunch Prosecco: simple enough for Bellinis, tasty and fresh enough to drink on its own. Made by artisans, but not priced that way.",
    photo: "serata",
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
