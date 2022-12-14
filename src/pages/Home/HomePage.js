import React from "react";
import {Link} from "react-router-dom";

import Shelf from "../../components/Shelf/Shelf";

import "./homePage.css";

const HomePage = ({books, onUpdateBook}) => {
	const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
	const wantToRead = books.filter((book) => book.shelf === "wantToRead");
	const read = books.filter((book) => book.shelf === "read");
	return (
		<>
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					<div>
						<Shelf
							title='Currently Reading'
							books={currentlyReading}
							type='currentlyReading'
							onUpdateBook={onUpdateBook}
						/>
						<Shelf
							title='Want to Read'
							books={wantToRead}
							type='wantToRead'
							onUpdateBook={onUpdateBook}
						/>
						<Shelf title='Read' books={read} type='read' onUpdateBook={onUpdateBook} />
					</div>
				</div>
			</div>
			<div className='open-search'>
				<Link to='/search'>Add a book</Link>
			</div>
		</>
	);
};

export default HomePage;
