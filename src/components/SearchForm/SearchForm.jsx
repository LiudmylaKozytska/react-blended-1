import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    value: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handlerSubmit(this.state.value.trim());
    this.setState({ value: '' });
  };

  handelInputChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { value } = this.state;
    return (
      <SearchFormStyled onSubmit={this.onSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          value={value}
          name="search"
          required
          autoFocus
          onChange={this.handelInputChange}
        />
      </SearchFormStyled>
    );
  }
}
