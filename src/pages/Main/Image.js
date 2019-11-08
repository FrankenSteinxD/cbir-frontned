import React from "react";

import { STATIC_URL } from "../../config";

const Image = ({ name, caption }) => {
  const url = `${STATIC_URL}/${name}`;
  return (
    <a href={url} data-caption={caption}>
      <img data-src={url} alt="" uk-img="" />
    </a>
  );
};

export default Image;
