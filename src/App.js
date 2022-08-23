import {useState} from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/Search/SearchPage";

import "./App.css";
function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/search' element={<SearchPage/>} />
			</Routes>
		</div>
	);
}

export default App;
