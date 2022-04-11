import React, {Fragment, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../Redux/actions/auth';

import LandingHeader from '../../components/Layout/LandingHeader'
// import Login from '../../components/Auth/Login'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <Fragment>
      <LandingHeader/>

      <Fragment>
        <section className="loginMain">
          <div className="loginWrap">
            <h1 className='large text-primary'>Sign In</h1>
            <p className='lead'>
              <i className='fas fa-user'></i> Sign into your account
            </p>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength='6'
                />
              </div>
              <input type='submit' className='btn btn-primary' value='Login' />
            </form>
            <p className='my-1'>
              Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
          </div>
        </section>
      </Fragment>
    </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);