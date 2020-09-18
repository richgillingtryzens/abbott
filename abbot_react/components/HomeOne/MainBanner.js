import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 500,
  items: 1,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>"
  ],
}

class MainBanner extends Component {
    _isMounted = false;
    state = {
      display: false,
    }
    componentDidMount(){ 
      this._isMounted = true;
      this.setState({ display: true }) 
    }
    componentWillUnmount() {
      this._isMounted = false;
    }
    
    render() {
      return (
        <React.Fragment>
          {this.state.display ? <OwlCarousel 
            className="home-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="main-banner banner-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content text-center">
                          <span
                            className={
                              isVisible ? "sub-title animated fadeInUp opacityOne" : 'opacityZero'
                            }
                          >
                                                    Latest News
                          </span>
                          <h1
                            className={
                              isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                            }
                          >
                                                    Taking COVID Testing to the Next Level
                          </h1>
                          <p
                            className={
                              isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                            }
                          >
                                                    WE&apos;RE DEVELOPING TECHNOLOGIES, EXPANDING ACCESS AND SHARING RESOURCES AS PART OF OUR EFFORTS TO LIMIT THE CORONAVIRUS
                          </p>

                          <div className="btn-box">
                            <Link href="/lifestyle/covid-19-testing">
                              <a 
                                className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                }
                              >
                                                            Learn More
                              </a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-banner banner-bg2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content">
                          <span
                            className={
                              isVisible ? "sub-title animated fadeInUp slow opacityOne" : 'opacityZero'
                            }
                          >
                                                    COVID-19
                          </span>
                          <h1
                            className={
                              isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                            }
                          >
                                                    Our Contributions
                          </h1>
                          <p
                            className={
                              isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
                            }
                          >
                                                    We&apos;re developing technologies, expanding access and sharing access as part of our efforts to limit COVID-19.
                          </p>
                                                
                          <div className="btn-box">
                            <Link href="/lifestyle/covid-19-research">
                              <a 
                                className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                }
                              >
                                                            Learn More
                              </a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-banner banner-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content">
                          <span
                            className={
                              isVisible ? "sub-title animated fadeInUp opacityOne" : 'opacityZero'
                            }
                          >
                                                    Abbott Australia
                          </span>
                          <h1
                            className={
                              isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                            }
                          >
                                                    The Parkinsons Fight
                          </h1>
                          <p
                            className={
                              isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                            }
                          >
                                                    When medication proved less effective, deep brain stimulation (DBS) helped Clive leave his symptoms in the sawdust.
                          </p>
                                                
                          <div className="btn-box">
                            <Link href="/products-left-sidebar">
                              <a 
                                className={
                                                                `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                }
                              >
                                                            Learn More
                              </a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel> : ''}
        </React.Fragment>
      );
    }
}

export default MainBanner;
