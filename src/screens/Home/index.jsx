import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Loader from '../../components/UI/Loader';
import MovieCard from '../../components/UI/MovieCard';
import { getTopFourMovies } from '../../store/actions';
import './styles.css';

class Home extends Component {

  componentDidMount() {
    this.props.onGetTopFourMovies();
  }

  render(){
    const { movies, loading } = this.props;
    return (
      <div className="content">
      {
        loading ? <Loader message="Buscando..."/> :
          <div>
            <div className="page-title">Filmes em destaque</div>
            <div>
              {
                _.map(movies, (movie, index) =>
                  <Link to={`/movie/${movie.id}/details`} className="col-md-4 col-sm-6 col-lg-3">
                    <MovieCard key={String(index)} movie={movie} />
                  </Link>
                )
              }
            </div>
          </div>
        }
      </div>
    );
  };
};

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  onGetTopFourMovies: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movie.movies,
  loading: state.movie.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onGetTopFourMovies: () => dispatch(getTopFourMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
