// Assigning Values----------------------------------------------------------------

let a, b, c;

a = 10;
b = 20;
c = 30;
// clean way
let [a, b, c] = [10, 20, 30];

// Naming Variables----------------------------------------------------------------
let ca = 5;

let y = new Date().getFullYear();
let fs;

if (cart.total > 50) {
  fs = true;
}

// clean Way

let daysCartActive = 5;

let currentYear = new Date().getFullYear();

const isShippingFree = cart.total > 50;

// Dont Rely on Memory ----------------------------------------------------------------
const books = [
  "books 1",
  "books 2",
  "books 3",
  "books 4",
  "books 5",
  "books 6",
  "books 7",
  "books 8",
  "books 9",
  "books 10",
];

books.forEach((b) => {
  // do stuff with
  // ................
  // ......
  // what is `b` for?
  read(b);
});
// clean way
books.forEach((book) => {
  // do stuff with
  // ................
  // ......
  // what is `b` for?
  read(book);
});

// Unnecessary Context --------------------------------------------------------------------------------------------------------
const book = {
  bookId: 1,
  bookTitle: " Ämazing Title",
  bookPrice: 19.99,
  bookPages: 250,
};
// Clean Way
const book = {
  Id: 1,
  Title: " Ämazing Title",
  Price: 19.99,
  Pages: 250,
};
// Destructuring ----------------------------------------------------------------
const street = address.street;
const city = address.city;
const state = address.state;
const zipCode = address.zipCode;

// clean way
const { street, city, state, zipCode } = address;
