import {useState,useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";
import {getAll} from "./BooksAPI"

import "./App.css";

function App() {
	const [books, setBooks] = useState([]);
	
	useEffect(() => {
		const fetchBooks = async () => {
			const result = await getAll();
			setBooks(result);
			console.log(result);
		}
		fetchBooks();
	},[])
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<HomePage books={books} />} />
				<Route path='/search' element={<SearchPage/>} />
			</Routes>
		</div>
	);
}

export default App;
