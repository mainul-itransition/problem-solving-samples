// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const persons = [
  {
    name: "yamin",
    age: 20,
    gender: "male",
  },
  {
    name: "amin",
    age: 10,
    gender: "female",
  },
  {
    name: "amina",
    age: 20,
    gender: "female",
  },
];

const filteredNames = persons
  .filter((person) => person.gender !== "female")
  .map((person) => person.name);

console.log(filteredNames);

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  {
    title: "The Hobbits",
    author: "JRR Tolkein",
    year: 1986,
  },
  {
    title: "The Monk Who Sold his Ferrari",
    author: "Robin Shawrma",
    year: 2010,
  },
  {
    title: "Mindset",
    author: "JJ Lal Pedua",
    year: 2015,
  },
];

const bookNames = books.map((book) => book.title);

console.log(bookNames);

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

function squareNumber(num) {
  return num * num;
}

function doubleNumber(num) {
  return num * 2;
}

function addFiveToNumber(num) {
  return num + 5;
}

function compose(num) {
  return addFiveToNumber(doubleNumber(squareNumber(num)));
}

console.log(compose(4));

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  {
    make: "Toyota",
    model: "2004",
    year: 1986,
  },
  {
    make: "Mitsubishi",
    model: "1996",
    year: 2010,
  },
  {
    make: "Tata",
    model: "Tata Nano",
    year: 2015,
  },
];

sortedCarsInAscendingOrder = cars.sort((a, b) => a - b);

console.log(sortedCarsInAscendingOrder);

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const people = [
  {
    name: "yamin",
    age: 20,
    gender: "male",
  },
  {
    name: "Femin",
    age: 10,
    gender: "female",
  },
  {
    name: "amina",
    age: 20,
    gender: "female",
  },
];

function findPersonByName(arrr, name, newAge) {
  const findPerson = people
    .filter((person) => person.name === name)
    .map((person) => (person.age = newAge));
  return findPerson;
}

console.log(findPersonByName(people, "Femin", 35));
