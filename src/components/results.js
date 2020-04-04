import React, { Component } from "react";

import SearchBar from "./searchBar";
import Logo from "./logo";
import ResultsPosts from "./resultsPosts";

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetPostsWithQuery(query);
    }

    render() {
        
        return (
            <div className="results">
                <Logo size={55}/>
                <SearchBar page="results" onSubmit={(query) => this.handleSearchBarSubmit(query)} />
                <ResultsPosts />
            </div>
        )
    }
}

export default connect(null, actions)(Results);