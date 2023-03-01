console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(Number) {
    return function (plusNumber) {
    return plusNumber + Number
        };
}
const plus15 = plus(15);
console.log(plus15(10))

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(users => console.log(users.name));

//   function forEach(users) {
//     for (let i = 0; i < users.length; i++) 
//     return function () {
//       return (name);
//     };
//   }

//   const listNames = forEach()
  
//   console.log(listNames)

  

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

users.map(users => console.log (`User: ${users.name}, Score: ${users.score}`))

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const filterResult = users.filter(users => users.isActive == true);
console.log(filterResult)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
// const scoreSort = users.score(users => users.score);

// console.log(scoreSort)

users.sort((a, b) => b.score - a.score);
console.log(users)


// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n")

let sumScore = users.reduce((sum, users) => sum + users.score, 0);

function avgScore(number) {
        console.log((sumScore / 4))
    };
    avgScore()