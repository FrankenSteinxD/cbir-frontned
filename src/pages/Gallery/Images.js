import React from "react";

import { STATIC_URL } from "../../config";

const Images = ({ images }) => (
  <div uk-grid="masonry: true">
    {images.map(image => (
      <div className="uk-width-1-3" key={image._id}>
        <img data-src={`${STATIC_URL}/${image.name}`} alt="Logo" uk-img="" />
        <p>{image.caption}</p>
      </div>
    ))}
  </div>
);

export default Images;
