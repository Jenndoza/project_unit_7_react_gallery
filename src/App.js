import React, { Component } from "react";
import axios from "axios";
import apiKey from "./config";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import PhotoContainer from "./Components/PhotoContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    images: [],
  };
  componentDidMount() {
    //  Data Fetching
    let query = "parrots";
    this.searchFunction(query);
  }

  searchFunction(query = "parrots") {
    axios({
      method: "get",
      url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${query}&per_page=24&format=json&nojsoncallback=1`,
      responseType: "json",
    }).then((response) => {
      let images = response.data.photos.photo;
      this.setState({
        images,
      });
    });
  }

  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <SearchForm onSearch={(query) => this.searchFunction(query)} />
        <Nav searchFunction={(query) => this.searchFunction(query)} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PhotoContainer
                images={this.state.images}
                onSearch={(query) => this.searchFunction(query)}
              />
            )}
          />
          <Route
            path="/:query"
            render={() => (
              <PhotoContainer
                images={this.state.images}
                onSearch={(query) => this.searchFunction(query)}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
      </div> 
    );
  }
}
export default App;
