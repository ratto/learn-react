import './styles.css'

export const SearchInput = ({ searchValue, handleChange }) => {
    return (
        <input type="search"
            className="search-text"
            onChange={handleChange}
            value={searchValue}
            placeholder="Type your search here!" />
    );
}
