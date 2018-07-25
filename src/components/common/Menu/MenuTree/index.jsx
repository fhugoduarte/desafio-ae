import React from "react";

import './styles.css';

const menuTree = (props) => (
  <li className='treeview'> 
    <a className="link" href={props.path}> 
      <i className={`fa fa-${props.icon} white-text`}></i> <span>{props.label}</span>
      <i className='fa fa-angle-left pull-right white-text'></i>
    </a>
    <ul className='treeview-menu'> 
      {props.children}
    </ul>
  </li>
);

export default menuTree;
