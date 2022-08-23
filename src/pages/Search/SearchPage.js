import {useState} from "react";
import {Link} from "react-router-dom";

import Book from "../../components/Book/Book";
import {search} from "../../BooksAPI";

import "./searchPage.css";

const SearchPage = ({onUpdateBook}) => {
	const [searchResults, setSearchResults] = useState([]);

	const inputChangeHandler = async (e) => {
		const result = await search(e.target.value);
		setSearchResults(result);
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
						searchResults.map((book) => (
							<li key={book.id}>
								<Book
									id={book.id}
									title={book.title}
									authors={book.authors ? book.authors.join(" ") : ""}
									coverUrl={book.imageLinks.thumbnail}
									shelf='none'
									onUpdateBook={onUpdateBook}
								/>
							</li>
						))}
				</ol>
			</div>
		</div>
	);
};

export default SearchPage;
