import React, { Component } from "react";

class SearchBar extends Component {


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

export default RecentPosts;