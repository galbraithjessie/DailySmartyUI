import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    render() {
        return (
            <div className="recent-posts-container">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">
                        Recent Posts
                    </div>

                    <div className="recent-posts">
                        <ul>
                            <li>Recent post 0</li>
                            <li>Recent post 1</li>
                            <li>Recent post 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(RecentPosts);