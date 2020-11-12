import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');
	const onFieldSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(term);
	};
	return (
		<div className='search-bar ui segment'>
			<form className='ui form' onSubmit={onFieldSubmit}>
				<div className='field'>
					<label htmlFor='search'>Video search</label>
					<input
						type='text'
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
