import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
// importing useHistory here

const Search = () => {
  // getting history object here
  const history = useHistory();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    // imperatively redirecting with history.push()
    history.push('/search?' + searchQuery);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
