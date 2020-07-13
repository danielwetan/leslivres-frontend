import React from 'react';
import MainNavbar from '../../components/public/Menu'
import Footer from '../../components/public/Footer'
import Main from '../../components/public/Login';

class Login extends React.Component {
  render() {
    return (
      <>
      <div className="container bg-white">
      <MainNavbar />
        <div className="container">
          <div className="row">
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-white">
              <Main />
            </main>
          </div>
        <Footer />
        </div>
      </div>
      </>
      );
  }
}

export default Login;