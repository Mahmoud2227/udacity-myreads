import React from "react";

import "./searchPage.css";

const SearchPage = () => {
	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				<a type='button' className='close-search'>
					Close
				</a>
				<div className='search-books-input-wrapper'>
					<input type='text' placeholder='Search by title, author, or ISBN' />
				</div>
			</div>
			<div className='search-books-results'>
				<ol className='books-grid'></ol>
			</div>
		</div>
	);
};

export default SearchPage;
