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
    if (book.borrows[0].returned === false) {
      notReturned.push(book);
    } else {
      isReturned.push(book);
    }
  });

  return [notReturned, isReturned];
}

function getBorrowersForBook(book, accounts) {
//takes in an example book object and the accounts array 

  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
