import React from 'react';

import Loader from '../../../imgs/loader.gif';
import './styles.css';

const loader = ({message}) => (
  <div className="loader-container col-md-3 col-md-offset-4">
    <img src={Loader} className="col-md-8 col-md-offset-1" />
    <h2>{message}</h2>
  </div>
);

export default loader;