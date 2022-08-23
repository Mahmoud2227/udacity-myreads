import React from "react";
import Book from "../Book/Book";

import "./shelf.css";

const Shelf = ({title, books, type, onUpdateBook}) => {
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{title}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{books.map((book) => (
						<li key={book.id}>
							<Book
								id={book.id}
								title={book.title}
								authors={book.authors.join(" ")}
								coverUrl={book.imageLinks.thumbnail}
								shelf={type}
								onUpdateBook={onUpdateBook}
							/>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Shelf;
