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

//function to add a new book
const form = document.querySelector('#addBook');
form.addEventListener('submit', function (event) {
	event.preventDefault();

	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const read = document.querySelector('#read').value;

	// const title = titleInput.value;
	// const author = authorInput.value;
	// const read = readInput.value;

	let addBook = new Book(title, author, read);
	addBook;
	myBooks.push(addBook);
	updateBookDisplay();
});

//function to populate books into viewport
function updateBookDisplay() {
	while (bookContainer.firstChild) {
		bookContainer.removeChild(bookContainer.firstChild);
	}

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
		let del = document.createElement('button');
		del.classList.add('deleteBook');
		del.textContent = 'Delete';
		newDiv.appendChild(del);
		bookContainer.appendChild(newDiv);
		newDiv.setAttribute('data-index', myBooks.indexOf(book));
		newDiv.setAttribute('id', myBooks.indexOf(book));
	});
}

//initialize book display
updateBookDisplay();

//new book modal
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.addBook');
const closeButton = document.querySelector('dialog button');

showButton.addEventListener('click', () => {
	dialog.showModal();
});

closeButton.addEventListener('click', () => {
	dialog.close();
});

//delete book object

bookContainer.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		const deleteButton = event.target;
		const bookElement = deleteButton.closest('.book');
		index = bookElement.getAttribute('data-index');
		myBooks.splice(index, 1);
		updateBookDisplay();
	}
});

// const booksToDelete = document.querySelectorAll('.book');
// booksToDelete.forEach((button) => {
// 	button.addEventListener('click', (event) => {
// 		const deleteButton = event.target;
// 		const bookElement = deleteButton.closest('.book');
// 		index = bookElement.getAttribute('data-index');
// 		myBooks.splice(index, 1);
// 		console.log(index);
// 		updateBookDisplay();
// 	});
// });

/*
const bookDelete = document.getElementsByClassName('book');
bookDelete.forEach(function (element) {
	const deleteButton = element.querySelector('button');
	deleteButton.addEventListener('click', handleDeleteEvent);
});

function handleDeleteEvent(event) {
	const deleteButton = event.target;
	const bookElement = deleteButton.closest('.book');
	index = bookElement.getAttribute('data-index');
	myBooks.splice(index, 1);
	console.log(index);
	updateBookDisplay();
}
*/
