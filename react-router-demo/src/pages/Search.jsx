import { useSearchParams, Link } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newQuery = formData.get('query');
    setSearchParams({ query: newQuery });
  };
  
  return (
    <div className="page search-page">
      <h1>Search Page</h1>
      <p>This page demonstrates using search parameters with React Router.</p>
      
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          name="query" 
          placeholder="Search..." 
          defaultValue={query}
        />
        <button type="submit">Search</button>
      </form>
      
      {query && (
        <div className="search-results">
          <h2>Search Results for: "{query}"</h2>
          <p>This would typically display search results from an API call.</p>
          <p>The query parameter is preserved in the URL, allowing for bookmarking and sharing.</p>
        </div>
      )}
      
      <div className="navigation">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Search;
