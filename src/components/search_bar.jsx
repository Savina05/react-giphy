import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ""
    };
  }

  handleUpdate = (event) => {
    this.setState({
      keyword: event.target.value
    });
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        value={this.state.keyword}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
