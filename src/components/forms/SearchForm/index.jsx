import React from 'react';
import { Field, reduxForm } from 'redux-form';

const searchForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="sidebar-form">
      <div className="input-group">
        <Field
          name="movie"
          component="input"
          className="form-control"
          placeholder="Buscar..."
          type="text"
        />
        <span className="input-group-btn">
          <button type="submit" name="search" id="search-btn" className="btn btn-flat">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    </form>
);}

const searchReduxForm = reduxForm({
  form: 'search',
})(searchForm);

export default searchReduxForm;