import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";
import {getAll, update} from "./BooksAPI";

import "./App.css";

function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchBooks = async () => {
			const result = await getAll();
			setBooks(result);
		};
		fetchBooks();
	}, []);

	const onUpdateBook = async (id, shelf) => {
		await update({id}, shelf);
		const result = await getAll();
		setBooks(result);
	};
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<HomePage books={books} onUpdateBook={onUpdateBook} />} />
				<Route path='/search' element={<SearchPage onUpdateBook={onUpdateBook} books={books} />} />
			</Routes>
		</div>
	);
}

export default App;
