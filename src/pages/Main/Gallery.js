import React from "react";

import Image from "./Image";

const Gallery = ({ loading, images }) => {
  if (loading) {
    return (
      <div className="uk-flex uk-flex-center uk-flex-middle">
        <div className="uk-padding-large">
          <div uk-spinner="ratio: 3" />
        </div>
      </div>
    );
  }

  if (images.length <= 0) {
    return (
      <div className="uk-flex uk-flex-center uk-flex-middle">
        <div className="uk-padding-large">
          <div className="uk-h3">No images were found!</div>
        </div>
      </div>
    );
  }

  return (
    <div className="uk-padding-large">
      <div
        uk-grid="masonry: true"
        uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300"
        uk-lightbox="animation: slide"
        id="light"
      >
        {images.map(image => (
          <div className="uk-width-1-3" key={image._id}>
            <Image name={image.name} caption={image.caption} key={image.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
