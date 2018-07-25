import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import Loader from '../../components/UI/Loader';
import MoviesPage from '../../components/common/MoviesPage';
import { getPopularMovies } from '../../store/actions';

class PopularMovies extends Component {

  componentDidMount() {
    this.props.onGetPopularMovies(1);
  }

  render(){
    const {
      totalPages,
      onGetPopularMovies,
      movies,
      loading,
    } = this.props;
    return (
      <div className="content">
        <div className="page-title">Filmes Populares</div>
        { loading ? <Loader message="Buscando..."/> : <MoviesPage data={movies} /> }
        { totalPages > 0 ? 
          <div className="col-md-8 col-md-offset-3">
            <ReactPaginate
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={({selected}) => onGetPopularMovies(selected+1)}
              breakClassName="break-me"
              containerClassName="pagination"
              activeClassName="active"
              pageClassName="pages-pagination"
              breakLabel={<a>...</a>}
            />
          </div>
          : undefined
        }
      </div>
    );
  };
};

PopularMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  totalPages: PropTypes.number,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  movies: state.movie.movies,
  totalPages: state.movie.totalPages,
  loading: state.movie.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onGetPopularMovies: (page) => dispatch(getPopularMovies(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
