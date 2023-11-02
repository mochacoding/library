const harryPotter = {
	title: "The Sorcerer's Stone",
	author: 'J.K. Rowling',
	read: 'read',
};

const theSecretPlace = {
	title: 'The Secret Place',
	author: 'Tana French',
	read: 'read',
};

const noDramaDiscipline = {
	title: 'No Drama Discipline',
	author: 'Daniel J. Siegel & Tina Payne Bryson',
	read: 'have not read',
};

const myBooks = [harryPotter, theSecretPlace, noDramaDiscipline];

let displayBook = document.querySelector('.book');
let bookContainer = document.querySelector('.bookCards');

function Book(title, author, read) {
	this.title = title;
	this.author = author;
	this.read = read;
}

// function newBook(title, author, read) {
// 	myBooks.push(new Book(title, author, read));
// }

// let displayBooks = function() {

// }

myBooks.forEach(function (book) {
	let newDiv = document.createElement('div');
	newDiv.className = 'book';
	for (let key in book) {
		if (book.hasOwnProperty(key)) {
			let item = book[key];
			let paragraph = document.createElement('p');
			paragraph.textContent = `${item}`;
			newDiv.appendChild(paragraph);
		}
	}
	bookContainer.appendChild(newDiv);
});
