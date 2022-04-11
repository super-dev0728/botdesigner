import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import '../../components/Landing/login.css';

import LandingHeader from '../../components/Layout/LandingHeader'
// import Landing from '../../components/Landing'

import Icon4 from '../../../images/icon4.svg'
import Icon5 from '../../../images/icon5.svg'
import Icon6 from '../../../images/icon6.svg'

const Landing = ({ isAuthenticated }) => {
  // console.log(isAuthenticated);
  // if (isAuthenticated !== null) {
  //   return <Redirect to='/home' />
  // }

  return (
    <Fragment>
      <LandingHeader/>
      
      <section className="loginMain">
        <div className="loginWrap">
          <h2>Thanks for choosing WebRobot for your valuable data business!</h2>
          <h3>Use this app to extract every data on the Internet and create value-added and proﬁtable datasets and big-data projects.</h3>
          <ul>
            <li>
              <Link to="#">
                <img src={Icon4} alt="Icon"/>
                <span className="login-text">Documentation <br />&amp; support</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <img src={Icon5} alt="Icon" />
                <span className="login-text">Login</span>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <img src={Icon6} alt="Icon" />
                <span className="login-text">Sign up</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

    </Fragment>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);