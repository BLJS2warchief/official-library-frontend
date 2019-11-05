import React from 'react'

class SearchResult extends React.Component {
    render() {
        return (
            <div className="message">
                    <div className="bookName"> {this.props.bookName} </div>
                    <div className="authorName"> {this.props.authorName} </div>
            </div>
        )
    }
}
export default SearchResult