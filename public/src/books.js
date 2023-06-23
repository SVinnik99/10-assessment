

const {isCheckedOut} = require("./home")

function findAuthorById(authors, id) {
  let matchingAuthor = {};
  authors.forEach((author) => {
    if (author.id === id) {
      matchingAuthor = author;
    }
  });
  return matchingAuthor;
}

function findBookById(books, id) {
  let matchingBooks = {};

  books.forEach((book) => {
    if (book.id == id) {
      matchingBooks = book;
    }
  });
  return matchingBooks;
}

function partitionBooksByBorrowedStatus(books) {
  // return ONE array that has TWO seperate array in it
  // first array should display the books object that is currently check out(has not been returned)
  // second attay should display the books object that is not checked out (has been returned)
  // use the first transaction object in the borrows array

  const notReturned = [];
  const isReturned = [];

  const booksBorrows = books.forEach((book) => {
    if (book.borrows[0].returned === true) {
      isReturned.push(book);
    } 
    else {
      notReturned.push(book)
    }
  });
  
  return [notReturned, isReturned];
}


let bookBorrowers = (book, accounts) => {

}

function getBorrowersForBook(book, accounts) {
  //takes in an example book object and the accounts array 
  // should return an array of 10 or fewer account objects 
  // the account objects should match the ID in the book borrows array
  // the account objects should also include the returned status 

  const result = [];
  

  accounts.forEach(account => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === account.id) {
        account.returned = book.borrows[i].returned
        result.push(account)
      }
      }
    })
    
  return result.slice(0,10)

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
