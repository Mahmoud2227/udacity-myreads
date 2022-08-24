import {useState} from "react";
import {Link} from "react-router-dom";

import Book from "../../components/Book/Book";
import {search} from "../../BooksAPI";

import "./searchPage.css";

const SearchPage = ({onUpdateBook, books}) => {
	const [searchResults, setSearchResults] = useState([]);

	const inputChangeHandler = async (e) => {
		if (e.target.value.length > 0) {
			const result = await search(e.target.value);
			setSearchResults(result);
		} else {
			setSearchResults([]);
		}
	};

	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				<Link to='/' className='close-search'>
					Close
				</Link>
				<div className='search-books-input-wrapper'>
					<input
						type='text'
						placeholder='Search by title, author, or ISBN'
						onChange={inputChangeHandler}
					/>
				</div>
			</div>
			<div className='search-books-results'>
				<ol className='books-grid'>
					{!searchResults.error &&
						searchResults.map((book) => {
							const existedBook = books.find((b) => b.id === book.id);
							return (
								<li key={book.id}>
									<Book
										id={book.id}
										title={book.title}
										authors={book.authors ? book.authors.join(" ") : ""}
										coverUrl={
											book.imageLinks
												? book.imageLinks.thumbnail
												: "https://via.placeholder.com/128x193.png?text=no+thumbnail"
										}
										shelf={existedBook ? existedBook.shelf : "none"}
										onUpdateBook={onUpdateBook}
									/>
								</li>
							);
						})}
				</ol>
			</div>
		</div>
	);
};

export default SearchPage;
