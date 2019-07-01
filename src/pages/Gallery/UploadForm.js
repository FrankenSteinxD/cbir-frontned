import React from "react";

const UploadForm = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <div className="uk-margin uk-flex uk-flex-center" uk-margin="">
      <div uk-form-custom="target: true">
        <input name="image" type="file" onChange={onChange} />
        <input
          className="uk-input uk-form-width-medium"
          type="text"
          placeholder="Select file"
          disabled
        />
      </div>
      <button className="uk-button uk-button-default">Submit</button>
    </div>
  </form>
);

export default UploadForm;
