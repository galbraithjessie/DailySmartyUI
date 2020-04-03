import React, { Component } from "react";

import SearchBar from "./searchBar";
import Logo from "./logo";

class Results extends Component {

    handleSearchBarSubmit(query) {

    }

    render() {
        return (
            <div>
                <Logo size={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
            </div>
        );
    }
}

export default Results;