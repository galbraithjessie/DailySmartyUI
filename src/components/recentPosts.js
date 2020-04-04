import React, { Component } from "react";

import { connect } from "react-redux";

import Post from "./post";
import * as actions from "../actions";

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    renderPosts = function() {
        const posts = this.props.recentPosts.map((post, index) => {
            if (index < 3) {
                return (
                    <Post type="recent" {...post} key={index} />
                )
            }
        })

        return posts
    }

    render() {
        return (
            <div className="recent-posts-container">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">
                        Recent Posts
                    </div>

                    <div className="recent-posts-posts">
                        <ul>
                            {this.renderPosts()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        recentPosts: state.posts.recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts);