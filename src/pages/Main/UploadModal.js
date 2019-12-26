import React, { useState, useCallback, useRef } from "react";
import { uploadImages } from "../../services/images";
import { notification } from "../../services/uikit";

const UploadModal = () => {
  const filesInput = useRef();
  const [loading, setLoading] = useState(false);
  const onSubmit = useCallback(e => {
    e.preventDefault();
    if (filesInput.current.files.length === 0) return;

    async function doit() {
      setLoading(true);
      try {
        const data = new FormData();
        const files = filesInput.current.files;
        for (let i = 0; i < files.length; i++) {
          data.append("images", files[i]);
        }
        await uploadImages(data);
        notification("success", "Successfully indexed new images");
      } catch (e) {
        console.log(e);
        notification("danger", "Something wrong happened");
      }
      setLoading(false);
      filesInput.current.value = null;
    }

    doit();
  }, []);

  return (
    <div id="upload-modal" uk-modal="">
      <div className="uk-modal-dialog uk-modal-body">
        <div className="uk-margin-large">
          <h4 className="">Upload new images</h4>
        </div>
        {loading ? (
          <div className="uk-flex uk-flex-center uk-flex-middle">
            <span uk-spinner="ratio: 3" />
          </div>
        ) : (
          <form className="uk-text-center" onSubmit={onSubmit}>
            <div className="uk-margin-large">
              <div uk-form-custom="target: true">
                <input type="file" ref={filesInput} multiple />
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
        )}
        <div className="uk-margin uk-text-right">
          <button
            className="uk-button uk-button-danger uk-modal-close"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
