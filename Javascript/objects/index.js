function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${readStatus}`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

