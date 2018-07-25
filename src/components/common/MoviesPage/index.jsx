import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import MovieCard from '../../UI/MovieCard';

const moviesPage = (props) => {
  const { data } = props;
  return (
    <div className="content">
      <div>
        {
          _.map(data, (movie, index) =>
            <Link
              to={`/movie/${movie.id}/details`}
              className="col-md-4 col-sm-6 col-lg-3"
            >
              <MovieCard key={String(index)} movie={movie} />
            </Link>
          )
        }
      </div>
    </div>
  );
};

moviesPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default moviesPage;
