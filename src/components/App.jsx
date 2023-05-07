import 'modern-normalize';
//import { fetchImages } from 'api';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  /*
  async componentDidMount() {
    try {
      const fetchImages = await fetchImages();
    } catch {}
  }
  */
  /* Пошук зображень */
  handleSubmit = searchText => {
    console.log(searchText);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
      </>
    );
  }
}
