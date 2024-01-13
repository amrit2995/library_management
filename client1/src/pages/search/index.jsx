import React, { Component } from 'react';
import Summary from "./components/summary"
import FilterFields from './components/filter';
import SearchBar from "./components/search_bar"

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedFilter: '',
    };
  }

  handleSearch = () => {
    console.log('Searching for:', this.state.searchText);
    console.log('Selected Filter:', this.state.selectedFilter);
    // Additional search logic
  };

  handleSearchTextChange = (searchText) => {
    this.setState({ searchText });
  };

  handleFilterChange = (selectedFilter) => {
    this.setState({ selectedFilter });
  };

  render() {
    return (
      <div>
        <Summary />
        <SearchBar onSearch={this.handleSearch} onSearchTextChange={this.handleSearchTextChange} />
        <FilterFields onFilterChange={this.handleFilterChange} />
      </div>
    );
  }
}

export default Search;
