import React from "react";

const SearchForm = ({ onSubmit, onChange, values }) => (
  <form onSubmit={onSubmit}>
    <div className="uk-margin uk-flex uk-flex-center">
      <input
        type="text"
        name="query"
        autoComplete="off"
        className="searchinput uk-input uk-form-large"
        placeholder="Describe your image.."
        value={values.query}
        onChange={onChange}
      />
    </div>
  </form>
);

export default SearchForm;
