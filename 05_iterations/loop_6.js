const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item  // forEach always return undefined whether you add return or not
})
console.log(values);



// ----------------- filter --------------------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })


const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);



const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 2001,
    edition: 2005
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 2003,
    edition: 2008
  },
  {
    title: "Book Three",
    genre: "Science",
    publish: 2005,
    edition: 2010
  },
  {
    title: "Book Four",
    genre: "History",
    publish: 2007,
    edition: 2012
  },
  {
    title: "Book Five",
    genre: "Fantasy",
    publish: 2009,
    edition: 2014
  },
  {
    title: "Book Six",
    genre: "Biography",
    publish: 2011,
    edition: 2016
  },
  {
    title: "Book Seven",
    genre: "History",
    publish: 2013,
    edition: 2018
  },
  {
    title: "Book Eight",
    genre: "Romance",
    publish: 2015,
    edition: 2020
  },
  {
    title: "Book Nine",
    genre: "Thriller",
    publish: 2017,
    edition: 2022
  },
  {
    title: "Book Ten",
    genre: "Adventure",
    publish: 2019,
    edition: 2024
  }
];

// const userBooks = books.filter( (book) => book.genre === 'History')  // case sensitive
const userBooks = books.filter( (book) => {
    return (book.publish >= 2010 && book.genre === 'History')}
)

console.log(userBooks);