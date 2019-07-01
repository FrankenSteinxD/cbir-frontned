import React, { PureComponent } from "react";

import Header from "./Header";
import Images from "./Images";
import { searchImages, uploadImages } from "../../services/images";

class Gallery extends PureComponent {
  state = {
    search: {
      query: ""
    },
    images: []
  };

  componentDidMount() {
    this.fetchImages();
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      ...state,
      search: {
        ...state.query,
        [name]: value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.fetchImages();
  };

  fetchImages = async () => {
    const { query: s } = this.state.search;
    try {
      const { data } = await searchImages(s);
      this.setState({ images: data });
    } catch (e) {
      console.error(e);
    }
  };

  onFileSelect = e => {
    const file = e.target.files[0];
    this.setState({
      upload: { image: file }
    });
  };

  onFileUpload = async e => {
    e.preventDefault();
    const { image } = this.state.upload;
    const data = new FormData();
    data.append("image", image);
    try {
      await uploadImages(data);
      window.UIkit.notification({
        message: "Image has been uploaded",
        status: "success",
        pos: "bottom-right",
        timeout: 5000
      });
    } catch (e) {
      window.UIkit.notification({
        message: "Image has not been uploaded",
        status: "error",
        pos: "bottom-right",
        timeout: 5000
      });
    }
  };

  render() {
    const { search, images } = this.state;
    return (
      <div className="wrapper">
        <Header
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          onFileSelect={this.onFileSelect}
          onFileUpload={this.onFileUpload}
          values={search}
        />
        <div className="uk-container" style={{ marginBottom: 150 }}>
          <Images images={images} />
        </div>
      </div>
    );
  }
}

export default Gallery;
