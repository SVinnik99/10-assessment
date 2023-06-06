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
  const matchingIds = [];

  books.forEach((book) => {
    if (book.id === account.id) {
      matchingIds.push(book);
    }
  });
 /* matchingIds.forEach(id => {

  })*/

  console.log(matchingIds)
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
