function findAccountById(accounts, id) {
  // if the account object has a matching id, return the object
  let matchingIds = {};

  for (let i = 0; i < accounts.length; i++) {
    const ids = accounts[i].id;
    console.log(ids);
    if (ids === id) {
      matchingIds = accounts[i];
    }
  }
  return matchingIds;
}

//findAccountById(accounts,"5f446f2ecfaf0310387c9603" )

function sortAccountsByLastName(accounts) {
  const sortedLastName = accounts.sort(function (nameA, nameB) {
    if (nameA.name.last > nameB.name.last) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortedLastName;
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  const borrowed = books.filter((book) => {
    for (i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === account.id) {
        counter++;
      }
    }
  });

  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {

  return books.filter((book) => book.borrows.some(    
    acc => acc.id === account.id && acc.returned === false))
    .map(book => {
      let author = authors.find(author => author.id === book.authorId)
      book.author = author;

      return book
    })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
