import React, { Component } from 'react';
import Link from 'next/link';

class OfferStyleOne extends Component {
  render() {
    return (
      <section className="offer-area bg-image1 ptb-100 jarallax">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="offer-content">
                <span className="sub-title">Amazing New Recipe!</span>
                <h2>Mac and Cheese</h2>
                <p>The most amazing Macaroni ever.</p>

                <Link href="/products-one-row">
                  <a className="default-btn">Make It Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OfferStyleOne;