import React from 'react'
import SearchResult from './SearchResult'

class SearchList extends React.Component {
    render() {
		const searches = Array.from(this.props.searches);
		const searchResults = searches.map(item => <SearchResult key = {item.id} bookName={item.bookName} authorName={item.authorName} />)

        return (
            <div className = "app">
                {searchResults}
            </div>
        );
	}
}
export default SearchList