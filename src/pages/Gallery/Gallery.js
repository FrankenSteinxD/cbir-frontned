import React, { PureComponent } from "react";

import Header from "./Header";
import Images from "./Images";
import {
  searchImages,
  uploadImages,
  searchByImage
} from "../../services/images";

class Gallery extends PureComponent {
  state = {
    search: {
      query: ""
    },
    images: [],
    image: null,
    loading: false
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

  onFileIndexSelect = e => {
    const files = e.target.files;
    this.setState({
      upload: { images: files }
    });
  };

  onFileIndexUpload = async e => {
    e.preventDefault();
    const { images } = this.state.upload;
    const data = new FormData();
    for (let i = 0; i < images.length; i += 1) {
      data.append("images", images[i]);
    }
    try {
      await this.setState({ loading: true });
      await uploadImages(data);
      document.getElementById("file-index").value = "";
      this.setState({ upload: {}, loading: false });
      window.UIkit.notification({
        message: "Image has been uploaded",
        status: "success",
        pos: "bottom-right",
        timeout: 5000
      });
    } catch (e) {
      this.setState({ loading: false });
      window.UIkit.notification({
        message: "Image has not been uploaded",
        status: "error",
        pos: "bottom-right",
        timeout: 5000
      });
    }
  };

  onFileSearchSelect = e => {
    const image = e.target.files[0];
    this.setState({
      image
    });
  };

  onFileSearchUpload = async e => {
    e.preventDefault();
    const { image } = this.state;
    const data = new FormData();
    data.append("image", image);
    try {
      await this.setState({ loading: true });
      const { data: images } = await searchByImage(data);
      document.getElementById("file-search").value = "";
      this.setState({ image: null, loading: false, images });
    } catch (e) {
      this.setState({ loading: false });
      window.UIkit.notification({
        message: "Image has not been uploaded",
        status: "error",
        pos: "bottom-right",
        timeout: 5000
      });
    }
  };

  render() {
    const { search, images, loading } = this.state;
    return (
      <div className="wrapper">
        <Header
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          onFileIndexSelect={this.onFileIndexSelect}
          onFileIndexUpload={this.onFileIndexUpload}
          onFileSearchSelect={this.onFileSearchSelect}
          onFileSearchUpload={this.onFileSearchUpload}
          values={search}
          loading={loading}
        />
        <div className="uk-container" style={{ marginBottom: 150 }}>
          <Images images={images} />
        </div>
      </div>
    );
  }
}

export default Gallery;
