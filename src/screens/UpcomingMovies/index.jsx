import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import Loader from '../../components/UI/Loader';
import MoviesPage from '../../components/common/MoviesPage';
import { getUpcomingMovies } from '../../store/actions';

class UpcomingMovies extends Component {

  componentDidMount() {
    this.props.onGetUpcomingMovies(1);
  }

  render(){
    const {
      totalPages,
      onGetUpcomingMovies,
      movies,
      loading,
    } = this.props;
    return (
      <div className="content">
        <div className="page-title">Lançamentos</div>
        { loading ? <Loader message="Buscando..."/> : <MoviesPage data={movies} /> }
        { totalPages > 0 ? 
          <div className="col-md-8 col-md-offset-3">
            <ReactPaginate
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={({selected}) => onGetUpcomingMovies(selected+1)}
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

UpcomingMovies.propTypes = {
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
  onGetUpcomingMovies: (page) => dispatch(getUpcomingMovies(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovies);
