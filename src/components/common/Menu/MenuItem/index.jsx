import React from "react";
import { Link } from 'react-router-dom'

const menuItem = (props) => (
  <li> 
    <Link to={props.path}>
      <i className={`fa fa-${props.icon} white-text`} />
      <span>{props.label}</span>
    </Link>
  </li>
);

export default menuItem;
