import React from 'react';
import './styles.scss';

const SearchBar = ({ value, onChange }) => {
	return (
		<input
			type="search"
			className="search"
			value={value}
			onChange={e => onChange(e.target.value)}
			placeholder="Start to type"
		/>
	);
};

export default SearchBar;
