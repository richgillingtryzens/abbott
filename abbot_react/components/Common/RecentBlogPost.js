import React, { Component } from 'react';
import Link from 'next/link';

class RecentBlogPost extends Component {
    render() {
        return (
            <section className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Recent Stories</span>
                        <h2>From The Lifestyle Blog</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a>
                                            <img src={require("../../images/blog/blog1.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <span>January 29, 2020</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <span className="category">Pediasure</span>
                                    <h3>
                                        <Link href="/blog/balanced-nutrition-for-kids">
                                            <a>Balanced Nutrition for Kids</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog/balanced-nutrition-for-kids">
                                        <a className="details-btn">Read Story</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a>
                                            <img src={require("../../images/blog/blog2.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <span>January 29, 2020</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <span className="category">Pediasure</span>
                                    <h3>
                                        <Link href="/lifestyle/back-to-school">
                                            <a>Back to School</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/lifestyle/back-to-school">
                                        <a className="details-btn">Read Story</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a>
                                            <img src={require("../../images/blog/blog3.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <span>January 29, 2020</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <span className="category">Ensure</span>
                                    <h3>
                                        <Link href="/lifestyle/b-vitamins-linked-to-brain-health">
                                            <a>B-Vitamins Linked to Brain Health</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/lifestyle/b-vitamins-linked-to-brain-health">
                                        <a className="details-btn">Read Story</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RecentBlogPost;