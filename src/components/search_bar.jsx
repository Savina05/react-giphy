import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ""
    };
  }

  handleUpdate = (event) => { // arrouw function thanks to babel-plugin-transform-class-properties
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
        onChange={this.handleUpdate} // thanks to babel-plugin-transform-class-properties, otherwhise it would have been this.handleChange.bind(this)
      />
    );
  }
}

export default SearchBar;
