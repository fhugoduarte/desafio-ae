import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Loader from '../../components/UI/Loader';
import { getMovieDetails } from '../../store/actions';
import { BASE_IMAGE_URL } from '../../util/constants';

class MovieDetails extends Component {

  componentDidMount() {
    this.props.onGetMovieDetails(this.props.match.params.id);
  }

  render(){
    const { movie, loading } = this.props;
    return (
      <div className="content">
        {
          loading ? <Loader message="Buscando..."/> :
            <div>
              <div className="page-title">{movie.title}</div>
              <div className="row">
                <div className="col-md-5">
                  <img src={`${BASE_IMAGE_URL}${movie.poster_path}`} />
                </div>
                <div className="col-md-6">
                  <h4>Lançamento: {movie.release_date}</h4>
                  <h4>Resumo:</h4>{movie.overview}<br/>
                  <h4>Gêneros:</h4>{_.map(movie.genres, (genre) => <div>{genre.name}</div>)}
                  <h4>Popularidade: {movie.popularity}</h4>
                  <h4>{movie.vote_average} <i className="fa fa-star" /></h4>
                  {movie.adult ? <h4>+18</h4> : undefined}
                </div>
              </div>
            </div>
        }
      </div>
    );
  };
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
  onGetMovieDetails: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movie: state.movie.movieDetails,
  loading: state.movie.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onGetMovieDetails: (idMovie) => dispatch(getMovieDetails(idMovie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
