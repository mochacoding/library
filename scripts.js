const harryPotter = new Book("The Sorcerer's Stone", 'J.K. Rowling', 'Read');

const theSecretPlace = new Book('The Secret Place', 'Tana French', 'Read');

const noDramaDiscipline = new Book(
	'No Drama Discipline',
	'Daniel J. Siegel & Tina Payne Bryson',
	'Not Read'
);

const myBooks = [harryPotter, theSecretPlace, noDramaDiscipline];

let displayBook = document.querySelector('.book');
let bookContainer = document.querySelector('.bookCards');

function Book(title, author, read) {
	this.title = title;
	this.author = author;
	this.read = read;
	this.toggleRead = function () {
		if (this.read == 'Not Read') {
			this.read = 'Read';
			updateBookDisplay();
		} else if (this.read == 'Read') {
			this.read = 'Not Read';
			updateBookDisplay();
		}
	};
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
			if (book.hasOwnProperty(key) && key == 'read') {
				let item = book[key];
				let div = document.createElement('div');
				let button = document.createElement('button');
				button.classList.add('readBook');
				newDiv.appendChild(div);
				button.textContent = `${item}`;
				div.appendChild(button);
			} else if (book.hasOwnProperty(key) && key != 'toggleRead') {
				let item = book[key];
				let paragraph = document.createElement('p');
				paragraph.textContent = `${item}`;
				newDiv.appendChild(paragraph);
			}
		}

		let div = document.createElement('div');
		div.classList.add('deleteDiv');
		let del = document.createElement('button');
		del.classList.add('deleteBook');
		del.textContent = 'Delete';
		newDiv.appendChild(div);
		div.appendChild(del);
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
const deleteDiv = document.querySelector('.deleteDiv');

showButton.addEventListener('click', () => {
	dialog.showModal();
});

closeButton.addEventListener('click', () => {
	dialog.close();
});

//delete book object

bookContainer.addEventListener('click', (event) => {
	if (
		// event.target.tagName === 'BUTTON' &&
		event.target.className === 'deleteBook'
	) {
		const deleteButton = event.target;
		const bookElement = deleteButton.closest('.book');
		index = bookElement.getAttribute('data-index');
		myBooks.splice(index, 1);
		updateBookDisplay();
	} else if (event.target.className === 'readBook') {
		const readButton = event.target;
		const bookElement = readButton.closest('.book');
		index = bookElement.getAttribute('id');
		thisBook = myBooks[index];
		thisBook.toggleRead();
		console.log(thisBook);
	}
});

//read status update

// const readButton = document.querySelector('');

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
