import React, { useState, useCallback, createRef } from "react";
import classnames from "classnames";

import { searchImages, searchByImage } from "../services/images";
import { notification } from "../services/uikit";
import Header from "./Main/Header";
import Gallery from "./Main/Gallery";
import styles from "../css/Main.module.css";

const searchFileRef = createRef();

const Main = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      async function searchByFile(image) {
        setLoading(true);
        setIsSearch(true);

        try {
          const { data } = await searchByImage(image);
          setImages(data);
          setQuery("");
          searchFileRef.current.value = null;
        } catch (e) {
          setIsSearch(false);
          notification("danger", "Something wrong happened");
        }

        setTimeout(() => setLoading(false), 1000);
      }

      async function searchByQuery() {
        setLoading(true);
        setIsSearch(true);

        try {
          const { data } = await searchImages(query);
          setImages(data);
        } catch (e) {
          setIsSearch(false);
          notification("danger", "Something wrong happened");
        }

        setTimeout(() => setLoading(false), 1000);
      }

      if (searchFileRef.current && searchFileRef.current.files.length) {
        const image = searchFileRef.current.files[0];
        const data = new FormData();
        data.append("image", image);
        searchByFile(data);
      } else {
        searchByQuery();
      }
    },
    [query]
  );

  const onChange = useCallback(e => {
    setQuery(e.target.value);
  }, []);

  return (
    <div className="wrapper">
      <div>
        {/* eslint-disable-next-line */}
        <a className={classnames("uk-link-muted", styles.uploadLink)}>
          <span uk-icon="icon: database; ratio: 1.3" /> Upload image
        </a>
      </div>
      <div className="uk-container">
        <div className="p-relative full-screen">
          <Header
            onSubmit={onSubmit}
            onChange={onChange}
            value={query}
            isSearch={isSearch}
            ref={searchFileRef}
          />
          {isSearch ? <Gallery loading={loading} images={images} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Main;
