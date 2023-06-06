function getTotalBooksCount(books) {
  //Get total book count
  const bookCount = books.length;
  return bookCount;
}

function getTotalAccountsCount(accounts) {
  //Get total number of accounts
  const totalAccounts = accounts.length;
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  //Get the total number of books that have not been returned yet

  let counter = 0;

  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      counter++;
    }
  });

  return counter;
}

function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre);

  let count = {};
  let result = [];

  genres.forEach((genre) => {
    if (!result) {
      result.push({ name: genre, count: 1 });
    }
    let existing = result.find((x) => x.name === genre);
    if (existing) {
      existing.count += 1;
    } else {
      result.push({ name: genre, count: 1 });
    }
  });

  let sorted = result.sort((a, b) => {
    if (a.count < b.count) {
      return 1;
    } else {
      return -1;
    }
  });

  return sorted.slice(0, 5);
}

function getMostPopularBooks(books) {
  // returns an array of 5 or less objects showing the most popular books
  // popularity = number of times a book has been borrowed
  // each object in the returned array should have two keys, name and count
  // name = title of book, count = number of times borrowed

  const result = [];

  books.forEach((book) => {
    result.push({ name: book.title, count: book.borrows.length });
  });

  const sorted = result.sort((a, b) => (a.count > b.count ? -1 : 1));

  return sorted.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {

  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
