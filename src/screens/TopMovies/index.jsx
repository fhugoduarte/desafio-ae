import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import Loader from '../../components/UI/Loader';
import MoviesPage from '../../components/common/MoviesPage';
import { getTopMovies } from '../../store/actions';

class TopMovies extends Component {

  componentDidMount() {
    this.props.onGetTopMovies(1);
  }

  render(){
    const {
      totalPages,
      onGetTopMovies,
      movies,
      loading,
    } = this.props;
    return (
      <div className="content">
        <div className="page-title">Top filmes</div>
        { loading ? <Loader message="Buscando..."/> : <MoviesPage data={movies} /> }
        { totalPages > 0 ? 
          <div className="col-md-8 col-md-offset-3">
            <ReactPaginate
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={({selected}) => onGetTopMovies(selected+1)}
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

TopMovies.propTypes = {
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
  onGetTopMovies: (page) => dispatch(getTopMovies(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);
