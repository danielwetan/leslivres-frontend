import React from 'react';
import MainNavbar from '../../components/public/Navigation/MainNavbar'
import Sidebar from '../../components/public/Navigation/Sidebar'
import Footer from '../../components/public/Footer'
import Main from '../../components/public/Profile';

class Profile extends React.Component {
  render() {
    return (
      <>
      <div className="container bg-white">
      <MainNavbar />
        <div className="container">
          <div className="row">
            <Sidebar />
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

export default Profile;