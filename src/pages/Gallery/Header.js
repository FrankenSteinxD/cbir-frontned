import React from "react";

import SearchForm from "./SearchForm";
import UploadForm from "./UploadForm";

const Header = ({ onSubmit, onChange, onFileUpload, onFileSelect, values }) => (
  <div className="uk-container">
    <div className="uk-padding">
      <div className="uk-flex uk-flex-center">
        <img
          src="/images/logo-2.png"
          alt="logo"
          style={{ transform: "scale(1.3)" }}
        />
      </div>
      <div className="uk-margin">
        <SearchForm onSubmit={onSubmit} onChange={onChange} values={values} />
      </div>
      <div className="uk-margin">
        <UploadForm onSubmit={onFileUpload} onChange={onFileSelect} />
      </div>
    </div>
  </div>
);

export default Header;
