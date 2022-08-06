import React, { Component } from "react";
// import axios from "axios";
// import apiKey from "../config";
import NotFound from "./NotFound";
import Photo from "./Photo";
import { withRouter } from "react-router-dom";

class PhotoContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.query) {
      if (this.props.match.params.query !== prevProps.match.params.query) {
        this.props.onSearch(this.props.match.params.query);
      }
    }
  }

  render() {
    let photos;
    let images = this.props.images;
    if (images.length > 0) {
      photos = images.map((photo) => {
        return (
          <Photo
            server={photo.server}
            id={photo.id}
            secret={photo.secret}
            key={photo.id}
          />
        );
      });
    } else {
      photos = <NotFound />;
    }

    return (
      <div className="photo-container">
        <h2>{this.props.query}</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
}

export default withRouter(PhotoContainer);
