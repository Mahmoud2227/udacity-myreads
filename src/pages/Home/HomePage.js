import React from "react";

import Shelf from "../../components/Shelf/Shelf";

import "./homePage.css";

const HomePage = () => {
	return (
		<>
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					<div>
						<Shelf title='Currently Reading' />
						<Shelf title='Want to Read' />
						<Shelf title='Read' />
					</div>
				</div>
			</div>
			<div className='open-search'>
				<a>
					Add a book
				</a>
			</div>
		</>
	);
};

export default HomePage;
