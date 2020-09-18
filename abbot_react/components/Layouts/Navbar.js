import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '../../utils/ActiveLink';
import SearchModal from '../Modals/SearchModal';
import ShoppingCartModal from '../Modals/ShoppingCartModal';
import SidebarModal from '../Modals/SidebarModal';
import PropTypes from 'prop-types';

class Navbar extends Component {
    // Navbar 
    _isMounted = false;
    state = {
      display: false,
      collapsed: true
    };
    toggleNavbar = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    componentDidMount() {
      let elementId = document.getElementById("navbar");
      document.addEventListener("scroll", () => {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
    componentWillUnmount() {
      this._isMounted = false;
    }

    // Search Modal
    toggleModalSearch = () => {
      this.setState({
        SearchModal: !this.state.SearchModal
      });
    }
    
    // Shopping Cart Modal
    toggleModalCart = () => {
      this.setState({
        ShoppingCartModal: !this.state.ShoppingCartModal
      });
    }

    // Sidebar Modal
    toggleModalSidebar = () => {
      this.setState({
        SidebarModal: !this.state.SidebarModal
      });
    }
 
    render() {

      const { products } = this.props;
      const { collapsed } = this.state;
      const classNameOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      const classNameTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

      return (
        <React.Fragment>
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link href="/">
                    <a className="navbar-brand">
                      <img src={require("../../images/AbbottLaboratories.svg")} width="160" alt="logo" />
                    </a>
                  </Link>

                  <button 
                    onClick={this.toggleNavbar} 
                    className={classNameTwo}
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classNameOne} id="navbarSupportedContent">
                    <ul className="navbar-nav">

                      <li className="nav-item megamenu">
                        <Link href="#">
                          <a className="nav-link">
                                                    Shop <i className='bx bx-chevron-down'></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <h6 className="submenu-title">Our Products</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/nutritional-shakes" activeClassName="active">
                                        <a>Nutritional Shakes</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/pediatric" activeClassName="active">
                                        <a>
                                                                                Pediatric
                                        </a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/diabetic-supplements" activeClassName="active">
                                        <a>Diabetic Supplements</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/tube-feeds" activeClassName="active">
                                        <a>Tube Feeds</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/pump-and-giving-sets" activeClassName="active">
                                        <a>Pump and Giving Sets</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h6 className="submenu-title">Our Brands</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/pediasure" activeClassName="active">
                                        <a>Pediasure</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/ensure" activeClassName="active">
                                        <a>
                                                                                Ensure
                                        </a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/glucerna" activeClassName="active">
                                        <a>Glucerna</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/jevity" activeClassName="active">
                                        <a>Jevity</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item megamenu">
                        <Link href="#">
                          <a className="nav-link">
                                                    Lifestyle <i className='bx bx-chevron-down'></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <h6 className="submenu-title">Pediasure</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/about" activeClassName="active">
                                        <a>Tips and Advice</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/customer-service" activeClassName="active">
                                        <a>Healthcare Information</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/login" activeClassName="active">
                                        <a>Nutrition and Development</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h6 className="submenu-title">Ensure</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/ensure-tips-and-advice" activeClassName="active">
                                        <a>Tips and Advice</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/ensure-nutrition-and-you" activeClassName="active">
                                        <a>Nutrition and You</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/ensure-recipes" activeClassName="active">
                                        <a>Recipes</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/gallery-4" activeClassName="active">
                                        <a>FAQ</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h6 className="submenu-title">Glucerna</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/healthy-lifestyle" activeClassName="active">
                                        <a>Healthy Living</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/about-diabetes" activeClassName="active">
                                        <a>About Diabetes</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/glucerna-recipes" activeClassName="active">
                                        <a>Recipes</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/glucerna-faq" activeClassName="active">
                                        <a>FAQ</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h6 className="submenu-title">Elecare</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/elecare-tips-and-advice" activeClassName="active">
                                        <a>Tips and Advice</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/elecare-recipes" activeClassName="active">
                                        <a>Recipes</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/compare" activeClassName="active">
                                        <a>Compare</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/food-allergies-in-infants-and-children" activeClassName="active">
                                        <a>About Food Allergies in Infants and Children</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item megamenu">
                        <Link href="#">
                          <a className="nav-link">
                                                    Healthcare Professionals <i className='bx bx-chevron-down'></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <h6 className="submenu-title">Abbott Private Care</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/signing-up-for-abbott-private-care" activeClassName="active">
                                        <a>Signing Up</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/about-abbott-private-care" activeClassName="active">
                                        <a>
                                                                                About Private Care
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h6 className="submenu-title">Technical Information</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/technical-product-sheets" activeClassName="active">
                                        <a>Technical Product Sheets</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h6 className="submenu-title">Help</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/information-sheets" activeClassName="active">
                                        <a>Information Sheets</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/covid-19-nutritional-guidelines" activeClassName="active">
                                        <a>COVID-19 Nutritional Guidelines</a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/contact-us" activeClassName="active">
                                        <a>Contact Abbott Private Care</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <ul className="megamenu-submenu">
                                    <li>
                                      <div className="aside-trending-products">
                                        <img src={require("../../images/categories/categories3.jpg")} alt="image" />

                                        <div className="category">
                                          <h4>Keeping Children Safe During COVID</h4>
                                        </div>

                                        <Link href="#">
                                          <a className="link-btn"></a>
                                        </Link>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
 
                      <li className="nav-item megamenu">
                        <Link href="#">
                          <a className="nav-link">
                                                    Customers <i className='bx bx-chevron-down'></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <div className="container">
                              <div className="row">
                                <div className="col">
                                  <h6 className="submenu-title">Abbott Private Care</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/about-the-service" activeClassName="active">
                                        <a>About Abbott Private Care</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/who-is-it-for" activeClassName="active">
                                        <a>
                                                                                Who is it for?
                                        </a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/find-a-healthcare-provider" activeClassName="active">
                                        <a>Find a healthcare provider</a>
                                      </Link>
                                    </li>

                                    <li>
                                      <Link href="/stockists" activeClassName="active">
                                        <a>Where to buy Abbott Products</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col">
                                  <h6 className="submenu-title">Help</h6>

                                  <ul className="megamenu-submenu">
                                    <li>
                                      <Link href="/contact-us" activeClassName="active">
                                        <a>Contact Abbott Private Care</a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <div className="others-option">
                      <div className="option-item">
                        <div className="search-btn-box" onClick={this.toggleModalSearch}>
                          <i className="search-btn bx bx-search-alt"></i>
                        </div>
                      </div>

                      <div className="option-item">
                        <div className="cart-btn">
                          <Link href="#toggleModalCart">
                            <a onClick={ e => {
                              e.preventDefault();
                              this.toggleModalCart();
                            }}>
                              <i className='bx bx-shopping-bag'></i>
                              <span>{products.length}</span>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className="option-item">
                        <div className="burger-menu" onClick={this.toggleModalSidebar}>
                          <span className="top-bar"></span>
                          <span className="middle-bar"></span>
                          <span className="bottom-bar"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
                
          {/* Search Modal */}
          <SearchModal 
            onClick={this.toggleModalSearch} 
            active={this.state.SearchModal ? 'active' : ''} 
          />

          {/* Shopping Cart Modal */}
          <ShoppingCartModal 
            onClick={this.toggleModalCart} 
            active={this.state.ShoppingCartModal ? 'active' : ''} 
          />

          {/* Sidebar Modal */}
          <SidebarModal 
            onClick={this.toggleModalSidebar} 
            active={this.state.SidebarModal ? 'active' : ''} 
          />
        </React.Fragment>
      );
    }
}

const mapStateToProps = (state)=>{
  return{
    products: state.addedItems
  }
}

Navbar.propTypes = {
  products: PropTypes.arrayOf.object,
}

export default connect(mapStateToProps)(Navbar);