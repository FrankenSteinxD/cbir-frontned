import React, { forwardRef } from "react";
import classnames from "classnames";

import styles from "../../css/Main.module.css";

const Header = ({ onSubmit, onChange, value, isSearch }, ref) => {
  return (
    <div
      className={classnames("uk-text-center", styles.header, {
        [styles.animate]: isSearch
      })}
    >
      <div className="uk-margin-large">
        <img src="/images/imgi.png" alt="" width="320" />
      </div>
      <div className="uk-margin">
        <form onSubmit={onSubmit} className={styles.form}>
          <div className="uk-margin">
            <div className="uk-flex uk-flex-between">
              <div className="uk-inline uk-width-1-1">
                <div
                  className={classnames(
                    "uk-form-icon uk-form-icon-flip",
                    styles.formIcon
                  )}
                  uk-form-custom=""
                >
                  <input type="file" ref={ref} />
                  <button
                    className="uk-button uk-button-text"
                    type="button"
                    tabIndex="-1"
                  >
                    <span uk-icon="icon: image" />
                  </button>
                </div>
                <input
                  type="text"
                  className={classnames("uk-input", styles.input)}
                  value={value}
                  onChange={onChange}
                  placeholder="Describe your image.."
                />
              </div>
              <button className="uk-button uk-button-default" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default forwardRef(Header);
