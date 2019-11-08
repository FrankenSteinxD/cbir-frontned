import React from "react";

import SearchForm from "./SearchForm";
import UploadForm from "./UploadForm";

const Header = ({
  onSubmit,
  onChange,
  onFileIndexUpload,
  onFileIndexSelect,
  onFileSearchUpload,
  onFileSearchSelect,
  values,
  loading
}) => (
  <div className="uk-container">
    <div className="uk-padding">
      <div className="uk-margin">
        <SearchForm onSubmit={onSubmit} onChange={onChange} values={values} />
      </div>
      <div className="uk-margin">
        <div className="uk-flex uk-flex-center">
          <div className="uk-padding-small uk-text-center">
            <UploadForm
              title="Search by image"
              onSubmit={onFileSearchUpload}
              onChange={onFileSearchSelect}
              id="file-search"
            />
          </div>
          <div className="uk-padding-small uk-text-center">
            <UploadForm
              title="Index new image"
              onSubmit={onFileIndexUpload}
              onChange={onFileIndexSelect}
              id="file-index"
            />
          </div>
        </div>
      </div>
      {loading ? <h4 className="uk-text-center">Processing...</h4> : null}
    </div>
  </div>
);

export default Header;
