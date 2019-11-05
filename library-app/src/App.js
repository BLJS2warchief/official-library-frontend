import React from 'react'
import SearchList from './Components/SearchList'
import bookData from "./Components/BookData"

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            searches: bookData
        }
    }

    render() {
        return (
            <SearchList searches = {this.state.searches}/>
        )
    }
}

export default App