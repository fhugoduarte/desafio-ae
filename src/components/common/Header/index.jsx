import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './styles.css';
import { searchMovies } from '../../../store/actions';
import SearchForm from '../../forms/SearchForm';

const header = (props) => {
  const { onSearchMovies } = props;
  const submit = {
    methods: {
      submitMethod: _.debounce(onSearchMovies, 500, { leading: true }),
    }
  }
  return (
    <header className="main-header">
      <Link className="logo" to="/">
        <span className="logo-mini">
          <i className="fa fa-film" />
          <b className="white-text"> A</b><text className="white-text">F</text> 
        </span>
        <span className="logo-lg">
          <b className="white-text">Agenda </b> {'Filmes '}
          <i className="fa fa-film" />
        </span>
      </Link>
      <nav className="navbar navbar-static-top">
        <a className="sidebar-toggle" data-toggle="offcanvas" />
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown messages-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-search"></i>
              </a>
              <ul class="dropdown-menu">
                <li class="header">
                  <SearchForm onSubmit={submit.methods.submitMethod} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

header.propTypes = {
  onSearchMovies: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onSearchMovies: ({movie}) => dispatch(searchMovies(movie, 1)),
});

export default connect(null, mapDispatchToProps)(header);
