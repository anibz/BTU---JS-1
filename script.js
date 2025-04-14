// Task 1
const productCart = [
  {
    name: "nuttela",
    price: 20,
    quantity: 1,
  },

  {
    name: "cola",
    price: 4,
    quantity: 2,
  },

  {
    name: "ice-cream",
    price: 2,
    quantity: 4,
  },
];

let totalPrice = 0;

for (let i = 0; i < productCart.length; i++) {
  totalPrice = totalPrice + productCart[i].price * productCart[i].quantity;
}

if (totalPrice > 100) {
  console.log("გილოცავთ! თქვენ მიიღეთ უფასო მიტანის სერვისი!");
} else {
  console.log('მიტანის სერვისისთვის საჭიროა 100₾-ზე მეტი თანხა"');
}

// Task 2
const products = [
  {
    name: "cola",
    price: 3,
  },

  {
    name: "fanta",
    price: 2,
  },

  {
    name: "pepsi",
    price: 1,
  },
];

let maxPrice = 0;
let mostExpensive = "";

for (let i = 0; i < products.length; i++) {
  if (products[i].price > maxPrice) {
    maxPrice = products[i].price;
    mostExpensive = products[i].name;
  }
}

console.log(
  `ყველაზე ძვირადღირებული პროდუქტი: ${mostExpensive} ${maxPrice} ლარი`
);

// Task 3
const fruits = ["Apple", "Banana", "Kiwi"];
const joinFruits = fruits.join(", ");
console.log(joinFruits);

// Task 4
const numbers = [1, 2, 3, 4, 5, 6, 7];
const reverseNumbers = numbers.reverse();
alert(reverseNumbers);

// Task 5
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];

const numsConcated = nums1.concat(nums2);
console.log(numsConcated);

// Task 6
const colors = ["red", "yellow", "green"];
const addColor = colors.push("white");
console.log(colors);

// Task 7
const animals = ["dog", "cat", "dolphin"];
const removeAnimal = animals.pop();
console.log(animals);
