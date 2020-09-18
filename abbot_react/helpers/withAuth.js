import React from 'react';
import router from 'next/router';
import { auth } from '../firebase';
const withAuth = (Component) => {
  return class WrappedAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: 'LOADING',
      }
    }
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        // console.log(authUser);
        if(authUser) {
          this.setState({
            status: 'SIGNED_IN'
          });
        } else {
          router.push('/admin/signin');
        }
      });
    }
    renderContent() {
      const { status } = this.state;
      if(status == 'LOADING') {
        return (
          <div className="loading">
            <div className="d-table">
              <div className="d-table-cell">
                <h1>Loading ......</h1>
              </div>
            </div>
          </div>
        );
      } else if (status == 'SIGNED_IN') {
        return <Component { ...this.props } />
      }
    }
    render() {
      return (
        <React.Fragment>
          {this.renderContent()}
        </React.Fragment>
      );
    }
  };
}
export default withAuth;