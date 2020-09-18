import React, { Component } from 'react';
import Link from 'next/link';

class CategoriesBanner extends Component {
    render() {
        return (
            <section className="categories-banner-area pt-100 pb-70">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require("../../images/gallery/blog-1.jpg")} alt="image" />

                                <div className="content text-white">
                                    <span>Healthy Food</span>
                                    <h3>Back to School</h3>

                                    <Link href="/products-right-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>

                                <Link href="/products-right-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require("../../images/categories/categories2.jpg")} alt="image" />

                                <div className="content">
                                    <span>Lifestyle</span>
                                    <h3>Nutrition and You</h3>
                                    
                                    <Link href="/products-right-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="/products-right-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require("../../images/gallery/blog-2.jpg")} alt="image" />

                                <div className="content">
                                    <span>COVID-19</span>
                                    <h3>COVID-19 Safety Guidelines</h3>
                                    
                                    <Link href="/products-right-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="/products-right-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src={require("../../images/categories/categories4.jpg")} alt="image" />

                                <div className="content text-white">
                                    <span>Take 20% OFF</span>
                                    <h3>Winter Spring!</h3>
                                    
                                    <Link href="/products-right-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="/products-right-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CategoriesBanner;