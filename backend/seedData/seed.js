const mongoose = require("mongoose");
const Menu = require("../model/pizzaMenu.model");
const Ingredient = require("../model/pizzaIngredient.model");

const pizzaMenu = [
  {
    id: "0001",
    type: "veg",
    price: "290",
    name: "paneer tikka",
    image:
      "https://image.shutterstock.com/image-photo/delicious-italian-pizza-over-white-600w-127528958.jpg",
    description:
      "This is popular italian pizza flavoured with marinated tikka sauce and paneer",
    ingredients: [
      {
        id: "1",
        iname: "dough/flour",
      },
      {
        id: "4",
        iname: "pizza saucce",
      },
      {
        id: "5",
        iname: "pizza sauce seasoning",
      },
      {
        id: "6",
        iname: "cheese",
      },
    ],
    topping: [
      {
        id: "111",
        tname: "Paneer",
        price: "45",
      },
      {
        id: "112",
        tname: "Fried Onion",
        price: "18",
      },
      {
        id: "106",
        tname: "Green olive",
        price: "50",
      },
      {
        id: "113",
        tname: "Capsicum",
        price: "15",
      },
      {
        id: "110",
        tname: "Red peprika",
        price: "30",
      },
    ],
  },
  {
    id: "0002",
    type: "nonveg",
    price: "350",
    name: "chiken italiaon",
    image: "https://image.shutterstock.com/image-photo/pizza-600w-53553874.jpg",
    description:
      "This is popular italian pizza flavoured with light sugary taste and creamy touch",
    ingredients: [
      {
        id: "2",
        iname: "deep dish pizza mix",
      },
      {
        id: "4",
        iname: "pizza saucce",
      },
      {
        id: "5",
        iname: "pizza sauce seasoning",
      },
      {
        id: "6",
        iname: "cheese",
      },
      {
        id: "8",
        iname: "sugar and cinnomon blend",
      },
      {
        id: "9",
        iname: "plain butter",
      },
    ],
    topping: [
      {
        id: "101",
        tname: "Pepperoni",
        price: 110,
      },
      {
        id: "103",
        tname: "Chicken Sausage",
        price: "90",
      },
      {
        id: "102",
        tname: "Mushroom",
        price: "35",
      },
      {
        id: "113",
        tname: "Capsicum",
        price: "15",
      },
      {
        id: "104",
        tname: "Black beans",
        price: "45",
      },
    ],
  },
  {
    id: "0003",
    type: "veg",
    price: "310",
    name: "veggie supreme",
    image:
      "https://image.shutterstock.com/image-photo/hot-pizza-pepperoni-sausage-on-600w-770556520.jpg",
    description:
      "This is popular italian pizza flavoured with crushed garlic, with multiple herbs topped up with sweet corn",
    ingredients: [
      {
        id: "2",
        iname: "deep dish pizza mix",
      },
      {
        id: "4",
        iname: "pizza saucce",
      },
      {
        id: "5",
        iname: "pizza sauce seasoning",
      },
      {
        id: "6",
        iname: "cheese",
      },
      {
        id: "7",
        iname: "garlic herbs",
      },
      {
        id: "10",
        iname: "flavored butter",
      },
    ],
    topping: [
      {
        id: "112",
        tname: "Fried Onion",
        price: "18",
      },
      {
        id: "114",
        tname: "Sweet corn",
        price: "38",
      },
      {
        id: "102",
        tname: "Mushroom",
        price: "35",
      },
      {
        id: "113",
        tname: "Capsicum",
        price: "15",
      },
      {
        id: 105,
        tname: "Black olive ",
        price: "50",
      },
    ],
  },
  {
    id: "0004",
    type: "nonveg",
    price: "400",
    name: "Tripple chicken feast",
    image:
      "https://image.shutterstock.com/image-photo/mixture-pizza-italian-food-600w-332497832.jpg",
    description:
      "This is popular italian pizza flavoured with unique greek dressing topped up with keema and meat ball",
    ingredients: [
      {
        id: "3",
        iname: "low carb pizza dough",
      },
      {
        id: "4",
        iname: "pizza saucce",
      },
      {
        id: "5",
        iname: "pizza sauce seasoning",
      },
      {
        id: "6",
        iname: "cheese",
      },
      {
        id: "13",
        iname: "greek dressing",
      },
      {
        id: "11",
        iname: "cajun",
      },
    ],
    topping: [
      {
        id: "115",
        tname: "Chicken keema",
        price: "99",
      },
      {
        id: "112",
        tname: "Fried Onion",
        price: "18",
      },
      {
        id: "116",
        tname: "Chicken Meat ball",
        price: "105",
      },
      {
        id: "113",
        tname: "Capsicum",
        price: "15",
      },
      {
        id: "114",
        tname: "Sweet corn",
        price: "38",
      },
    ],
  },
  {
    id: "0005",
    type: "nonveg",
    price: "625",
    name: "Ultimate chicken",
    image:
      "https://www.shutterstock.com/image-photo/pizza-margherita-italian-246331354?src=LdqMHwukPR6yE1l-dL7uMQ-1-11%22",
    description:
      "This is popular italian pizza flavoured with BBA sauce, flavored butter. it has spongy base which gives unique taste with multiple toppings",
    ingredients: [
      {
        id: "2",
        iname: "deep dish pizza mix",
      },
      {
        id: "4",
        iname: "pizza saucce",
      },
      {
        id: "5",
        iname: "pizza sauce seasoning",
      },
      {
        id: "6",
        iname: "cheese",
      },
      {
        id: "12",
        iname: "BBQ sauce",
      },
      {
        id: "11",
        iname: "cajun",
      },
      {
        id: "10",
        iname: "flavored butter",
      },
    ],
    topping: [
      {
        id: "101",
        tname: "Pepperoni",
        price: 110,
      },
      {
        id: "112",
        tname: "Fried Onion",
        price: "18",
      },
      {
        id: "116",
        tname: "Chicken Meat ball",
        price: "105",
      },
      {
        id: "103",
        tname: "Chicken Sausage",
        price: "90",
      },
      {
        id: "115",
        tname: "Chicken keema",
        price: "99",
      },
    ],
  },
];

const ingredientsData = [
  {
    id: 101,
    tname: "Pepperoni",
    price: 110,
    image:
      "https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg",
  },
  {
    id: 102,
    tname: "Mushroom",
    price: 35,
    image:
      "https://thumb9.shutterstock.com/display_pic_with_logo/1207547/568114672/stock-photo-fresh-cultivated-button-mushrooms-and-twigs-of-parsley-in-the-wooden-basket-one-whole-mushroom-and-568114672.jpg",
  },
  {
    id: 103,
    tname: "Black beans",
    price: 45,
    image:
      "https://thumb1.shutterstock.com/display_pic_with_logo/180783430/755093356/stock-photo-black-beans-grain-on-white-background-755093356.jpg",
  },
  {
    id: 104,
    tname: "Black olive",
    price: 50,
    image:
      "https://www.shutterstock.com/shutterstock/photos/2467340127/display_1500/stock-photo-marinated-black-olive-slices-isolated-on-white-background-top-view-set-of-black-olive-slices-on-a-2467340127.jpg",
  },
  {
    id: 105,
    tname: "Green olive",
    price: 50,
    image:
      "https://thumb7.shutterstock.com/display_pic_with_logo/4526794/639321544/stock-photo-stuffed-olives-isolated-on-white-background-639321544.jpg",
  },
  {
    id: 106,
    tname: "Jalapeno",
    price: 45,
    image:
      "https://thumb7.shutterstock.com/display_pic_with_logo/999701/250939984/stock-photo-sliced-green-jalapeno-peppers-on-white-background-250939984.jpg",
  },
  {
    id: 107,
    tname: "Chicken",
    price: 60,
    image:
      "https://thumb7.shutterstock.com/display_pic_with_logo/371512/583587001/stock-photo-fresh-raw-chicken-isolated-on-white-583587001.jpg",
  },
  {
    id: 108,
    tname: "Tomato",
    price: 20,
    image:
      "https://thumb1.shutterstock.com/display_pic_with_logo/721492/400195690/stock-photo-tomatoes-isolated-on-white-background-400195690.jpg",
  },
  {
    id: 119,
    tname: "Red peprika",
    price: 30,
    image:
      "https://thumb9.shutterstock.com/display_pic_with_logo/676765/343609895/stock-photo-chili-pepper-isolated-on-a-white-background-343609895.jpg",
  },
  {
    id: 110,
    tname: "Paneer",
    price: 45,
    image:
      "https://thumb7.shutterstock.com/display_pic_with_logo/605002/195341264/stock-photo-piece-of-cheese-or-paneer-isolated-on-a-white-background-195341264.jpg",
  },
  {
    id: 111,
    tname: "Fried Onion",
    price: 18,
    image:
      "https://thumb1.shutterstock.com/display_pic_with_logo/152950/630261116/stock-photo-delicious-crispy-fried-onion-rings-isolated-on-white-630261116.jpg",
  },
  {
    id: 112,
    tname: "Capsicum",
    price: 15,
    image:
      "https://thumb7.shutterstock.com/display_pic_with_logo/259963/259963,1235208469,1/stock-photo-vegetables-bulgarian-pepper-on-a-white-background-isolated-25335661.jpg",
  },
  {
    id: 114,
    tname: "Sweet corn",
    price: 38,
    image:
      "https://thumb7.shutterstock.com/display_pic_with_logo/3102608/706329457/stock-photo-sweet-corn-in-wooden-bowl-and-spoon-isolated-on-white-background-706329457.jpg",
  },
];

const SeedDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    await Menu.insertMany(pizzaMenu);

    await Ingredient.insertMany(ingredientsData);
    console.log("Database seeded successfully!!");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

SeedDB();
