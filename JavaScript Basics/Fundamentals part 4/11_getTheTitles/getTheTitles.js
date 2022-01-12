const getTheTitles = function(book) {
    let largo = book.length;
    let titles = []
    for (i=0 ; i<=largo-1 ; i++){
        const bookObject = arguments[i];
        let bookTitle = bookObject.title;
        titles.push(bookTitle);
    }

    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
