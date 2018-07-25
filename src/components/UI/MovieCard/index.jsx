import React from 'react';
import _ from 'lodash';

import { BASE_IMAGE_URL } from '../../../util/constants';
import './styles.css';

const movieCard = (props) => {
  const { movie } = props;
  return (
    <div className="box-content">
      <div className="box box-solid box-danger">
        <div className="box-header">
          <div className="box-title">{movie.title}</div>
        </div>
        <div className="box-body">
          <img src={`${BASE_IMAGE_URL}${movie.poster_path}`} className="card-image"/>
        </div>
        <div className="box-footer">
          <b>Lançamento:</b> {_.split(movie.release_date, '-')[0]}<br/>
          <b>Popularidade: </b> {movie.popularity} <br/>
          <b>{movie.vote_average}</b> <i className="fa fa-star" /><br/>
        </div>
      </div>
    </div>
  );
}

export default movieCard;