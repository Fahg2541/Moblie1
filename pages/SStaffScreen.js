import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="search"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}