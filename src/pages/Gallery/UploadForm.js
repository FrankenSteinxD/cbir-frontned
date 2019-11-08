import React from "react";

const UploadForm = ({ title, id, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor={id}>
      <strong>{title}</strong>
    </label>
    <br />
    <br />
    <div>
      <div uk-form-custom="target: true">
        <input name="image" type="file" multiple id={id} onChange={onChange} />
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
