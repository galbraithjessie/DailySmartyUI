import React, { Component } from 'react';

import { connect } from 'react-redux';

class ResultsPost extends Component {
    render() {
        return (
            <div className="results-posts">
                <div className="results-posts-wrapper">
                    <div className="results-posts">
                        results go here
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state }
}

export default connect(mapStateToProps)(ResultsPosts);